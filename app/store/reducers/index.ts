import { combineReducers } from 'redux'
import  authentication from './authentication'
import product from './product'

export default combineReducers({ session: authentication, client: product })