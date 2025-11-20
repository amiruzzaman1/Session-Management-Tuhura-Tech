// API Types based on OpenAPI specification

export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
}

export interface RegisterSuccessResponse {
  status: string;
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserInfo {
  id: number;
  email: string;
  roles: string[];
}

export interface LoginSuccessResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  user: UserInfo;
}

export interface ErrorResponse {
  detail: string;
}

export interface AuthContextType {
  user: UserInfo | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}
