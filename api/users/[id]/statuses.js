const rest = require('@me2day/rest')
const catchError = require('../../../lib/catch-error')

async function statusesHandler(request, response) {
  const { id: userId, type, page } = request.query
  const result = await rest.user.object(userId).statuses({ type, page })

  return response.json(result)
}

module.exports = catchError(statusesHandler)
