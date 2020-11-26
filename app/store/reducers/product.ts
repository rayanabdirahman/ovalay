import { AnyAction } from 'redux'
import { ProductState } from '../types'
import { ProductActionType } from '../actions/types'

const initialState: ProductState = {
  products: [],
  product: null,
  error: null,
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ProductActionType.CREATE_PRODUCT: {
      const { product } = action.payload.data
      return { ...state, products: [...state.products, product] }
    }
    case ProductActionType.GET_PRODUCTS: {
      const { products } = action.payload.data
      return { ...state, products, }
    }
    case ProductActionType.GET_PRODUCT: {
      const { product } = action.payload.data
      return { ...state, product, error: null }
    }
    case ProductActionType.CREATE_PRODUCT_ERROR: {
      return { ...state, error: action.payload }
    }
    case ProductActionType.GET_PRODUCTS_ERROR: {
      return { ...state, products: [], error: action.payload }
    }
    default: {
      return state
    }
  }
}
