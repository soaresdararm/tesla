import { LoginResult } from "../../domain/entities/loginEntity";
import { ILogin, LoginRequest } from "../../domain/useCases/iLogin";
import { ILoginAxios } from "../dataSources/iLogin";

export class Login implements ILogin {
  constructor(
    private readonly dataSource: ILoginAxios,
    private readonly endpoint: string
  ) {}

  async login(params: LoginRequest): Promise<LoginResult> {
    const result = await this.dataSource.login(params, this.endpoint);

    if (result?.success === false) throw result?.message;

    return result?.data;
  }
}
