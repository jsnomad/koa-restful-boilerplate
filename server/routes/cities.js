import 'babel-polyfill'
import Router from 'koa-router'
import { baseApi } from '../config'
import CitiesControllers from '../controllers/cities'

const api = 'cities'

const router = new Router();

router.prefix(`/${baseApi}/${api}`)

// GET /api/cities
router.get('/', CitiesControllers.find)

// POST /api/cities
router.post('/', CitiesControllers.add)

// GET /api/cities/id
router.get('/:id', CitiesControllers.findById)

// PUT /api/cities/id
router.put('/:id', CitiesControllers.update)

// DELETE /api/cities/id
router.delete('/:id', CitiesControllers.delete)

export default router
