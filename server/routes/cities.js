import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import jwt from '../middlewares/jwt';
import CitiesControllers from '../controllers/cities';

const api = 'cities';

const router = new Router();

router.prefix(`/${baseApi}/${api}`);

// GET /api/cities
router.get('/', CitiesControllers.find);

// POST /api/cities
// This route is protected, call POST /api/authenticate to get the token
router.post('/', jwt, CitiesControllers.add);

// GET /api/cities/id
// This route is protected, call POST /api/authenticate to get the token
router.get('/:id', jwt, CitiesControllers.findById);

// PUT /api/cities/id
// This route is protected, call POST /api/authenticate to get the token
router.put('/:id', jwt, CitiesControllers.update);

// DELETE /api/cities/id
// This route is protected, call POST /api/authenticate to get the token
router.delete('/:id', jwt, CitiesControllers.delete);

export default router;
