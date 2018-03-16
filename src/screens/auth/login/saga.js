import { call, put } from 'redux-saga/effects'
import actions from './sauce'
import { errorHandler } from '../../../utils'

export default {
  // attempts to login
  login: function* (api, action) {
    const { email, password } = action
    const response = yield call(api.login, { email, password })

    if (response.data && response.data.success) {
      yield put(actions.loginResponse(false, response.data.data))
    } else {
      yield put(actions.loginResponse(true, errorHandler.getResponseError(response)))
    }
  }
}
