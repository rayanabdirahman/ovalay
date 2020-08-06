import express from 'express'

export default async (): Promise<express.Application> => (
  new Promise<express.Application>(async (resolve, reject) => {
    try {
      const app = express()

      // set middleware
      app.use(express.json())
      app.use(express.urlencoded({ extended: false }))

      // test api route
      app.get('/api/product/', async (req: express.Request, res: express.Response): Promise<express.Response> => {
        return res.json({ 'Mainstreet Product API': 'Version 1' })
      })

      resolve(app)

    } catch(error) {
      console.error(`Error when bootstrapping app: ${error}`)
      reject(error)
    }
  })
)