// src/services/api.js - Version Landing (sans authentification)

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const request = async (endpoint, method, body = null, customHeaders = {}) => {
  const headers = { ...customHeaders };

  const config = { method, headers };

  if (body) {
    if (body instanceof FormData) {
      config.body = body;
    } else {
      config.body = JSON.stringify(body);
      headers["Content-Type"] = "application/json";
    }
  }

  config.headers = headers;

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: `Erreur HTTP ${response.status}` }));
      let errorMessage = errorData.message || errorData.error || `Erreur ${response.status}`;
      if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
        errorMessage = errorData.errors.map(e => e.message).join(' ');
      }
      throw new Error(errorMessage);
    }

    if (response.status === 204) {
      return null;
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }

    return response;

  } catch (error) {
    throw error;
  }
};

export const api = {
  get: (endpoint, headers) => request(endpoint, "GET", null, headers),
  post: (endpoint, body, headers) => request(endpoint, "POST", body, headers),
  put: (endpoint, body, headers) => request(endpoint, "PUT", body, headers),
  patch: (endpoint, body, headers) => request(endpoint, "PATCH", body, headers),
  delete: (endpoint, headers) => request(endpoint, "DELETE", null, headers),
};
