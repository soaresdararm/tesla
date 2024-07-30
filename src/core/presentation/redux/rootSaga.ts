import { all, takeLatest } from 'redux-saga/effects'
import { LOGIN_REQUEST } from './types/loginTypes'
import { loginSaga } from './saga/loginSaga'

export function* rootSaga(): Generator {
  return yield all([takeLatest<any>(LOGIN_REQUEST, loginSaga)])
}
