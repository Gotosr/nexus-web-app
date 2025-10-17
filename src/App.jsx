import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importaciones de Vistas y Componentes
import ProtectedRoute from './components/ProtectedRoute'; // Importa el guardián
import LandingView from './views/LandingView';
import LoginView from './views/LoginView';
import CatalogView from './views/CatalogView';
import BookDetailView from './views/BookDetailView';
import AboutView from './views/AboutView';
import UserProfileView from './views/UserProfileView';
import NotFoundView from './views/NotFoundView';
import Navbar from './components/Navbar'; 

function App() {
  return ( 
    <BrowserRouter>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/catalogo" element={<CatalogView />} />
        <Route path="/libro/:id" element={<BookDetailView />} />
        <Route path="/sobre-nosotros" element={<AboutView />} />

        
        <Route
          path="/perfil"
          element={
            <ProtectedRoute> 
              <UserProfileView />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundView />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;