import * as dotenv from 'dotenv'

/**
 * default is .env
 */
dotenv.config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongodb: {
    uri: process.env.MONGO_URI || 'mongodb://nattawat_pa62:Nattawat034p@lalidts.com:27017/'
  },
  secret: {
    accessToken: process.env.SECRET_ACCESS_TOKEN || ''
  }
}

export default config