package com.careerpilot.api.resume;

import com.careerpilot.api.user.User;
import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "resume_documents")
public class ResumeDocument {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  private User user;

  @Column(nullable = false)
  private String fileName;

  @Column(nullable = false)
  private String fileUrl;

  @Column(length = 20000)
  private String extractedText;

  private int atsScore;
  private int readabilityScore;
  private int attentionScore;
  private int riskScore;
  private Instant createdAt = Instant.now();

  public UUID getId() { return id; }
  public User getUser() { return user; }
  public void setUser(User user) { this.user = user; }
  public String getFileName() { return fileName; }
  public void setFileName(String fileName) { this.fileName = fileName; }
  public String getFileUrl() { return fileUrl; }
  public void setFileUrl(String fileUrl) { this.fileUrl = fileUrl; }
  public String getExtractedText() { return extractedText; }
  public void setExtractedText(String extractedText) { this.extractedText = extractedText; }
  public int getAtsScore() { return atsScore; }
  public void setAtsScore(int atsScore) { this.atsScore = atsScore; }
  public int getReadabilityScore() { return readabilityScore; }
  public void setReadabilityScore(int readabilityScore) { this.readabilityScore = readabilityScore; }
  public int getAttentionScore() { return attentionScore; }
  public void setAttentionScore(int attentionScore) { this.attentionScore = attentionScore; }
  public int getRiskScore() { return riskScore; }
  public void setRiskScore(int riskScore) { this.riskScore = riskScore; }
  public Instant getCreatedAt() { return createdAt; }
}
