const fs = require('fs');
const data = require('./twitter_hp0105_02.json');

//연습
var people = [
    { "name": "bob", "dinner": "pizza" },
    { "name": "john", "dinner": "sushi" },
    { "name": "larry", "dinner": "hummus" }
];

var men = people.filter(function (person) {
    return person.dinner === 'sushi'
});
// console.log(men[0].name);

var one = data.filter(function (tweet) {
    return tweet.handle = '@mrppo039'
})

// console.log(one[0].comment);


var oid = {
    "$oid": "5f61f3e543fbd683dc32ee66"
}

var addId = (data) => data.filter(function (tweet) {
    return tweet['content'] = oid;
});

// console.log(addId[0]);

let data2 = addId(data);
data2 = JSON.stringify(data2);
fs.writeFileSync('hp0105_2.json', data2, 'utf-8');

console.log('done');
