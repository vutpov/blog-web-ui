interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  username: string;
  password: string;
}

export { type LoginRequest, type RegisterRequest };
