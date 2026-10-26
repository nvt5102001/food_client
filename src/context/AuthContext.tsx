import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { authService, cartService } from "../services";
import type { User, LoginPayload, RegisterPayload, AuthResponse } from "../services";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  cartCount: number;
  login: (payload: LoginPayload) => Promise<AuthResponse>;
  register: (payload: RegisterPayload) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  refreshCartCount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => authService.getUser());
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => authService.isAuthenticated());
  const [cartCount, setCartCount] = useState<number>(0);

  const refreshCartCount = useCallback(async () => {
    if (!authService.isAuthenticated()) {
      setCartCount(0);
      return;
    }
    try {
      const items = await cartService.getCart();
      const count = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(count);
    } catch {
      // If error or unauthenticated, ignore
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      refreshCartCount();
    }
  }, [isAuthenticated, refreshCartCount]);

  const login = async (payload: LoginPayload) => {
    const res = await authService.login(payload);
    setIsAuthenticated(true);
    setUser(authService.getUser());
    await refreshCartCount();
    return res;
  };

  const register = async (payload: RegisterPayload) => {
    return await authService.register(payload);
  };

  const logout = async () => {
    await authService.logout();
    setIsAuthenticated(false);
    setUser(null);
    setCartCount(0);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        cartCount,
        login,
        register,
        logout,
        refreshCartCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
