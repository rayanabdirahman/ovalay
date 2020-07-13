import axios from 'axios'
import buildClient from './axios-helper'
import { SignUpModel, ApiSuccessResponse, LoginModel } from './types'
import { Api } from '../constants/ApiUrl'

const API_BASE_URL = `${Api.DEV_BASE_URL}/${Api.AUTHENTICATION_URL}`

type Authentication = {
  signUp(model: SignUpModel): Promise<ApiSuccessResponse>
  login(model: LoginModel): Promise<ApiSuccessResponse>
  logout(): Promise<ApiSuccessResponse>
  authorise(token: string | null): Promise<ApiSuccessResponse>
}

const Authentication: Authentication = {
  /**
   * Register user
   * @param model - stores user signup details
   * @post /api/user/
   */
  async signUp(model: SignUpModel): Promise<ApiSuccessResponse> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/`, model)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },


  /**
   * log user in
   * @param model - stores user login details
   * @post /api/user/login
   */
  async login(model: LoginModel): Promise<ApiSuccessResponse> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/login`, model)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  /**
   * log user out
   * @post /api/user/logout
   */
  async logout(): Promise<ApiSuccessResponse> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/logout`)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  /**
   * authorise user
   * @get /api/user/authorise
   */
  async authorise(token: string | null): Promise<ApiSuccessResponse> {
    try {
      const response  = await buildClient(token).get(`${API_BASE_URL}/authorise`) // use axios helper to set request headers
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  }
}

export default Authentication