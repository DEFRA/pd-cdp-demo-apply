import { clearController } from './controller.js'

const clear = {
  plugin: {
    name: 'clear',
    register: async (server) => {
      server.route({
        method: 'GET',
        path: '/clear-session',
        ...clearController
      })
    }
  }
}

export { clear }
