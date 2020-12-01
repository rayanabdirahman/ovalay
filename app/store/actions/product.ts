import { ThunkDispatch } from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AnyAction } from 'redux'

import ProductApi from '../../api/product'
import { ProductActionType } from './types'
import { CreateProductModel, ApiSuccessResponse } from '../../domain/interfaces'
import { BottomTabRouteName } from '../../navigation/types'
import config from '../../config'

export const createProduct = (model: CreateProductModel, navigation: any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    // get user token from local storage
    const token = await AsyncStorage.getItem(`${config.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    const response: ApiSuccessResponse = await ProductApi.createOne(token, model)
    dispatch({ type: ProductActionType.CREATE_PRODUCT, payload: response })
    // navigate to profile screen if there are no errors
    navigation.navigate(BottomTabRouteName.PROFILE)
  } catch (error) {
    dispatch({ type: ProductActionType.CREATE_PRODUCT_ERROR, payload: error })
    console.log('CREATE PRODUCT ERROR: ', error)
  }
}

export const getProducts = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    // get user token from local storage
    const token = await AsyncStorage.getItem(`${config.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    const response: ApiSuccessResponse = await ProductApi.findAll(token)
    dispatch({ type: ProductActionType.GET_PRODUCTS, payload: response })
  } catch (error) {
    dispatch({ type: ProductActionType.GET_PRODUCTS_ERROR, payload: error })
    console.log('GET PRODUCTS ERROR: ', error)
  }
}

export const getProductById = (_id: string) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    // get user token from local storage
    const token = await AsyncStorage.getItem(`${config.LOCALSTORAGE_AUTHORIZATION_TOKEN}`)
    const response: ApiSuccessResponse = await ProductApi.findOne(token, _id)
    dispatch({ type: ProductActionType.GET_PRODUCT, payload: response })
  } catch (error) {
    dispatch({ type: ProductActionType.GET_PRODUCT_ERROR, payload: error })
    console.log('GET PRODUCTS ERROR: ', error)
  }
}
