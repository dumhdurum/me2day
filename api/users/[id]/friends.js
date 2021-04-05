const rest = require('@me2day/rest')
const catchError = require('../../../lib/catch-error')

async function friendsHandler(request, response) {
  const { id: userId, page } = request.query
  const result = await rest.user.object(userId).friends({ page })

  return response.json(result)
}

module.exports = catchError(friendsHandler)
