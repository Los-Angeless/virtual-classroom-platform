package com.virtualclassroom.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtUtils {

    // Secret key should be at least 256 bits (32 bytes) for HS512
    private final String jwtSecret = "superSecretKeyThatIsVeryLongAndSecure12345";

    private final long jwtExpirationMs = 86400000; // 1 day in milliseconds

    // Generate the SecretKey once for signing and validation
    private SecretKey getSigningKey() {
        // Use raw bytes from the secret string (avoid double Base64 encoding)
        byte[] keyBytes = jwtSecret.getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // Generate JWT token for given email/username
    public String generateJwtToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(getSigningKey(), SignatureAlgorithm.HS512)
                .compact();
    }

    // Extract username/email from token
    public String getUserNameFromJwtToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Validate the JWT token (expiration, signature, format)
    public boolean validateJwtToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(getSigningKey())
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            // Log the error if needed
            // e.g. logger.error("JWT validation error: {}", e.getMessage());
            return false;
        }
    }
}
