import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ILoginAxios } from "../data/dataSources/iLogin";
import { LoginRequest } from "../domain/useCases/iLogin";
import { LoginModel } from "../data/models/loginModel";
import { ApiResponse } from "../../types/apiResponse";

export class LoginClientAxios implements ILoginAxios {
  constructor(private readonly axios: AxiosInstance) {}

  async login(params: LoginRequest, endpoint: string): Promise<ApiResponse> {
    try {
      const response: AxiosResponse<ApiResponse> = await this.axios.post(
        endpoint,
        params
      );
      const model = LoginModel.fromJson(response.data.data);

      if (!response.data.success) {
        return {
          success: false,
          message: response.data.message,
        };
      }

      return {
        success: response.data.success,
        data: model,
        message: response.data.message,
      };
    } catch (error: any) {
      const axiosError = error as AxiosError<ApiResponse>;
      return {
        success: false,
        message: axiosError.response?.data?.message,
      };
    }
  }
}
