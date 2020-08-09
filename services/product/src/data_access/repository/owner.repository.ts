import { injectable } from 'inversify'
import Owner, { OwnerDocument } from '../model/owner.model'
import { CreateOwner } from '../../domain/interfaces'

export interface OwnerRepository {
  createOne(model: CreateOwner): Promise<OwnerDocument>
  findById(_id: string): Promise<OwnerDocument | null>
  findAll(): Promise<OwnerDocument[] | null>
  updateOne(_id: string, model: CreateOwner): Promise<OwnerDocument | null>
  deleteOne(_id: string): Promise<OwnerDocument | null>
}

@injectable()
export class OwnerRepositoryImpl implements OwnerRepository {
  async createOne(model: CreateOwner): Promise<OwnerDocument> {
    const owner = new Owner(model)
    return await owner.save()
  }

  async findById(_id: string): Promise<OwnerDocument | null> {
    return await Owner.findById(_id)
  }

  async findAll(): Promise<OwnerDocument[] | null> {
    return await Owner.find().select('-__v')
  }

  async updateOne(_id: string, model: CreateOwner): Promise<OwnerDocument | null> {
    return await Owner.findOneAndUpdate({ _id }, { $set: { ...model } }, { new: true });
  }

  async deleteOne(_id: string): Promise<OwnerDocument | null> {
    return await Owner.findOneAndDelete({ _id })
  }
}