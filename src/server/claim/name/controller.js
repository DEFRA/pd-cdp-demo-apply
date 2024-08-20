import schema from './schema.js'

/**
 * A GDS styled example home page controller.
 * Provided as an example, remove or modify as required.
 */
const nameControllerGet = {
  handler: (request, h) => {
    const name = request.yar.get('name')
    return h.view('claim/name/index', { name })
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
      request.yar.set('name', request.payload.name)
      const timestamp = new Date().getUTCMilliseconds()
      const reference = `MINE${timestamp}`
      request.yar.set('reference', reference)

      return h.redirect('/claim/confirmation')
    }
  }
}

export { nameControllerGet, nameControllerPost }
