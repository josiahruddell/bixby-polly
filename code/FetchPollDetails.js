var fail = require('fail')
var console = require('console')

function FetchPollDetails(name, $vivContext) {
  // prefix so we know this ID came from bixby
  const userId = 'bixby:' + $vivContext.userId

  // todo: get the poll by name ${name} & ${username}
  
  const poll = {
    name: name,
    vote: [1],
    options: [{
        text: 'Everything is awesome',
        votes: 10,
        rank: 1,
        ratio: 10 / 10,
        users: ['me', 'you'],
      },
      {
        text: 'Everything sucks',
        votes: 0,
        rank: 2,
        ratio: 0 / 10,
        users: [],
      }
    ],
    totalVotes: 10
  }

  if (!poll.vote || poll.vote.length === 0) {
    throw fail.checkedError("User hasn't voted", "user-has-not-voted")
  }

  return poll
}

module.exports.function = FetchPollDetails
