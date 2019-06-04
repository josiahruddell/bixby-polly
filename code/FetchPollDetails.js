function FetchPollDetails(name) {
  // todo: get the poll by name ${name}
  return {
    name: name,
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
}

module.exports.function = FetchPollDetails
