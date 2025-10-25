import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

function BookDetailView() {
  const { id } = useParams();
  const { data: libro, loading, error } = useApi(`/books/${id}`);

 
  if (loading) {
    return <div className="loading-message">Cargando detalles del libro... ⏳</div>;
  }
  if (error) {
    return <div className="error-message">Error al cargar el libro: {error.message} 😭</div>;
  }
  if (!libro) {
    return <div className="not-found-message">No se encontró el libro.</div>;
  }

  return (
    
    <div className="book-detail-container">
      <h2>{libro.title}</h2>
      {libro.coverImage && (
        <img
          src={libro.coverImage}
          alt={`Portada de ${libro.title}`}
          className="book-detail-image" 
        />
      )}
      
      <p className="book-detail-paragraph"><strong>Autor:</strong> {libro.author.name}</p>
      <p className="book-detail-paragraph"><strong>Editorial:</strong> {libro.publisher.name}</p>
      <p className="book-detail-paragraph"><strong>Género:</strong> {libro.category.name}</p>
      <p className="book-detail-paragraph"><strong>Año:</strong> {libro.year}</p>
      <p className="book-detail-paragraph"><strong>ISBN:</strong> {libro.isbn}</p>
      <p className="book-detail-paragraph"><strong>Precio:</strong> ${libro.price}</p>
      <p className="book-detail-paragraph"><strong>Descripción:</strong> {libro.description}</p>
      
    </div>
  );
}

export default BookDetailView;