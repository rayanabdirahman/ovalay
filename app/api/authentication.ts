import axios from 'axios'
import buildClient from '../utilities/axios-helper'
import { SignUpModel, ApiSuccessResponse, SignInModel } from '../domain/interfaces'
import config from '../config'

const API_BASE_URL = `${config.API_URL}/user`

type Authentication = {
  signUp(model: SignUpModel): Promise<ApiSuccessResponse>
  signIn(model: SignInModel): Promise<ApiSuccessResponse>
  signOut(): Promise<ApiSuccessResponse>
  authorise(token: string | null): Promise<ApiSuccessResponse>
}

const Authentication: Authentication = {
  /**
   * Register user
   * @param { SignUpModel } model - stores user signup details
   * @post /api/user/
   */
  async signUp(model: SignUpModel): Promise<ApiSuccessResponse> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/signup`, model)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  /**
   * Sign user in
   * @param { SignInModel } model - stores user sign in details
   * @post /api/user/signin
   */
  async signIn(model: SignInModel): Promise<ApiSuccessResponse> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/signin`, model)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  /**
   * Sign user out
   * @post /api/user/signout
   */
  async signOut(): Promise<ApiSuccessResponse> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/signout`)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  /**
   * authorise user
   * @param { string } token - signed JWT token
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