import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { ProductActionType } from './types'
import { CreateProductModel, ApiSuccessResponse } from '../../domain/interfaces'
import ProductApi from '../../api/product'

export const createProduct = (model: CreateProductModel) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
  try {
    const response: ApiSuccessResponse = await ProductApi.createOne(model)
    dispatch({ type: ProductActionType.CREATE_PRODUCT, payload: response })
  } catch (error) {
    dispatch({ type: ProductActionType.CREATE_PRODUCT_ERROR, payload: error })
    console.log('CREATE PRODUCT ERROR: ', error)
  }
}
