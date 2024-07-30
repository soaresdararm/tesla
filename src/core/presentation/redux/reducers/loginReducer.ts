import { AnyAction } from "redux";
import { LoginResult } from "../../../domain/entities/loginEntity";
import * as types from "../types/loginTypes";

export const initialLoginState = {
  user: null as unknown as LoginResult,
  load: false,
  error: "",
};

export const loginReducer = (state = initialLoginState, action: AnyAction) => {
  const newState = { ...state };

  switch (action.type) {
    case types.LOGIN_REQUEST:
      newState.load = true;
      return newState;

    case types.LOGIN_SUCCESS:
      newState.load = false;
      newState.user = action.payload;
      return newState;

    case types.LOGIN_ERROR:
      newState.load = false;
      newState.error = action.payload;
      return newState;

    case types.LOGIN_RESET:
      return initialLoginState;

    default:
      return { ...state };
  }
};
