import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// creates the store
export default (rootReducer, rootSaga) => {
  const middleware = []
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  const store = createStore(rootReducer, applyMiddleware(...middleware))

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
