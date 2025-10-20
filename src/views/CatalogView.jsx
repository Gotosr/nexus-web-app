import React from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';

function CatalogView() {
  const { data: libros, loading, error } = useApi('/books');

  if (loading) { return <div className="view-container-centered">Cargando libros... ⏳</div>; }
  if (error) { return <div className="view-container-centered">Error al cargar los libros: {error.message} 😭</div>;}

  return (
    <div className="view-container-centered"> 
      <h2>Catálogo de Libros</h2>
      {libros && libros.length > 0 ? (
        <ul className="catalog-list"> 
          {libros.map((libro) => (
            <li key={libro.id} className="book-item-box"> 
              <Link to={`/libro/${libro.id}`} className="book-item-link"> 
                {libro.title} - por {libro.author.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (<p>No se encontraron libros.</p>)}
    </div>
  );
}
export default CatalogView;