import axios from "axios";

const api = axios.create({
    baseURL: "https://194.36.174.46:8413/api",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
})

export default api;