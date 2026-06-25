package com.careerpilot.api.auth;

import com.careerpilot.api.auth.AuthDtos.*;
import com.careerpilot.api.config.JwtService;
import com.careerpilot.api.user.User;
import com.careerpilot.api.user.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {
  private final UserRepository users;
  private final PasswordEncoder encoder;
  private final JwtService jwt;

  public AuthService(UserRepository users, PasswordEncoder encoder, JwtService jwt) {
    this.users = users;
    this.encoder = encoder;
    this.jwt = jwt;
  }

  @Transactional
  public AuthResponse register(RegisterRequest request) {
    if (users.existsByEmail(request.email())) {
      throw new IllegalArgumentException("Email already registered");
    }
    var user = new User();
    user.setFullName(request.fullName());
    user.setEmail(request.email().toLowerCase());
    user.setPasswordHash(encoder.encode(request.password()));
    users.save(user);
    return response(user);
  }

  public AuthResponse login(LoginRequest request) {
    var user = users.findByEmail(request.email().toLowerCase()).orElseThrow(() -> new IllegalArgumentException("Invalid credentials"));
    if (!encoder.matches(request.password(), user.getPasswordHash())) {
      throw new IllegalArgumentException("Invalid credentials");
    }
    return response(user);
  }

  private AuthResponse response(User user) {
    return new AuthResponse(jwt.createToken(user), user.getEmail(), user.getFullName(), user.getRole().name());
  }
}
