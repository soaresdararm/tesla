import { LoginResult } from '../entities/loginEntity'

export type LoginRequest = {
  email: string
  password: string
}

export interface ILogin {
  login: (params: LoginRequest) => Promise<LoginResult>
}
