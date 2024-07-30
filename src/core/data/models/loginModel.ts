import { LoginResult } from "../../domain/entities/loginEntity";

export class LoginModel {
  static fromJson(json: any) {
    return new LoginResult(json.email, json.name);
  }
}
