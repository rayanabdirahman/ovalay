import axios from 'axios'

import buildClient from '../utilities/axios-helper'
import { CreateProductModel, ApiSuccessResponse } from '../domain/interfaces'
import config from '../config'

const API_BASE_URL = `${config.API_URL}/product`

type Product = {
  createOne(token: string | null, model: CreateProductModel): Promise<ApiSuccessResponse>
  // updateOne(model: CreateProductModel): Promise<ApiSuccessResponse>
  findAll(token: string | null): Promise<ApiSuccessResponse>
  findOne(token: string | null, _id: string): Promise<ApiSuccessResponse>
}

const ProductApi: Product = {
  /**
   * Create a single product
   * @param { CreateProductModel } model - stores product details
   * @post /api/product/
   */
  async createOne(token: string | null, model: CreateProductModel): Promise<ApiSuccessResponse> {
    try {
      const response  = await buildClient(token).post(`${API_BASE_URL}/`, model)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },
  /**
   * Find all products
   * @get /api/product/list
   */
  async findAll(token: string | null): Promise<ApiSuccessResponse> {
    try {
      const response  = await buildClient(token).get(`${API_BASE_URL}/list`)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },
  /**
   * Find a single product
   * @get /api/product/:_id
   */
  async findOne(token: string | null, _id: string): Promise<ApiSuccessResponse> {
    try {
      const response  = await buildClient(token).get(`${API_BASE_URL}/${_id}`)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },
}

export default ProductApi
