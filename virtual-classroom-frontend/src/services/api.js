// src/services/api.js

const BASE_URL = "http://localhost:8081/api/auth"; // Your backend URL

export const registerUser = async (formData) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) throw new Error("Registration failed");
  return response.json();
};

export const loginUser = async (formData) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) throw new Error("Login failed");
  return response.json(); // Should contain JWT token + role
};
