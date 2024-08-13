import schema from './schema.js'

/**
 * A GDS styled example home page controller.
 * Provided as an example, remove or modify as required.
 */
const nameControllerGet = {
  handler: (request, h) => {
    return h.view('claim/name/index')
  }
}

const nameControllerPost = {
  options: {
    validate: {
      payload: schema,
      failAction: async (request, h, error) => {
        return h
          .view('claim/name/index', {
            name: request.payload.name,
            errorMessage: {
              text: error.details[0].message
            }
          })
          .takeover()
      }
    },
    handler: async (request, h) => {
      return h.redirect('/claim/confirmation')
    }
  }
}

export { nameControllerGet, nameControllerPost }
