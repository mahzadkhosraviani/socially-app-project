import api from "../lib/axios"

type LoginPayload = { email: string; password: string };
type RegisterPayload = { name: string; email: string; password: string };

export const authService = {
  login: (data: LoginPayload) => api.post("/authentication/login", data),
  register: (data: RegisterPayload) => api.post("/authentication/register", data),
  logout: () => api.post("/authentication/logout"),
  session: () => api.get("/authentication/session"),
  getUserPosts: (userId: string) =>
    api.get(`/users/${userId}/posts`),

  getUserLikes: (userId: string) =>
    api.get(`/users/${userId}/likes`),
};