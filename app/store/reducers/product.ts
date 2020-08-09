import { AnyAction } from 'redux'
import { ProductState } from '../types'
import { ProductActionType } from '../actions/types'

const initialState: ProductState = {
  loading: true,
  product: null,
  products: null
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ProductActionType.GET_PRODUCT_SUCCESS: {
      const { product } = action.payload.data
      return { ...state, loading: false, product, products: null }
    }
    case ProductActionType.GET_PRODUCTS_SUCCESS: {
      const { products } = action.payload.data
      return { ...state, loading: false, product: null, products }
    }
    case ProductActionType.GET_PRODUCT_ERROR,
        ProductActionType.GET_PRODUCTS_ERROR: {
      return { ...state, loading: false, product: null, products: null }
    }
    default: {
      return state
    }
  }
}