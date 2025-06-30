package com.virtualclassroom.controller;

import com.virtualclassroom.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin(origins = "*")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping("/generate")
    public Map<String, String> generateQuiz(@RequestBody Map<String, String> request) {
        String topic = request.get("topic");
        String quiz = quizService.generateQuiz(topic);
        return Map.of("quiz", quiz);
    }
}
