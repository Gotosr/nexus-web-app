import React from 'react';
import useApi from '../hooks/useApi'; // Importamos nuestro custom hook
import { Link } from 'react-router-dom';

function CatalogView() {
    
    const { data: libros, loading, error } = useApi('/books');

    
    if (loading) {
        return <div>Cargando libros... ⏳</div>;
    }

    
    if (error) {
        return <div>Error al cargar los libros: {error.message} 😭</div>;
    }

    return (
    <div>
      <h2>Catálogo de Libros</h2>
      {libros && libros.length > 0 ? (
        <ul>
          {libros.map((libro) => (
            <li key={libro.id}>
              
              <Link to={`/libro/${libro.id}`}>
                {libro.title} - por {libro.author.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron libros.</p>
      )}
    </div>
  );
}

export default CatalogView;