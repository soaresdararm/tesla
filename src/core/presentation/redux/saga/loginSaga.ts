import { call, put } from "redux-saga/effects";
import { apiConfig } from "../../../../config/apiConfig";
import { Login } from "../../../data/repositories/login";
import { LoginResult } from "../../../domain/entities/loginEntity";
import { LoginRequest } from "../../../domain/useCases/iLogin";
import { LoginClientAxios } from "../../../service/loginAxios";
import { LoginController } from "../../controllers/loginController";
import * as actions from "../actions/loginActions";

export const controller = async (payload: LoginRequest) => {
  const dataSource = new LoginClientAxios(apiConfig());
  const endpoint = "/auth/login";
  const repos = new Login(dataSource, endpoint);
  const control = new LoginController(repos);

  return await control.login(payload);
};

export function* loginSaga({ payload }: any) {
  try {
    const result: LoginResult = yield call(controller, payload);

    yield put(actions.loginSuccess(result));
  } catch (error: any) {
    yield put(actions.loginError(error.toString()));
  }
}
