const rest = require('@me2day/rest')
const catchError = require('../../../lib/catch-error')

async function fansHandler(request, response) {
  const { id: userId, page } = request.query
  const result = await rest.user.object(userId).fans({ page })

  return response.json(result)
}

module.exports = catchError(fansHandler)
