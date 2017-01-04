import cities from './cities'
import authenticate from './authenticate'

const routes = [cities, authenticate]

export default function (app) {
  routes.forEach((route) => {
    app
      .use(route.routes())
      .use(route.allowedMethods({
        throw: true,
      }))
  })
}
