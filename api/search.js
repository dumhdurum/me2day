const rest = require('@me2day/rest')
const catchError = require('../lib/catch-error')

async function searchHandler(request, response) {
  const { q: name } = request.query
  const result = await rest.user.search(name)

  return response.json(result)
}

module.exports = catchError(searchHandler)
