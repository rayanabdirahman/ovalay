import * as AWS from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'

// Config middleware used to upload product photos to S3 bucket
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const s3 = new AWS.S3()

const MulterUpload = multer({
  storage: multerS3({
    s3,
    bucket: `${process.env.AWS_S3_PRODUCT_PHOTOS_BUCKET}`,
    acl: 'public-read',
    metadata: (req: Express.Request, file: Express.Multer.File, callback: (error: any, metadata?: any) => void) => {
      // when uploaded return photo field name
      // set field name as value for photo
      callback(null, { fieldName: file.fieldname })
    },
    key: (req: Express.Request, file: Express.Multer.File, callback: (error: any, metadata?: any) => void) => {
      // set date of upload as key for photo
      callback(null, Date.now().toString())
    }
  })
})

export default MulterUpload