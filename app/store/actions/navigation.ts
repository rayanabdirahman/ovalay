import { NavigationActionType, ActionType } from './types'

/**
 * Set screen names for screen tracking
 * @param { string | undefined } referrer - tracks previous screen name
 * @param { string } currentLocation - tracks the current screen user is on
 */
export const setCurrentPath  = (referrer: string | undefined, currentLocation: string) => {
  return {
    type: NavigationActionType.SET_CURRENT_PATH,
    payload: { referrer, currentLocation },
    meta: { type: ActionType.NAVIGATION }
  }
}

/**
 * Check if user has been authenticated
 * @param { boolean } isUserSignedIn - toggles user authentication state
 */
export const setIsUserSignedIn  = (isUserSignedIn: boolean) => {
  return {
    type: NavigationActionType.SET_IS_USER_SIGNED_IN,
    payload: { isUserSignedIn },
    meta: { type: ActionType.NAVIGATION }
  }
}
