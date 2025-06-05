import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const signup = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
      throw new Error('User already exists');
    }
    const newUser = { username, password, doneQuizzes: [] };
    users[username] = newUser;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const existing = users[username];
    if (!existing || existing.password !== password) {
      throw new Error('Invalid credentials');
    }
    localStorage.setItem('currentUser', JSON.stringify(existing));
    setUser(existing);
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  const markQuizDone = (quizId) => {
    setUser(prev => {
      if (!prev) return prev;
      const done = new Set(prev.doneQuizzes || []);
      done.add(quizId);
      const updated = { ...prev, doneQuizzes: Array.from(done) };
      const users = JSON.parse(localStorage.getItem('users')) || {};
      users[updated.username] = updated;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, markQuizDone }}>
      {children}
    </AuthContext.Provider>
  );
}
