import { confirmationController } from './controller.js'
/**
 * Sets up the routes used in the confirmation page.
 * These routes are registered in src/server/router.js.
 */
const confirmation = {
  plugin: {
    name: 'confirmation',
    register: async (server) => {
      server.route([
        {
          method: 'GET',
          path: '/claim/confirmation',
          ...confirmationController
        }
      ])
    }
  }
}

export { confirmation }
