/**
 * A GDS styled example home page controller.
 * Provided as an example, remove or modify as required.
 */
const confirmationController = {
  handler: (request, h) => {
    const reference = request.yar.get('reference')
    return h.view('claim/confirmation/index', { reference })
  }
}

export { confirmationController }
