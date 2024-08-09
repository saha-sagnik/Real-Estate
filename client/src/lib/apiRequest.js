import axios from "axios";

const apiRequest = axios.create({
    baseURL: "http://localhost:8800/api", // Corrected from baseUrl to baseURL
    withCredentials: true, // This ensures cookies are sent with requests
});

export default apiRequest;
