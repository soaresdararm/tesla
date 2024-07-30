import { ApiResponse } from "../../../types/apiResponse";

export interface IFindCarListAxios {
  findCarList(endpoint: string): Promise<ApiResponse>;
}
