import React from "react";
import { renderHook, act } from '@testing-library/react';
import { AuthProvider, AuthContext } from './AuthContext';

beforeEach(() => {
  localStorage.clear();
});

test('signup stores hashed password and login validates', () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  const { result } = renderHook(() => React.useContext(AuthContext), { wrapper });

  act(() => {
    result.current.signup('test@example.com', 'secret');
  });

  const stored = JSON.parse(localStorage.getItem('auth_user'));
  expect(stored.email).toBe('test@example.com');
  expect(stored.password).not.toBe('secret');

  let loginResult;
  act(() => {
    loginResult = result.current.login('test@example.com', 'secret');
  });
  expect(loginResult).toBe(true);
});
