package com.careerpilot.api.resume;

import com.careerpilot.api.ai.GeminiCareerAiService;
import com.careerpilot.api.resume.ResumeDtos.*;
import java.util.List;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/resumes")
public class ResumeController {
  private final ResumeService resumes;
  private final GeminiCareerAiService ai;

  public ResumeController(ResumeService resumes, GeminiCareerAiService ai) {
    this.resumes = resumes;
    this.ai = ai;
  }

  @PostMapping("/analyze")
  ResumeInsight analyze(@RequestParam MultipartFile file, Authentication authentication) {
    return resumes.analyze(file, authentication);
  }

  @GetMapping("/timeline")
  List<TimelinePoint> timeline(Authentication authentication) {
    return resumes.timeline(authentication);
  }

  @PostMapping("/match-job")
  JobMatchResponse matchJob(@RequestBody JobMatchRequest request) {
    return ai.matchJob(request);
  }

  @PostMapping("/career-roadmap")
  CareerRoadmapResponse roadmap(@RequestBody CareerRoadmapRequest request) {
    return ai.roadmap(request);
  }

  @PostMapping("/interviews")
  InterviewResponse interviews(@RequestBody InterviewRequest request) {
    return ai.interviews(request);
  }
}
