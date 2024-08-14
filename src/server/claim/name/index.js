import {
  nameControllerGet,
  nameControllerPost
} from '~/src/server/claim/name/controller.js'

/**
 * Sets up the routes used in the name page.
 * These routes are registered in src/server/router.js.
 */
const name = {
  plugin: {
    name: 'name',
    register: async (server) => {
      server.route([
        {
          method: 'GET',
          path: '/claim/name',
          ...nameControllerGet
        },
        {
          method: 'POST',
          path: '/claim/name',
          ...nameControllerPost
        }
      ])
    }
  }
}

export { name }
