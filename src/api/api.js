import axios from "axios";

const API_BASE_URL = "https://advertisment-backend.onrender.com/api/accounts";

// User Registration
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register/`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};

// Partner Apply
export const partnerApply = async (partnerData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/partner-apply/`, partnerData);
    return response.data;
  } catch (error) {
    console.error("Partner Application Error:", error.response?.data || error.message);
    throw error;
  }
};

// Help Request
export const submitHelpRequest = async (helpData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/help/`, helpData);
    return response.data;
  } catch (error) {
    console.error("Help Request Error:", error.response?.data || error.message);
    throw error;
  }
};
