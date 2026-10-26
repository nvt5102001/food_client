import api from "./api";
import type { AuthResponse, LoginPayload, RegisterPayload, User } from "./types";

const TOKEN_KEY = "token";
const USER_KEY = "user_info";

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/login", payload);
    const data = response.data;
    if (data.token) {
      authService.setToken(data.token);
    }
    if (data.user) {
      authService.setUser(data.user);
    } else {
      // Create minimal user object if not provided directly
      authService.setUser({ email: payload.email });
    }
    return data;
  },

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/register", payload);
    return response.data;
  },

  async logout(): Promise<void> {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      console.warn("Backend logout warning:", err);
    } finally {
      authService.removeToken();
    }
  },

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  setUser(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  getUser(): User | null {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  },
};
