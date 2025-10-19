import React, { createContext, useState, useContext } from 'react';


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
 
  const [user, setUser] = useState(null);

  
  const login = (userData) => {
    
    setUser(userData);
    console.log('Usuario ha iniciado sesión:', userData);
  };

 
  const logout = () => {
    setUser(null);
    console.log('Usuario ha cerrado sesión.');
  };

  
  const value = {
    user,     
    isLoggedIn: !!user, 
    login,    
    logout    
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}