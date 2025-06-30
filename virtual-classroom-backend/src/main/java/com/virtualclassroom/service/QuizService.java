package com.virtualclassroom.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.beans.factory.annotation.Value;
import reactor.core.publisher.Mono;

@Service
public class QuizService {

    @Value("${openai.api.key}")
    private String openaiApiKey;

    private final WebClient webClient = WebClient.builder()
            .baseUrl("https://api.openai.com/v1/chat/completions")
            .defaultHeader("Content-Type", "application/json")
            .build();

    public String generateQuiz(String topic) {
        String prompt = "Generate a quiz with 5 multiple choice questions on the topic: " + topic;

        String requestBody = """
        {
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": "%s"}],
          "max_tokens": 500
        }
        """.formatted(prompt);

        return webClient.post()
                .header("Authorization", "Bearer " + openaiApiKey)
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .map(response -> {
                    int startIndex = response.indexOf("\"content\":\"") + 11;
                    int endIndex = response.indexOf("\"", startIndex);
                    return response.substring(startIndex, endIndex).replace("\\n", "\n");
                })
                .block();
    }
}
