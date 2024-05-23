import axios from "axios";

const BASE_URL = "https://interview-test.azurewebsites.net/api";

export async function apiWorkOrderServices(endpoint, method, data = {}) {
  const apiEndpoint = `${BASE_URL}/${endpoint}`;
  const token = localStorage.getItem("bearerToken");
  try {
    const response = await axios(`${apiEndpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: method === "POST" ? JSON.stringify(data) : null,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
