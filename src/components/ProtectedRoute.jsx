import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 


function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth(); // Obtenemos el estado de autenticación del contexto
  const location = useLocation(); // Obtenemos la ubicación actual

  
  if (!isLoggedIn) {
    
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  
  return children;
}

export default ProtectedRoute;