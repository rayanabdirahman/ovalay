import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { NavigationState, ProductState, SessionState } from './types'

export type State = {
  navigation: NavigationState
  session: SessionState
  product: ProductState
}

const middleware = [thunk,logger]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
