import inert from '@hapi/inert'

import { health } from '~/src/server/health/index.js'
import { home } from '~/src/server/home/index.js'
import { name } from '~/src/server/claim/name/index.js'
import { confirmation } from '~/src/server/claim/confirmation/index.js'
import { serveStaticFiles } from '~/src/server/common/helpers/serve-static-files.js'

const router = {
  plugin: {
    name: 'router',
    register: async (server) => {
      await server.register([inert])

      // Health-check route. Used by platform to check if service is running, do not remove!
      await server.register([health])

      // Application specific routes, add your own routes here
      await server.register([home])

      // Claim routes
      await server.register([name, confirmation])

      // Static assets
      await server.register([serveStaticFiles])
    }
  }
}

export { router }
