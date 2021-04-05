function catchError(asyncHandler) {
  return async (request, response) => {
    try {
      await asyncHandler(request, response)
    } catch (error) {
      response.status(403).json({
        message: error.response?.data?.error || error.message
      })
    }
  }
}

module.exports = catchError
