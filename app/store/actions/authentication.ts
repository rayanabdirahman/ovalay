import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { AuthenticationActionType } from './types'
import { SignUpModel, ApiSuccessResponse, LoginModel } from '../../api/types'
import { ProcessEVN } from '../../constants/ProcessEVN'
import Authentication from '../../api/authentication'

export const signUpUser = (model: SignUpModel) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response: ApiSuccessResponse = await Authentication.signUp(model)
    // store user token in local storage
    await AsyncStorage.setItem(`${ProcessEVN.LOCALSTORAGE_AUTHORIZATION_TOKEN}`, response.data.token)
    dispatch({ type: AuthenticationActionType.SIGN_UP_SUCCESS, payload: response })
    // get user details 
    dispatch(authoriseUser())
  } catch (error) {
    dispatch({ type: AuthenticationActionType.SIGN_UP_FAIL })
    console.log('SIGNUP ERROR: ', error)
  }
}

export const loginUser = (model: LoginModel) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response: ApiSuccessResponse = await Authentication.login(model)
    // store user token in local storage
    await AsyncStorage.setItem(`${ProcessEVN.LOCALSTORAGE_AUTHORIZATION_TOKEN}`, response.data.token)
    dispatch({ type: AuthenticationActionType.LOGIN_SUCCESS, payload: response })
    // get user details 
    dispatch(authoriseUser())
  } catch(error) {
    dispatch({ type: AuthenticationActionType.LOGIN_FAIL })
    console.log('LOGIN ERROR: ', error)
  }
}

export const logoutUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response = await Authentication.logout()
    // remove user token from local storage
    await AsyncStorage.removeItem(`${ProcessEVN.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    dispatch({ type: AuthenticationActionType.LOGOUT_SUCCESS, payload: response })
  } catch (error) {
    dispatch({ type: AuthenticationActionType.LOGOUT_FAIL })
    console.log('LOG OUT: ', error)
  }
}

export const authoriseUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
  try {
    // get user token from local storage
    const token = await AsyncStorage.getItem(`${ProcessEVN.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    const response: ApiSuccessResponse = await Authentication.authorise(token)
    dispatch({ type: AuthenticationActionType.AUTHORISE_USER, payload: { ...response, token } })
  } catch (error) {
    dispatch({ type: AuthenticationActionType.AUTHORISE_ERROR })
    console.log('AUTHORISE ERROR: ', error)
  }
}