import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import logger from 'koa-logger'
import mongoose from 'mongoose'
import helmet from 'koa-helmet'
import routing from './routes/'
import { port, connexionString } from './config'

mongoose.connect(connexionString)
mongoose.connection.on('error', console.error)

// Create Koa Application
const app = new Koa()

app
  .use(logger())
  .use(bodyParser())
  .use(helmet())

routing(app)

// Start the application
app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))

export default app
