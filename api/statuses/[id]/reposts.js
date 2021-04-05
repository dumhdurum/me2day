const rest = require('@me2day/rest')
const catchError = require('../../../lib/catch-error')

async function repostsHandler(request, response) {
  const { token, id: statusId, page } = request.query
  const result = await rest.status.auth(token).object(statusId).reposts({ page })

  return response.json(result)
}

module.exports = catchError(repostsHandler)
