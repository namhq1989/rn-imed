import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { MessageConst } from '../../../configs'
import { SystemToast } from '../../../components'
import { platform } from '../../../utils'

/**
 * Types and Creators
 *
 */
const { Types, Creators } = createActions({
  data: [],
  dataResponse: ['error', 'data'],
  createCustomer: ['data'],
  createCustomerResponse: ['error', 'data'],
  resetState: []
})

export const RegisterTypes = Types
export default Creators

/**
 * Initial state
 *
 */
const INITIAL_STATE = Immutable({
  isFetching: false,
  isCreateCustomerSuccessfully: false,
  data: {
    events: platform.iOS() ? [] : [{
      _id: '',
      name: 'Chọn sự kiện'
    }]
  }
})

/**
 * Handle functions
 *
 */
const data = state => state.merge({ isFetching: true })

const dataResponse = (state, action) => {
  if (action.error) {
    SystemToast.danger(action.data)
    return state.merge({ isFetching: false })
  }

  return state.merge({ isFetching: false, data: action.data })
}

const createCustomer = state => state.merge({ isFetching: true })

const createCustomerResponse = (state, action) => {
  if (action.error) {
    SystemToast.danger(action.data)
    return state.merge({ isFetching: false })
  }

  SystemToast.success(MessageConst.Register.Form.CreateCustomerSuccessfully)
  return state.merge({ isFetching: false, isCreateCustomerSuccessfully: true })
}

const resetState = state => state.merge({ isFetching: false, isCreateCustomerSuccessfully: false })

/**
 * Reducers
 *
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.DATA]: data,
  [Types.DATA_RESPONSE]: dataResponse,
  [Types.CREATE_CUSTOMER]: createCustomer,
  [Types.CREATE_CUSTOMER_RESPONSE]: createCustomerResponse,
  [Types.RESET_STATE]: resetState
})
