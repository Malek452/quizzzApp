import React, { createContext, useState } from 'react';
import bcrypt from 'bcryptjs';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    localStorage.setItem('auth_user', JSON.stringify({ email, password: hash }));
    setUser({ email });
  };

  const login = (email, password) => {
    const stored = localStorage.getItem('auth_user');
    if (!stored) return false;
    const { email: storedEmail, password: storedHash } = JSON.parse(stored);
    const isValid = storedEmail === email && bcrypt.compareSync(password, storedHash);
    if (isValid) {
      setUser({ email });
    }
    return isValid;
  };

  return (
    <AuthContext.Provider value={{ user, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};
