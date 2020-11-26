import axios from 'axios'
import buildClient from '../utilities/axios-helper'
import { CreateProductModel, ApiSuccessResponse } from '../domain/interfaces'
import config from '../config'

const API_BASE_URL = `${config.API_URL}/product`
// TODO: remove when authentication screens are enabled
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYmU5YmYwOWQ3OWU1MDAxODJlZjQ0YiIsInVzZXJuYW1lIjoiam9obiIsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obkB0ZXN0LmNvbSIsInJvbGUiOlsiYnV5ZXIiXX0sImlhdCI6MTYwNjMyNzI4MCwiZXhwIjozMDAwMDAwMDE2MDYzMjczMDB9.rGC0De62nBE8uIvakdCTE3DOjI1qb21HHjIh0b7e3vM'

type Product = {
  createOne(model: CreateProductModel): Promise<ApiSuccessResponse>
  // updateOne(model: CreateProductModel): Promise<ApiSuccessResponse>
  // findAll(model: CreateProductModel): Promise<ApiSuccessResponse>
  // findOne(id: string): Promise<ApiSuccessResponse>
}

const ProductApi: Product = {
  /**
   * Create a single product
   * @param { CreateProductModel } model - stores product details
   * @post /api/product/
   */
  async createOne(model: CreateProductModel): Promise<ApiSuccessResponse> {
    try {
      const response  = await buildClient(token).post(`${API_BASE_URL}/`, model)
      console.log('prod: ', response)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data.error : error.request
    }
  },
}

export default ProductApi
