import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import logger from 'koa-logger'
import middleware from 'koa-router'
import mongoose from 'mongoose'
import routing from './routes/api'
import { port, connexionString } from './config'

mongoose.connect(connexionString)
mongoose.connection.on('error', console.error)

// Create Koa Application
const app = new Koa()
const router = routing(middleware())

app
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods({
    throw: true,
  }))

// Start the application
app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))
