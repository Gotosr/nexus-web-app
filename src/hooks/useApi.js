import { useState, useEffect } from 'react';
import apiClient from '../api/axiosConfig'; 


function useApi(url) {
  const [data, setData] = useState(null);     
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  useEffect(() => {
   
    const fetchData = async () => {
      setLoading(true); 
      setError(null);
      try {
        
        const response = await apiClient.get(url);
        setData(response.data); 
      } catch (err) {
        setError(err); 
        console.error(`Error fetching data from ${url}:`, err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, [url]); 

 
  return { data, loading, error };
}

export default useApi;