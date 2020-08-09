import { injectable, inject } from 'inversify'
import { CreateOwner } from '../domain/interfaces'
import logger from '../util/logger'
import TYPES from '../types'
import { OwnerRepository } from '../data_access/repository/owner.repository'
import { OwnerDocument } from '../data_access/model/owner.model'

export interface OwnerService {
  createOne(model: CreateOwner): Promise<OwnerDocument>
  findAll(): Promise<OwnerDocument[] | null>
  updateOne(_id: string, model: CreateOwner): Promise<OwnerDocument | null>
  deleteOne(_id: string): Promise<OwnerDocument| null>
}

@injectable()
export class OwnerServiceImpl implements OwnerService {
  private ownerRepository: OwnerRepository

  constructor(@inject(TYPES.OwnerRepository) ownerRepository: OwnerRepository) {
    this.ownerRepository = ownerRepository
  }

  async createOne(model: CreateOwner): Promise<OwnerDocument> { 
    try {
      return await this.ownerRepository.createOne(model)
    } catch(error) {
      logger.error(`[OwnerService: createOne]: Unable to create owner: ${error}`)
      throw error
    }
  }

  async findAll(): Promise<OwnerDocument[] | null> { 
    try {
      return await this.ownerRepository.findAll()
    } catch(error) {
      logger.error(`[OwnerService: findAll]: Unable to find owners: ${error}`)
      throw error
    }
  }

  async updateOne(_id: string, model: CreateOwner): Promise<OwnerDocument | null> { 
    try {
      return await this.ownerRepository.updateOne(_id, model)
    } catch(error) {
      logger.error(`[OwnerService: updateOne]: Unable to update owner: ${error}`)
      throw error
    }
  }

  async deleteOne(_id: string): Promise<OwnerDocument | null> { 
    try {
      return await this.ownerRepository.deleteOne(_id)
    } catch(error) {
      logger.error(`[OwnerService: deleteOne]: Unable to delete owner: ${error}`)
      throw error
    }
  }
}