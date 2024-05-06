import axios from "../../node_modules/axios/index";

const apiClient = axios.create(
   {
    baseURL:"http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
      },
   } 
)

export default apiClient;