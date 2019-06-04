var http = require('http')
var fail = require('fail')
var console = require('console')

function FetchPollDetails(name, $vivContext) {
  // prefix so we know this ID came from bixby
  const userId = 'bixby:' + $vivContext.userId
  console.log(userId);
  const pollDetailURL = "https://2d93obdbg1.execute-api.us-west-1.amazonaws.com/v1/polls/details";
  const response =  http.postUrl(pollDetailURL, JSON.stringify({
      poll_name: "viv_cap_dev_day",
      userid: userId,
    }));
  const responseJSON = JSON.parse(response);
  console.log('rrrr ' + response);
  // todo: get the poll by name ${name} & ${username}
  const poll = responseJSON.body;
  console.log(JSON.stringify(poll, null,2));
  // if (!poll.vote || poll.vote.length === 0) {
  //   throw fail.checkedError("User hasn't voted", "user-has-not-voted")
  // }
//   
//   const poll = {
//     name: name,
//     vote: [1],
//     options: [{
//         text: 'Everything is awesome',
//         votes: 10,
//         rank: 1,
//         ratio: 10 / 10,
//         users: ['me', 'you'],
//       },
//       {
//         text: 'Everything sucks',
//         votes: 0,
//         rank: 2,
//         ratio: 0 / 10,
//         users: [],
//       }
//     ],
//     totalVotes: 10
//   }
// 
//   
  return poll
}

module.exports.function = FetchPollDetails
