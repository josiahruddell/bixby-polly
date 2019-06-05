var http = require('http')

function FindPoll(search) {
  // todo: fuzzy search poll names ${search}
    const url = 'https://2d93obdbg1.execute-api.us-west-1.amazonaws.com/v1/polls/find'

  const response = http.postUrl(
    url,
    JSON.stringify({
      name: search,
    })
  )

  const responseJSON = JSON.parse(response)
  // todo validate
  return responseJSON.body.map(x => x.poll_name)
}

module.exports.function = FindPoll
