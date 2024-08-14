const clearController = {
  handler: (request, h) => {
    request.yar.reset()
    return h.redirect('/')
  }
}

export { clearController }
