var http = require('http')
var fail = require('fail')
var console = require('console')

function FetchPollDetails(name, $vivContext) {
  // prefix so we know this ID came from bixby
  const userId = 'bixby:' + $vivContext.userId
  const pollDetailURL =
    'https://2d93obdbg1.execute-api.us-west-1.amazonaws.com/v1/polls/details'

  const response = http.postUrl(
    pollDetailURL,
    JSON.stringify({
      poll_name: name,
      userid: userId
    })
  )

  const responseJSON = JSON.parse(response)
  const poll = responseJSON.body

  if (!poll.vote || poll.vote.length === 0) {
    throw fail.checkedError("User hasn't voted", 'user-has-not-voted', { poll: poll })
  }
  
  delete poll.vote

  return poll
}

module.exports.function = FetchPollDetails
