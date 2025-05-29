// src/services/api.js

const API_BASE = import.meta.env.VITE_API_BASE;

export const uploadCSV = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return fetch(`${API_BASE}/upload/`, {
    method: "POST",
    body: formData,
  });
};

export const predictEnrollment = async (text) => {
  return fetch("http://localhost:8000/predict/enrollment/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
};
