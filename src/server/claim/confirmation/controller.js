/**
 * A GDS styled example home page controller.
 * Provided as an example, remove or modify as required.
 */
const confirmationController = {
  handler: (request, h) => {
    return h.view('claim/confirmation/index', {
      reference: 'MINE123'
    })
  }
}

export { confirmationController }
