import { LoginResult } from "../../domain/entities/loginEntity";
import { ILogin, LoginRequest } from "../../domain/useCases/iLogin";

export class LoginController {
  constructor(private readonly repository: ILogin) {}

  async login(params: LoginRequest): Promise<LoginResult> {
    try {
      const result = await this.repository.login(params);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
