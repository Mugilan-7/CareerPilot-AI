package com.careerpilot.api.resume;

import com.careerpilot.api.ai.GeminiCareerAiService;
import com.careerpilot.api.resume.ResumeDtos.*;
import com.careerpilot.api.storage.FileStorageService;
import com.careerpilot.api.user.UserRepository;
import java.nio.charset.StandardCharsets;
import java.util.List;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ResumeService {
  private final ResumeRepository resumes;
  private final UserRepository users;
  private final FileStorageService storage;
  private final GeminiCareerAiService ai;

  public ResumeService(ResumeRepository resumes, UserRepository users, FileStorageService storage, GeminiCareerAiService ai) {
    this.resumes = resumes;
    this.users = users;
    this.storage = storage;
    this.ai = ai;
  }

  @Transactional
  public ResumeInsight analyze(MultipartFile file, Authentication authentication) {
    if (file.isEmpty()) {
      throw new IllegalArgumentException("Resume file is required");
    }
    var user = users.findByEmail(authentication.getName()).orElseThrow();
    var extracted = extractText(file);
    var insight = ai.analyzeResume(extracted);
    var document = new ResumeDocument();
    document.setUser(user);
    document.setFileName(file.getOriginalFilename() == null ? "resume" : file.getOriginalFilename());
    document.setFileUrl(storage.upload(file));
    document.setExtractedText(extracted);
    document.setAtsScore(insight.atsScore());
    document.setReadabilityScore(insight.readabilityScore());
    document.setAttentionScore(insight.attentionScore());
    document.setRiskScore(insight.riskScore());
    resumes.save(document);
    return insight;
  }

  public List<TimelinePoint> timeline(Authentication authentication) {
    return resumes.findTop12ByUserEmailOrderByCreatedAtAsc(authentication.getName()).stream()
      .map(resume -> new TimelinePoint(resume.getId(), resume.getCreatedAt(), resume.getAtsScore(), resume.getReadabilityScore(), resume.getAttentionScore(), resume.getRiskScore()))
      .toList();
  }

  private String extractText(MultipartFile file) {
    try {
      var bytes = file.getBytes();
      var text = new String(bytes, StandardCharsets.UTF_8).replaceAll("\\p{Cntrl}", " ").trim();
      return text.isBlank() ? "Binary resume uploaded: " + file.getOriginalFilename() : text.substring(0, Math.min(text.length(), 18000));
    } catch (Exception ex) {
      throw new IllegalArgumentException("Unable to read resume");
    }
  }
}
