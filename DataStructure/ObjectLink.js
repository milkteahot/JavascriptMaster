const fs = require('fs');
const data = require('../jsonContent/HP0126_id.json');

var addLink = (data) => data.filter(function (tweet) {
    var comment = tweet['comment'];
    var link = comment.split("https://");
    tweet['comment'] = link[0];
    tweet['link'] = `https://${link[1]}`;
    return tweet;
});

let data2 = addLink(data);
data2 = JSON.stringify(data2);
fs.writeFileSync('../jsonResult/HP0126_id_link.json', data2, 'utf-8');

// console.log(data2)
console.log('done');
