const fs = require('fs');
const data = require('./twitter_AOT0120_new copy.json');

//진격거: "5f3cbaf58dd8c7876f04a11e"
// var oid = {
//     "$oid": "5f3cbaf58dd8c7876f04a11e"
// }

var addId = (data) => data.filter(function (tweet) {
    var id = {
        "$oid": `${tweet._id}`
    }
    return tweet['_id'] = id;
});

var justId = (data) => data.filter(function (tweet) {
    return tweet['_id'] = tweet._id;
});

var changeId = (data) => data.filter(function (tweet) {
    tweet['tweetId'] = tweet._id;
    delete tweet['_id'];
    return tweet;
})

let data2 = changeId(data);
data2 = JSON.stringify(data2);
fs.writeFileSync('t_AOT0120_newId3.json', data2, 'utf-8');

console.log('done');
