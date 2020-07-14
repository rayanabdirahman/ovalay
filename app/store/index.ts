import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { SessionState } from './types'
import rootReducer from './reducers'

export type State = {
  session: SessionState
}

const middleware = [thunk] 

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))