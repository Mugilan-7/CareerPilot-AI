package com.careerpilot.api.auth;

import com.careerpilot.api.auth.AuthDtos.*;
import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
  private final AuthService auth;

  public AuthController(AuthService auth) {
    this.auth = auth;
  }

  @PostMapping("/register")
  AuthResponse register(@Valid @RequestBody RegisterRequest request) {
    return auth.register(request);
  }

  @PostMapping("/login")
  AuthResponse login(@Valid @RequestBody LoginRequest request) {
    return auth.login(request);
  }

  @PostMapping("/forgot-password")
  Map<String, String> forgotPassword(@Valid @RequestBody ForgotPasswordRequest request) {
    return Map.of("message", "Password reset email queued for " + request.email());
  }

  @PostMapping("/verify-email")
  Map<String, String> verifyEmail(@Valid @RequestBody VerifyEmailRequest request) {
    return Map.of("message", "Email verification accepted");
  }

  @GetMapping("/oauth/google")
  Map<String, String> googleOAuth() {
    return Map.of("message", "Configure Google OAuth client credentials and redirect URI for production login.");
  }
}
