const rest = require('@me2day/rest')
const catchError = require('../../lib/catch-error')

async function statusesHandler(request, response) {
  const { token, ...params } = request.query
  const result = await rest.status.auth(token).posts(params)

  return response.json(result)
}

module.exports = catchError(statusesHandler)
