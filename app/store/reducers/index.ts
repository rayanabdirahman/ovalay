import { combineReducers } from 'redux'
import  navigation from './navigation'
import  authentication from './authentication'
import  product from './product'

export default combineReducers({ navigation, session: authentication, product })