export enum ActionType {
  NAVIGATION = 'NAVIGATION', 
  API = 'API' 
}

export enum NavigationActionType {
  SET_CURRENT_PATH = 'SET_CURRENT_PATH',
  SET_IS_USER_SIGNED_IN = 'SET_IS_USER_SIGNED_IN',
  SET_USER_ROLE = 'SET_USER_ROLE'
}

export enum AuthenticationActionType {
  AUTHORISE_USER = 'AUTHORISE_USER',
  AUTHORISE_ERROR = 'AUTHORISE_ERROR',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = 'SIGN_UP_FAIL',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL = 'SIGN_IN_FAIL',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAIL = 'SIGN_OUT_FAIL'
}

export enum ProductActionType {
  CREATE_PRODUCT = 'CREATE_PRODUCT',
  GET_PRODUCT = 'GET_PRODUCT',
  GET_PRODUCTS = 'GET_PRODUCTS',
  CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
  GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR',
}
