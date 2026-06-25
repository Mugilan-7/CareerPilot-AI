package com.careerpilot.api.ai;

import com.careerpilot.api.resume.ResumeDtos.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GeminiCareerAiService {
  private final String apiKey;

  public GeminiCareerAiService(@Value("${app.gemini.api-key}") String apiKey) {
    this.apiKey = apiKey;
  }

  public ResumeInsight analyzeResume(String extractedText) {
    // Replace this deterministic fallback with Gemini JSON-mode calls when GEMINI_API_KEY is configured.
    int lengthScore = Math.min(25, Math.max(8, extractedText.length() / 120));
    int ats = Math.min(96, 62 + lengthScore);
    return new ResumeInsight(
      ats,
      Math.min(92, ats - 4),
      Math.min(90, ats - 8),
      Math.max(8, 100 - ats - 4),
      List.of("Kafka", "Redis", "Cloud deployment metrics", "System design diagrams"),
      List.of("Clear backend focus", "Relevant project experience", "Strong Java and React signals"),
      List.of("Quantify every achievement with latency, revenue, users, or cost impact", "Move target-role keywords into the top third", "Add links to deployed projects and GitHub repositories", "Remove repeated phrases and compress older education details")
    );
  }

  public JobMatchResponse matchJob(JobMatchRequest request) {
    return new JobMatchResponse(84, List.of("Kubernetes", "Kafka", "Observability"), "INR 12-18 LPA", List.of("Revise DSA patterns", "Build one event-driven project", "Practice two system design cases weekly"));
  }

  public CareerRoadmapResponse roadmap(CareerRoadmapRequest request) {
    return new CareerRoadmapResponse(
      "Build advanced Spring Boot APIs, testing discipline, Docker, PostgreSQL performance, and one deployed SaaS project.",
      "Own distributed services, learn Kafka/Redis, publish technical writeups, and lead small feature areas.",
      "Design multi-service systems, mentor engineers, lead incident reviews, and interview for senior backend roles.",
      List.of("AI job matching platform", "Realtime collaboration API", "Cloud observability dashboard"),
      List.of("AWS Developer Associate", "Kubernetes Application Developer", "Oracle Java certification"),
      "INR 18-35 LPA depending on market, interview performance, and company tier",
      List.of("Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "System Design", "Testing")
    );
  }

  public InterviewResponse interviews(InterviewRequest request) {
    return new InterviewResponse(
      List.of("Tell me about yourself for " + request.jobRole(), "Why " + request.companyName() + "?", "Describe a failure and what changed afterward."),
      List.of("Explain transaction isolation levels.", "How would you secure REST APIs?", "How do you profile a slow endpoint?"),
      List.of("Implement LRU cache.", "Find top K frequent elements.", "Design rate limiter data structures."),
      List.of("Tell me about conflict resolution.", "Give an example of ownership.", "How do you handle ambiguous requirements?"),
      List.of("Design a resume analysis service.", "Design a notification pipeline.", "Design a GitHub analytics ingestion system.")
    );
  }
}
