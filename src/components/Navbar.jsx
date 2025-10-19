import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

function Navbar() {
  const { isLoggedIn, logout, user } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  const linkStyle = { marginRight: '15px', textDecoration: 'none', color: 'blue' };
  const buttonStyle = { 
    background: 'none',
    border: 'none',
    color: 'blue',
    cursor: 'pointer',
    padding: 0,
    marginRight: '15px',
    fontFamily: 'inherit', 
    fontSize: 'inherit'   
  };


  return (
    <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <Link to="/" style={linkStyle}>Inicio</Link>
      <Link to="/catalogo" style={linkStyle}>Catálogo</Link>
      <Link to="/sobre-nosotros" style={linkStyle}>Sobre Nosotros</Link>

      
      {isLoggedIn ? (
        <>
          <Link to="/perfil" style={linkStyle}>Mi Perfil ({user?.name})</Link> 
          <button onClick={handleLogout} style={buttonStyle}>Logout</button>
        </>
      ) : (
        <Link to="/login" style={linkStyle}>Login</Link>
      )}
    </nav>
  );
}

export default Navbar;