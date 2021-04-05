const rest = require('@me2day/rest')
const catchError = require('../../../lib/catch-error')

async function reactionsHandler(request, response) {
  const { token, id: statusId, page } = request.query
  const result = await rest.status.auth(token).object(statusId).reactions({ page })

  return response.json(result)
}

module.exports = catchError(reactionsHandler)
