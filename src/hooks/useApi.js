import { useState, useEffect } from 'react';
import apiClient from '../api/axiosConfig'; // Importamos nuestra instancia configurada

// Nuestro custom hook que recibe la URL del endpoint
function useApi(url) {
  const [data, setData] = useState(null);     // Para guardar los datos
  const [loading, setLoading] = useState(true); // Para saber si está cargando
  const [error, setError] = useState(null);     // Para guardar errores

  useEffect(() => {
    // Función asíncrona para hacer la petición
    const fetchData = async () => {
      setLoading(true); // Empieza a cargar
      setError(null);
      try {
        // Usa la instancia apiClient para hacer GET a la url relativa
        const response = await apiClient.get(url);
        setData(response.data); // Guarda los datos si todo va bien
      } catch (err) {
        setError(err); // Guarda el error si algo falla
        console.error(`Error fetching data from ${url}:`, err);
      } finally {
        setLoading(false); // Termina de cargar (con éxito o error)
      }
    };

    fetchData(); // Llama a la función al montar el componente o si url cambia
  }, [url]); // Dependencia: se re-ejecuta si la url cambia

  // Devuelve los estados para que el componente los use
  return { data, loading, error };
}

export default useApi;