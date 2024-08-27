import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
  

    const login = async (credentials) => {
        setUser("User")
        setIsLoggedIn(true)
    }

    const logout = async () => {
        console.log("Logeeg out");
    }

    const register = async (credentials) => {
        console.log("Register");
         
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout, register }}>
          {children}
        </AuthContext.Provider>
    );
}