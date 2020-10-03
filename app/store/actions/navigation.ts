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
