import { FastifyServerOptions } from 'fastify'
import * as mongoose from 'mongoose'
import buildApp from './src/app'
import config from './src/config'

const options: FastifyServerOptions = {
    logger: true
}

const app = buildApp(options)

mongoose.connect(config.mongodb.uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('error', (error) => app.log.error(error))
mongoose.connection.once('open', () => app.log.info('MongoDB has been connected'))

app.listen(config.port, 'localhost')