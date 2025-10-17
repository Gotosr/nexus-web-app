import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link

function LandingView() {
  return (
    <div>
      <h2>¡Bienvenido a Librería Nexus!</h2>
      <p>Tu espacio multifuncional para libros, co-working y café.</p>
      
      <Link to="/catalogo">
        <button style={{ marginTop: '20px' }}>Ver Catálogo de Libros</button>
      </Link>
    </div>
  );
}

export default LandingView;