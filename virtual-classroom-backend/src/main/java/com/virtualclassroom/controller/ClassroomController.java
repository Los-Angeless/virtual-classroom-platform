package com.virtualclassroom.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/classroom")
public class ClassroomController {

    @PostMapping("/create")
    @PreAuthorize("hasRole('INSTRUCTOR')")
    public String createClassroom() {
        return "Classroom created by INSTRUCTOR!";
    }
}
