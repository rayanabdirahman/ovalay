import { injectable } from 'inversify'
import Review, { ReviewDocument } from '../model/review.model'
import Product, { ProductDocument } from '../model/product.model'
import { CreateReview } from '../../domain/interfaces'

export interface ReviewRepository {
  createOne(model: CreateReview): Promise<ReviewDocument>
  findById(_id: string): Promise<ReviewDocument | null>
  findAll(_id: string): Promise<ReviewDocument[] | null>
  updateOne(_id: string, model: CreateReview): Promise<ReviewDocument | null>
  deleteOne(_id: string): Promise<ReviewDocument | null>
}

@injectable()
export class ReviewRepositoryImpl implements ReviewRepository {
  async createOne(model: CreateReview): Promise<ReviewDocument> {
    const review = new Review(model)
    await Product.updateOne({ _id: review.product }, { $push: { review: review._id }})

    return await review.save()
  }

  async findById(_id: string): Promise<ReviewDocument | null> {
    return await Review.findById(_id)
  }

  async findAll(_id: string): Promise<ReviewDocument[] | null> {
    // TODO: Fix unable to find User schema error by cinnecting microservices
    return await Review.find({ product: _id }).populate('user').select('-__v').exec()
  }

  async updateOne(_id: string, model: CreateReview): Promise<ReviewDocument | null> {
    return await Review.findOneAndUpdate({ _id }, { $set: { ...model } }, { new: true });
  }

  async deleteOne(_id: string): Promise<ReviewDocument | null> {
    return await Review.findOneAndDelete({ _id })
  }
}