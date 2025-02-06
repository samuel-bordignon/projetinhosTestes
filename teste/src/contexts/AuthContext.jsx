import { createContext, useState, useEffect, useContext } from "react";

// Criar o contexto
const AuthContext = createContext();

// Provedor do contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Verificar se há um usuário salvo no localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Converte string JSON para objeto
    }
  }, []);

  // Função de Login (salva no contexto e no localStorage)
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Salva no localStorage
  };

  // Função de Logout (limpa os dados)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para consumir o contexto
export function useAuth() {
  return useContext(AuthContext);
}
