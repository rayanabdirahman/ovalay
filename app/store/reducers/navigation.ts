import { AnyAction } from 'redux'
import { NavigationState } from '../types'
import { NavigationActionType } from '../actions/types'

const initialState: NavigationState = {
  currentLocation: null,
  referrer: null,
  isUserSignedIn: false,
  hasRendered: false,
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case NavigationActionType.SET_CURRENT_PATH:
      const { currentLocation, referrer } = action.payload
      return { ...state, currentLocation, referrer };
    case NavigationActionType.SET_IS_USER_SIGNED_IN:
      const { isUserSignedIn } = action.payload
      return { ...state, isUserSignedIn };
    default:
      return state;
  }
}
