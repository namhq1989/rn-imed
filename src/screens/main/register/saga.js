import { call, put } from 'redux-saga/effects'
import actions from './sauce'
import { errorHandler } from '../../../utils'

export default {
  data: function* (api) {
    const response = yield call(api.data)

    if (response.data && response.data.success) {
      yield put(actions.dataResponse(false, response.data.data))
    } else {
      yield put(actions.dataResponse(true, errorHandler.getResponseError(response)))
    }
  },

  createCustomer: function* (api, action) {
    const response = yield call(api.createCustomer, action.data)

    if (response.data && response.data.success) {
      yield put(actions.createCustomerResponse(false, response.data.data))
    } else {
      yield put(actions.createCustomerResponse(true, errorHandler.getResponseError(response)))
    }
  }
}
