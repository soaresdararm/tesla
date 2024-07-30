import { LoginResult } from "../../../domain/entities/loginEntity";
import { LoginRequest } from "../../../domain/useCases/iLogin";
import * as types from "../types/loginTypes";

export const loginRequest = (payload: LoginRequest) => ({
  type: types.LOGIN_REQUEST,
  payload,
});

export const loginError = (payload: string) => ({
  type: types.LOGIN_ERROR,
  payload,
});

export const loginSuccess = (payload: LoginResult) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginReset = () => ({
  type: types.LOGIN_RESET,
});
