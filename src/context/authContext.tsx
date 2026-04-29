import React, { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/authService";

type User = any;  

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await authService.session();
        setUser(res.data?.data.user ?? res.data ?? null);
         console.log("SESSION USER =>", res.data?.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);


  const login = async (email: string, password: string) => {
    const res = await authService.login({ email, password });
    console.log("SESSION", res.data);
    console.log("SESSION", res.data?.user);
    setUser(res.data?.data.user ?? res.data ?? null);
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await authService.register({ name, email, password });
    setUser(res.data?.data.user ?? res.data ?? null);
    console.log("SESSION", res.data);
    console.log("SESSION", res.data.data?.user);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
