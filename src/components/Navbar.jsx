import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Importa NavLink
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };


  const navStyle = {
    backgroundColor: '#5a4b9f', 
    padding: '15px 30px',      
    borderRadius: '8px 8px 0 0', 
    marginBottom: '20px',     
    display: 'flex',            
    alignItems: 'center',      
  };

  const linkStyle = {
    color: 'white',            
    textDecoration: 'none',    
    marginRight: '20px',      
    fontSize: '1.1rem',        
    fontWeight: '500',          
  };

 
  const activeLinkStyle = {
    fontWeight: 'bold',         
    textDecoration: 'underline',
  };

  const userStyle = {
    color: '#e0e0e0',           
    marginRight: '20px',
    fontSize: '0.9rem',
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    color: '#ffc107',          
    cursor: 'pointer',
    padding: 0,
    fontSize: '1.1rem',
    fontWeight: '500',
    fontFamily: 'inherit',
    marginLeft: 'auto',         
  };

  return (
    <nav style={navStyle}>
      
      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeLinkStyle : {}),
        })}
      >
        Inicio
      </NavLink>
      <NavLink
        to="/catalogo"
        style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeLinkStyle : {}),
        })}
      >
        Catálogo
      </NavLink>
      <NavLink
        to="/sobre-nosotros"
        style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeLinkStyle : {}),
        })}
      >
        Sobre Nosotros
      </NavLink>

      {isLoggedIn ? (
        <>
          <NavLink
            to="/perfil"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLinkStyle : {}),
            })}
          >
            Mi Perfil
          </NavLink>
          
          {user?.name && <span style={userStyle}>({user.name})</span>}
          <button onClick={handleLogout} style={buttonStyle}>Logout</button>
        </>
      ) : (
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {}),
             marginLeft: 'auto', 
          })}
        >
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;