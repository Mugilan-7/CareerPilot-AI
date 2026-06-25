package com.careerpilot.api.resume;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

public class ResumeDtos {
  public record ResumeInsight(
    int atsScore,
    int readabilityScore,
    int attentionScore,
    int riskScore,
    List<String> missingSkills,
    List<String> strengths,
    List<String> suggestions
  ) {}

  public record TimelinePoint(UUID resumeId, Instant createdAt, int atsScore, int readabilityScore, int attentionScore, int riskScore) {}
  public record JobMatchRequest(String resumeText, String jobDescription) {}
  public record JobMatchResponse(int matchPercentage, List<String> missingSkills, String salaryPrediction, List<String> learningRoadmap) {}
  public record CareerRoadmapRequest(String targetCareer) {}
  public record CareerRoadmapResponse(String sixMonths, String oneYear, String threeYears, List<String> projects, List<String> certifications, String salaryPrediction, List<String> requiredSkills) {}
  public record InterviewRequest(String resumeText, String companyName, String jobRole) {}
  public record InterviewResponse(List<String> hr, List<String> technical, List<String> coding, List<String> behavioral, List<String> systemDesign) {}
}
