import cities from './cities'

const routes = [cities]

export default function (app) {
  routes.forEach((route) => {
    app
      .use(route.routes())
      .use(route.allowedMethods({
        throw: true,
      }))
  })
}
