import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function startDB() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database is connected successfully')
    app.listen(config.port, () => {
      console.log(`Application is listening on port ${config.port}`)
    })
  } catch (e) {
    console.error('failed to connect to DB', e)
  }
}
startDB()
