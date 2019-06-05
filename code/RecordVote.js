var console = require('console')
var http = require('http')

function RecordVote(poll, option, $vivContext) {
  // todo: send api to update poll
  // return the poll with the current user vote
  const userId = 'bixby:' + $vivContext.userId
  const pollVoteURL =
    'https://2d93obdbg1.execute-api.us-west-1.amazonaws.com/v1/polls/vote'
  
  let index = -1
  for (let i = 0; i < poll.options.length; i++) {
    if (poll.options[i].name === option.name) {
      index = i
      break
    }
  }

  const voteResponse = http.postUrl(
    pollVoteURL,
    JSON.stringify({
      poll_name: poll.id,
      choice: [index, option.text],
      userid: userId
    })
  )

  const pollDetailURL =
    'https://2d93obdbg1.execute-api.us-west-1.amazonaws.com/v1/polls/details'

  const response = http.postUrl(
    pollDetailURL,
    JSON.stringify({
      poll_name: poll.id,
      userid: userId
    })
  )

  const responseJSON = JSON.parse(response)
  const updatedPoll = responseJSON.body

  return updatedPoll
}

module.exports.function = RecordVote
