import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { ProductActionType } from './types'
import { ApiSuccessResponse } from '../../api/types'
import ProductAPI from '../../api/product'

export const findAllProducts = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
  try {
    const response: ApiSuccessResponse = await ProductAPI.findAll()
    dispatch({ type: ProductActionType.GET_PRODUCTS_SUCCESS, payload: response })
  } catch (error) {
    dispatch({ type: ProductActionType.GET_PRODUCTS_ERROR })
    console.log('PRODUCT ERROR: ', error)
  }
}

export const findProduct = (_id: string) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
  try {
    const response: ApiSuccessResponse = await ProductAPI.findOne(_id)
    dispatch({ type: ProductActionType.GET_PRODUCT_SUCCESS, payload: response })
  } catch (error) {
    dispatch({ type: ProductActionType.GET_PRODUCT_ERROR })
    console.log('PRODUCT ERROR: ', error)
  }
}