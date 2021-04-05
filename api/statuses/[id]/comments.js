const rest = require('@me2day/rest')
const catchError = require('../../../lib/catch-error')

async function commentsHandler(request, response) {
  const { token, id: statusId, page } = request.query
  const result = await rest.status.auth(token).object(statusId).comments({ page })

  return response.json(result)
}

module.exports = catchError(commentsHandler)
