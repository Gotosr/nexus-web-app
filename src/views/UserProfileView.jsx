import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importamos hook de autenticación

function UserProfileView() {
  
  const { user, logout } = useAuth();
  const navigate = useNavigate(); 

 
  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  
  if (!user) {
    return <div>No hay información de usuario disponible. Por favor, inicia sesión.</div>;
  }


  return (
    <div className="view-container-centered"> 
      <h2>Perfil de Usuario</h2>
      
      <p>Bienvenido/a, {user.name}!</p>
      <p>Esta es tu área privada.</p>
      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Cerrar Sesión
      </button>
    </div>
  );
}

export default UserProfileView;