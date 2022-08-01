interface LoginResponse {
  token?: string;
}

interface MeResponse {
  enabled: boolean;
  id: number;
  roles: { id: number; name: string }[];
  username: string;
}

export { type LoginResponse, type MeResponse };
