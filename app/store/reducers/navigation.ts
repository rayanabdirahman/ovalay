import { AnyAction } from 'redux'
import { NavigationState } from '../types'
import { NavigationActionType } from '../actions/types'

const initialState: NavigationState = {
  currentLocation: null,
  referrer: null,
  isLoggedIn: false,
  hasRendered: false,
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case NavigationActionType.SET_CURRENT_PATH:
      const { currentLocation, referrer } = action.payload
      return { ...state, currentLocation, referrer };
    default:
      return state;
  }
}
