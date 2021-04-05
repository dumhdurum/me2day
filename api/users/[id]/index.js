const rest = require('@me2day/rest')
const catchError = require('../../../lib/catch-error')

async function userHandler(request, response) {
  const { id: userId } = request.query
  const result = await rest.user.get(userId)

  return response.json(result)
}

module.exports = catchError(userHandler)
