import { API } from "@/constant";
import { LoginResponse, MeResponse } from "@/models/reponse/auth.response";
import { ReponseData } from "@/models/reponse/index.response";
import { LoginRequest, RegisterRequest } from "@/models/request/auth.request";
import getAxiosConfig from ".";

class AuthService {
  async login(args: LoginRequest): Promise<ReponseData<LoginResponse>> {
    const response = await getAxiosConfig().post(API.LOG_IN, args);

    return response.data;
  }

  async me(token?: string): Promise<ReponseData<MeResponse>> {
    const response = await getAxiosConfig({
      token,
    }).get(API.ME);

    return response.data;
  }

  async register(args: RegisterRequest): Promise<ReponseData<MeResponse>> {
    const response = await getAxiosConfig().post(API.REGISTER, args);

    return response.data;
  }
}

export default AuthService;
