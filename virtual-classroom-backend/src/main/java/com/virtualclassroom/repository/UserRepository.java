package com.virtualclassroom.repository;

import com.virtualclassroom.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Repository interface for User entity.
 * Provides methods to perform CRUD operations and find users by email.
 */
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Finds a user by email.
     *
     * @param email the email to search by
     * @return Optional containing the User if found, empty otherwise
     */
    Optional<User> findByEmail(String email);

    /**
     * Checks if a user exists with the given email.
     *
     * @param email the email to check for existence
     * @return true if user exists, false otherwise
     */
    boolean existsByEmail(String email);
}
