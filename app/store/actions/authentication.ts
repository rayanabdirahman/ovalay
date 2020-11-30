import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthenticationActionType } from './types'
import { SignUpModel, ApiSuccessResponse, SignInModel } from '../../domain/interfaces'
import Authentication from '../../api/authentication'
import { setIsUserSignedIn, setUserRole } from './navigation'
import config from '../../config'

export const signUpUser = (model: SignUpModel) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response: ApiSuccessResponse = await Authentication.signUp(model)
    // store user token in local storage
    await AsyncStorage.setItem(`${config.LOCALSTORAGE_AUTHORIZATION_TOKEN}`, response.data.token)
    dispatch({ type: AuthenticationActionType.SIGN_UP_SUCCESS, payload: response })
    // get user details 
    dispatch(authoriseUser())
  } catch (error) {
    dispatch({ type: AuthenticationActionType.SIGN_UP_FAIL })
    console.log('SIGNUP ERROR: ', error)
  }
}

export const signInUser = (model: SignInModel) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response: ApiSuccessResponse = await Authentication.signIn(model)
    // store user token in local storage
    await AsyncStorage.setItem(`${config.LOCALSTORAGE_AUTHORIZATION_TOKEN}`, response.data.token)
    dispatch({ type: AuthenticationActionType.SIGN_IN_SUCCESS, payload: response })
    // get user details 
    dispatch(authoriseUser())
  } catch(error) {
    dispatch({ type: AuthenticationActionType.SIGN_IN_FAIL })
    console.log('SIGNIN ERROR: ', error)
  }
}

export const signOutUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response = await Authentication.signOut()
    // remove user token from local storage
    await AsyncStorage.removeItem(`${config.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    dispatch({ type: AuthenticationActionType.SIGN_OUT_SUCCESS, payload: response })

    // update isUserSignedIn navigation state
    dispatch(setIsUserSignedIn(false))
  } catch (error) {
    dispatch({ type: AuthenticationActionType.SIGN_OUT_FAIL })

    // update isUserSignedIn navigation state
    dispatch(setIsUserSignedIn(true))

    // update userRole navigation state
    dispatch(setUserRole(null))
    console.log('SIGNOUT ERROR: ', error)
  }
}

export const authoriseUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
  try {
    // get user token from local storage
    const token = await AsyncStorage.getItem(`${config.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    const response: ApiSuccessResponse = await Authentication.authorise(token)
    dispatch({ type: AuthenticationActionType.AUTHORISE_USER, payload: { ...response, token } })

    // update isUserSignedIn navigation state
    dispatch(setIsUserSignedIn(true))

    // update userRole navigation state
    dispatch(setUserRole(response.data.user.role))
  } catch (error) {
    dispatch({ type: AuthenticationActionType.AUTHORISE_ERROR })

    // update isUserSignedIn navigation state
    dispatch(setIsUserSignedIn(false))

    // update userRole navigation state
    dispatch(setUserRole(null))
    console.log('AUTHORISE ERROR: ', error)
  }
}
