import { combineReducers } from 'redux'
import configureStore from './create-store'
import rootSaga from './saga'

export default () => {
  const rootReducer = combineReducers({
    // Login
    login: require('./screens/auth/login/sauce').reducer,

    // Register
    register: require('./screens/main/register/sauce').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
