import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import ProductApi from '../../api/product'
import { ProductActionType } from './types'
import { CreateProductModel, ApiSuccessResponse } from '../../domain/interfaces'
import { BottomTabRouteName } from '../../navigation/types'

export const createProduct = (model: CreateProductModel, navigation: any) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response: ApiSuccessResponse = await ProductApi.createOne(model)
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
    const response: ApiSuccessResponse = await ProductApi.findAll()
    dispatch({ type: ProductActionType.GET_PRODUCTS, payload: response })
  } catch (error) {
    dispatch({ type: ProductActionType.GET_PRODUCTS_ERROR, payload: error })
    console.log('GET PRODUCTS ERROR: ', error)
  }
}
