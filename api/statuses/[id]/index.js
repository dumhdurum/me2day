const rest = require('@me2day/rest')
const catchError = require('../../../lib/catch-error')

async function statusHandler(request, response) {
  const { token, id: statusId } = request.query
  const result = await rest.status.auth(token).home({
    max_id: statusId,
    count: 1
  })

  return response.json(result.data[0])
}

module.exports = catchError(statusHandler)
