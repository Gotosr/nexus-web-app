import React, { createContext, useState, useContext } from 'react';


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Estado para guardar la información del usuario (null si no está logueado)
  const [user, setUser] = useState(null);

  // Función para simular el inicio de sesión
  const login = (userData) => {
    // En una app real, aquí verificarías las credenciales
    // Por ahora, simplemente guardamos los datos del usuario
    setUser(userData);
    console.log('Usuario ha iniciado sesión:', userData);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    console.log('Usuario ha cerrado sesión.');
  };

  // El valor que proveerá el contexto: el usuario y las funciones login/logout
  const value = {
    user,     // El estado del usuario (null o con datos)
    isLoggedIn: !!user, // Un booleano para saber fácilmente si está logueado
    login,    // La función para iniciar sesión
    logout    // La función para cerrar sesión
  };

  // Retornamos el proveedor con el valor y los componentes hijos
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Creamos un custom hook para usar fácilmente el contexto
// En lugar de importar useContext y AuthContext cada vez, usaremos useAuth()
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}