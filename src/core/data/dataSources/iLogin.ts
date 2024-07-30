import { ApiResponse } from "../../../types/apiResponse";
import { LoginRequest } from "../../domain/useCases/iLogin";

export interface ILoginAxios {
  login(params: LoginRequest, endpoint: string): Promise<ApiResponse>;
}
