import { AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

interface ISignInBody {
  email: string;
  password: string;
}

export interface IResponseSignIn {
  token: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
}

export const AuthApi = {
  signIn: (data: ISignInBody): Promise<AxiosResponse<IResponseSignIn>> => {
    return apiClient.post("/auth/login", data);
  },
};
