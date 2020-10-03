import { AnyAction } from 'redux'
import { SessionState } from '../types'
import { AuthenticationActionType } from '../actions/types'

const initialState: SessionState = {
  token: null,
  isAuthenticated: false,
  loading: true,
  user: null
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case AuthenticationActionType.AUTHORISE_USER: {
      const { user } = action.payload.data
      const { token } = action.payload
      return { ...state, token, isAuthenticated: true, loading: false, user }
    }
    case AuthenticationActionType.SIGN_UP_SUCCESS,
        AuthenticationActionType.LOGIN_SUCCESS: {
      const { token } = action.payload.data
      return { ...state, token, isAuthenticated: true, loading: false }
    }
    case AuthenticationActionType.LOGOUT_SUCCESS: {
      return { ...state, token: null, isAuthenticated: false, loading: false, user: null }
    }
    case AuthenticationActionType.AUTHORISE_ERROR,
        AuthenticationActionType.SIGN_UP_FAIL,
        AuthenticationActionType.LOGIN_FAIL,
        AuthenticationActionType.LOGOUT_FAIL: {
      return { ...state, token: null, isAuthenticated: false, loading: false }
    }
    default: {
      return state
    }
  }
}
