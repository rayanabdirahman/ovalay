import axios from 'axios'
import { Api } from '../constants/ApiUrl'
import { ApiSuccessResponse } from './types'

const API_BASE_URL = `${Api.DEV_BASE_URL}/${Api.PRODUCT_URL}`

type ProductAPI = {
  findAll(): Promise<ApiSuccessResponse>
  findOne(_id: string): Promise<ApiSuccessResponse>
}

const ProductAPI: ProductAPI = {
  /**
   * Find all products
   * @get /api/product/
   */
  async findAll(): Promise<ApiSuccessResponse> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/`)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },

  /**
   * Find one product
   * @get /api/product/:_id
   */
  async findOne(_id: string): Promise<ApiSuccessResponse> {
    try {
      const response  = await axios.post(`${API_BASE_URL}/${_id}`)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },
}

export default ProductAPI