import axios from "axios";

const BASE_URL = "https://interview-test.azurewebsites.net/api";
const RAISE_TICKET_ENDPOINT = "Tickets/RaiseTicket";

export async function apiWorkOrderServices(endpoint, method, data = {}) {
  const apiEndpoint = `${BASE_URL}/${endpoint}`;
  const token = localStorage.getItem("bearerToken");
  const body = method === "POST" ? JSON.stringify(data) : null;
  try {
    const response = await axios(`${apiEndpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
