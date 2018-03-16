import { takeLatest, all } from 'redux-saga/effects'

// Components
import { LoginSagas, LoginTypes, LoginServices } from './screens/auth/login'
import { RegisterSagas, RegisterTypes, RegisterServices } from './screens/main/register'

export default function* root() {
  yield all([
    // Login
    takeLatest(LoginTypes.LOGIN, LoginSagas.login, LoginServices),

    // Register
    takeLatest(RegisterTypes.DATA, RegisterSagas.data, RegisterServices),
    takeLatest(RegisterTypes.CREATE_CUSTOMER, RegisterSagas.createCustomer, RegisterServices)
  ])
}
