import { AnyAction } from 'redux'
import { NavigationState } from '../types'
import { NavigationActionType } from '../actions/types'
import { UserRolesEnum } from '../../domain/enums'

const initialState: NavigationState = {
  currentLocation: null,
  referrer: null,
  isUserSignedIn: false,
  userRole: null,
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
    case NavigationActionType.SET_USER_ROLE:
      const { userRole } = action.payload
      return { ...state, userRole };
    default:
      return state;
  }
}
