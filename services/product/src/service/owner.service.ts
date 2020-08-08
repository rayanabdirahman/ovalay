import { injectable, inject } from 'inversify'
import { CreateOwner } from '../domain/interfaces'
import logger from '../util/logger'
import TYPES from '../types'
import { OwnerRepository } from '../data_access/repository/owner.repository'
import { OwnerDocument } from '../data_access/model/owner.model'

export interface OwnerService {
  createOne(model: CreateOwner): Promise<OwnerDocument>
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
}