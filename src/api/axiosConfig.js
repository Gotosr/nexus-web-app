import axios from 'axios';


const API_BASE_URL = 'https://mock.apidog.com/m1/1099255-1089272-default'; 


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default apiClient;