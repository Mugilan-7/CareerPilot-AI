package com.careerpilot.api.admin;

import com.careerpilot.api.resume.ResumeRepository;
import com.careerpilot.api.user.UserRepository;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {
  private final UserRepository users;
  private final ResumeRepository resumes;

  public AdminController(UserRepository users, ResumeRepository resumes) {
    this.users = users;
    this.resumes = resumes;
  }

  @GetMapping("/metrics")
  Map<String, Object> metrics() {
    return Map.of(
      "users", users.count(),
      "resumes", resumes.count(),
      "aiUsage", Map.of("provider", "Gemini", "status", "configured-by-env"),
      "storage", Map.of("provider", "Cloudinary", "status", "configured-by-env")
    );
  }
}
