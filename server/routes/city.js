import 'babel-polyfill'
import City from '../models/city'
import Router from 'koa-router'
import { baseApi } from '../config'

const api = 'city'

const router = new Router();

router.prefix(`/${baseApi}/${api}`)

/* eslint-disable no-unused-vars, no-param-reassign, new-cap */

// GET /api
router.get('/', async(ctx, next) =>
    ctx.body = await City.find())
// POST /api
router.post('/', async(ctx, next) =>
    ctx.body = await new City(ctx.request.body).save())
// Get /api/id
router.get('/:id', async(ctx, next) =>
    ctx.body = await City.findById(ctx.params.id))
// PUT /api/id
router.put('/:id', async(ctx, next) =>
    ctx.body = await City.findByIdAndUpdate(ctx.params.id, ctx.request.body))
// DELETE /api/id
router.delete('/:id', async(ctx, next) =>
  ctx.body = await City.findByIdAndRemove(ctx.params.id))

/* eslint-enable no-unused-vars, no-param-reassign, new-cap */

export default router
