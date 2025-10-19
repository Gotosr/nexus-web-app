import React from 'react';
import { useParams } from 'react-router-dom'; // Importamos useParams
import useApi from '../hooks/useApi'; // Importamos nuestro hook

function BookDetailView() {
  
  const { id } = useParams();

  
  const { data: libro, loading, error } = useApi(`/books/${id}`);

  
  if (loading) {
    return <div>Cargando detalles del libro... ⏳</div>;
  }
  if (error) {
    return <div>Error al cargar el libro: {error.message} 😭</div>;
  }
  
  if (!libro) {
    return <div>No se encontró el libro.</div>;
  }

  
  return (
    <div>
      
      <h2>{libro.title}</h2>
      <p><strong>Autor:</strong> {libro.author.name}</p>
      <p><strong>Editorial:</strong> {libro.publisher.name}</p> 
      <p><strong>Género:</strong> {libro.category.name}</p> 
      <p><strong>Año:</strong> {libro.year}</p>
      <p><strong>ISBN:</strong> {libro.isbn}</p>
      <p><strong>Precio:</strong> ${libro.price}</p> 
      <p><strong>Descripción:</strong> {libro.description}</p>
      {libro.coverImage && ( // Imagen
        <img
          src={libro.coverImage}
          alt={`Portada de ${libro.title}`}
          style={{ maxWidth: '200px', marginTop: '10px' }}
        />
      )}
    </div>
  );
}

export default BookDetailView;