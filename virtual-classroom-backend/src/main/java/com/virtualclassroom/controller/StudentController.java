package com.virtualclassroom.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('STUDENT')")
    public String studentDashboard() {
        return "Welcome to the student dashboard!";
    }
}
