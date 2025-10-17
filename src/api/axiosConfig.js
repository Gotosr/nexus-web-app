import axios from 'axios';

// URL base de tu API simulada en Apidog
const API_BASE_URL = 'https://mock.apidog.com/m1/1099255-1089272-default'; 

// Creamos una instancia de Axios con la URL base configurada
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default apiClient;