import { createContext, useCallback, useState, } from 'react';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    

    const signIn = () => { };
    const signOut = () => { };

    return (
        <AuthContext.Provider value={{ signIn, signOut, token, refreshToken, user }}>
          {children}
        </AuthContext.Provider>
      );
};