const rest = require('@me2day/rest')
const catchError = require('../lib/catch-error')

async function userHandler(request, response) {
  const { token } = request.query
  const result = await rest.user.auth(token).currentUser()

  return response.json(result)
}

module.exports = catchError(userHandler)
