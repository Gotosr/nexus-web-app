import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginView() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => { };

  return (
    <div className="login-view-container"> 
      <h2>Página de Login</h2>
      <form onSubmit={handleSubmit} className="login-form"> 
        <div className="input-group"> 
          <label htmlFor="username">Usuario: </label>
          <input/>
        </div>
        <div className="input-group"> 
          <label htmlFor="password">Contraseña: </label>
          <input/>
        </div>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        
        <button type="submit" className="login-button" style={{ marginTop: '15px' }}>Iniciar Sesión</button>
      </form>
    </div>
  );
}
export default LoginView;