import React from 'react';
import useApi from '../hooks/useApi'; // Importamos el hook

function AboutView() {
  
  const { data: libraryInfo, loading, error } = useApi('/library');

  if (loading) {
    return <div>Cargando información de la librería... ⏳</div>;
  }
  if (error) {
    return <div>Error al cargar la información: {error.message} 😭</div>;
  }

  if (!libraryInfo) {
    return <div>No se encontró información de la librería.</div>;
  }

  
  return (
    <div>
      <h2>Sobre Nosotros: {libraryInfo.name}</h2>
      <p>{libraryInfo.description}</p>
      <p><strong>Dirección:</strong> {libraryInfo.address}</p>
      <p><strong>Teléfono:</strong> {libraryInfo.phone}</p>
      <p><strong>Email:</strong> {libraryInfo.email}</p>
      <p><strong>Sitio Web:</strong> <a href={libraryInfo.website} target="_blank" rel="noopener noreferrer">{libraryInfo.website}</a></p>
      
    </div>
  );
}

export default AboutView;