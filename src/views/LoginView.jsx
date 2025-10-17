import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importamos el hook de autenticación

function LoginView() {
  
  const { login } = useAuth();
  
  const navigate = useNavigate();
  
  const location = useLocation();

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setError(''); 

   
    // Usuario y CLave 'test'/'test'.
    if (username === 'test' && password === 'test') {
      
      login({ username: username, name: 'Usuario de Prueba' });

      
      const fromPage = location.state?.from?.pathname || '/'; 
      navigate(fromPage, { replace: true }); 
    } else {
      
      setError('Nombre de usuario o contraseña incorrectos.');
    }
  };

  return (
    <div>
      <h2>Página de Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div style={{ marginTop: '10px' }}> 
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        <button type="submit" style={{ marginTop: '15px' }}>Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginView;