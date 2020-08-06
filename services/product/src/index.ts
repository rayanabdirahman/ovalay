import bootstrapApp from './app'

const runApp = async () => {
  const PORT = process.env.PORT || 3000

  const app = await bootstrapApp()

  app.listen(PORT, () => console.info(`App running on PORT: ${PORT}`))

  return app
}

( async () => await runApp() )()