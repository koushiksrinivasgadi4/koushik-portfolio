package com.portfolio.contact;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {
    private final ContactMessageRepository repository;

    public ContactController(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "UP", "service", "portfolio-api");
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> createMessage(@Valid @RequestBody ContactRequest request) {
        ContactMessage message = new ContactMessage(
                request.name().trim(),
                request.email().trim(),
                request.subject() == null ? "" : request.subject().trim(),
                request.message().trim()
        );
        repository.save(message);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("message", "Your message has been received."));
    }
}
