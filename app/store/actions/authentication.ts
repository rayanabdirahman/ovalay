import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { AuthenticationActionType } from './types'
import { SignUpModel, ApiSuccessResponse } from '../../domain/interfaces'
import Authentication from '../../api/authentication'

// TODO: Move into env file
const LOCALSTORAGE_AUTHORIZATION_TOKEN = 'Authorization-Token'

export const signUpUser = (model: SignUpModel) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response: ApiSuccessResponse = await Authentication.signUp(model)
    // store user token in local storage
    await AsyncStorage.setItem(`${LOCALSTORAGE_AUTHORIZATION_TOKEN}`, response.data.token)
    dispatch({ type: AuthenticationActionType.SIGN_UP_SUCCESS, payload: response })
    // get user details 
    dispatch(authoriseUser())
  } catch (error) {
    dispatch({ type: AuthenticationActionType.SIGN_UP_FAIL })
    console.log('SIGNUP ERROR: ', error)
  }
}

export const authoriseUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
  try {
    // get user token from local storage
    const token = await AsyncStorage.getItem(`${LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    const response: ApiSuccessResponse = await Authentication.authorise(token)
    dispatch({ type: AuthenticationActionType.AUTHORISE_USER, payload: { ...response, token } })
  } catch (error) {
    dispatch({ type: AuthenticationActionType.AUTHORISE_ERROR })
    console.log('AUTHORISE ERROR: ', error)
  }
}
