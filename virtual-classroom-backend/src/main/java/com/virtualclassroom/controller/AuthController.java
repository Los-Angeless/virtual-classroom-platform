package com.virtualclassroom.controller;

import com.virtualclassroom.dto.LoginRequest;
import com.virtualclassroom.dto.RegisterRequest;
import com.virtualclassroom.model.User;
import com.virtualclassroom.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        User user = authService.registerUser(
                request.getFullName(),
                request.getEmail(),
                request.getPassword(),
                request.getRole() != null ? request.getRole() : "ROLE_STUDENT"
        );
        return ResponseEntity.ok(Map.of("message", "User registered successfully", "user", user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        String token = authService.loginUser(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(Map.of("token", token, "message", "Login successful"));
    }
}
