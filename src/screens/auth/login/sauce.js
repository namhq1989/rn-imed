import { AsyncStorage } from 'react-native'
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import lodash from 'lodash'
import { SystemToast } from '../../../components'
import { AppConst } from '../../../configs'

/**
 * Types and Creators
 *
 */
const { Types, Creators } = createActions({
  login: ['email', 'password'],
  loginResponse: ['error', 'data'],
  logout: ['navigation']
})

export const LoginTypes = Types
export default Creators


/**
 * Initial state
 *
 */
const INITIAL_STATE = Immutable({
  isFetching: false,
  loginSuccessfully: false
})

/**
 * Handle functions
 *
 */
const login = state => state.merge({ isFetching: true })

const loginResponse = (state, action) => {
  if (action.error) {
    SystemToast.danger(action.data)
    return state.merge({ isFetching: false })
  }

  const { data: { token, user } } = action
  const localUser = lodash.pick(user, ['_id', 'name', 'avatar', 'roles'])

  AsyncStorage.setItem(AppConst.storage.authKey, token)
  AsyncStorage.setItem(AppConst.storage.infoKey, JSON.stringify(localUser))

  return state.merge({ isFetching: false, loginSuccessfully: true })
}

const logout = (state, action) => {
  AsyncStorage.removeItem(AppConst.storage.authKey)
  AsyncStorage.removeItem(AppConst.storage.infoKey)

  action.navigation.navigate(AppConst.screens.login)
  return INITIAL_STATE
}


/**
 * Reducers
 *
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGIN_RESPONSE]: loginResponse,
  [Types.LOGOUT]: logout
})
