import { People } from '../models/people'

// Define the const API path
const api = 'api'

// Export router
export default function (router) {
  // Set the API prefix
  router.prefix(`/${api}`)

  // GET /api
  router.get('/', async(ctx, next) =>
    ctx.body = await People.find())
  // POST /api
  router.post('/', async(ctx, next) =>
    ctx.body = await new People(ctx.request.body).save())
  // Get /api/id
  router.get('/:id', async(ctx, next) =>
    ctx.body = await People(ctx.params.id))
  // PUT /api/id
  router.put('/:id', async(ctx, next) =>
    ctx.body = await People.findByIdAndUpdate(ctx.params.id, ctx.request.body))
  // DELETE /api/id
  router.delete('/:id', async(ctx, next) =>
    ctx.body = await People.findByIdAndRemove(ctx.params.id))

  return router
}
