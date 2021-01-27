const fs = require('fs');
const data = require('../jsonData/HP0126.json');

//진격거: "5f3cbaf58dd8c7876f04a11e"
//hp: "5f61f3e543fbd683dc32ee66"
var oid = {
    "$oid": "5f61f3e543fbd683dc32ee66"
}

var addId = (data) => data.filter(function (tweet) {
    return tweet['content'] = oid;
});

let data2 = addId(data);
data2 = JSON.stringify(data2);
fs.writeFileSync('../jsonContent/HP0126_id.json', data2, 'utf-8');

console.log('done');
