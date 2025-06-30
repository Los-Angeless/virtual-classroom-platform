package com.virtualclassroom.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
// Avoid reserved keyword 'user'
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String fullName;

  @Column(unique = true)
  private String email;

  private String password;

  // Store roles as strings in DB, but use enum in code for safety
  @ElementCollection(fetch = FetchType.EAGER)
  @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
  @Column(name = "role")
  private Set<String> roles;

  // Convenience getter: return roles as Set<Role>
  public Set<Role> getRoleEnums() {
    return roles.stream()
            .map(Role::valueOf)
            .collect(Collectors.toSet());
  }

  // Convenience setter: set roles from Set<Role>
  public void setRoleEnums(Set<Role> roleEnums) {
    this.roles = roleEnums.stream()
            .map(Role::name)
            .collect(Collectors.toSet());
  }
}
