const fs = require('fs');
// const data = require('./twitter_AOT0120_new.json');

var data = [
    {
        "tag": "진격거",
        "_id": 1349668631953608700,
        "comment": "ㅈ으로 시작하는 작품은 다 명작이라면서요?\n진정령, 진격거.. 다음은 ⟨주술회전⟩!\n#주술회전 왓챠 커밍쑨! https://t.co/Q7qWpV3ksR",
        "postdate": "2021-01-14 10:44:12",
        "username": "watcha_kr",
        "handle": "watcha_kr",
        "profileImg": "http://pbs.twimg.com/profile_images/1351757123290497024/7fLslutQ_normal.jpg",
        "retweet": 2163,
        "like": 933,
        "contentImg": "{'hashtags': [{'text': '주술회전', 'indices': [47, 52]}], 'symbols': [], 'user_mentions': [], 'urls': [], 'media': [{'id': 1349668578354622468, 'id_str': '1349668578354622468', 'indices': [61, 84], 'media_url': 'http://pbs.twimg.com/media/Err8a9FVcAQxGLl.jpg', 'media_url_https': 'https://pbs.twimg.com/media/Err8a9FVcAQxGLl.jpg', 'url': 'https://t.co/Q7qWpV3ksR', 'display_url': 'pic.twitter.com/Q7qWpV3ksR', 'expanded_url': 'https://twitter.com/watcha_kr/status/1349668631953608707/photo/1', 'type': 'photo', 'sizes': {'thumb': {'w': 150, 'h': 150, 'resize': 'crop'}, 'small': {'w': 680, 'h': 365, 'resize': 'fit'}, 'medium': {'w': 1200, 'h': 644, 'resize': 'fit'}, 'large': {'w': 2048, 'h': 1100, 'resize': 'fit'}}}]}",
        "content": {
            "$oid": "5f3cbaf58dd8c7876f04a11e"
        }
    },
    {
        "tag": "진격거",
        "_id": 1349587468471816200,
        "comment": "나 진격거 열린결말내면 개빡칠거같음.. 원래  열린결말 ㅈㄴ싫어하는데 심지어 진격거가 그렇게 끗난다?.. 나진짜 하지메 구축할거임.....",
        "postdate": "2021-01-14 05:21:41",
        "username": "짱",
        "handle": "zzang_giant",
        "profileImg": "http://pbs.twimg.com/profile_images/1345276328115769346/cSYFgWEq_normal.png",
        "retweet": 504,
        "like": 445,
        "contentImg": "{'hashtags': [], 'symbols': [], 'user_mentions': [], 'urls': []}",
        "content": {
            "$oid": "5f3cbaf58dd8c7876f04a11e"
        }
    }]

var data1 = {
    "tag": "에렌",
    "_id": 1351688897621749800,
    "contentImg": "{'hashtags': [], 'symbols': [], 'user_mentions': [], 'urls': [], 'media': [{'id': 1351688895054790658, 'id_str': '1351688895054790658', 'indices': [6, 29], 'media_url': 'http://pbs.twimg.com/media/EsIp43SUwAI2sKk.jpg', 'media_url_https': 'https://pbs.twimg.com/media/EsIp43SUwAI2sKk.jpg', 'url': 'https://t.co/nzjC2zfMSs', 'display_url': 'pic.twitter.com/nzjC2zfMSs', 'expanded_url': 'https://twitter.com/sunahart/status/1351688897621749762/photo/1', 'type': 'photo', 'sizes': {'small': {'w': 605, 'h': 680, 'resize': 'fit'}, 'thumb': {'w': 150, 'h': 150, 'resize': 'crop'}, 'medium': {'w': 1000, 'h': 1124, 'resize': 'fit'}, 'large': {'w': 1000, 'h': 1124, 'resize': 'fit'}}}]}",
    "content": {
        "$oid": "5f3cbaf58dd8c7876f04a11e"
    }
}

var data2 = {
    "hashtags": [{ 'text': '주술회전', 'indices': [47, 52] }],
    'symbols': [],
    'user_mentions': [],
    'urls': [], 'media': [{ 'id': 1349668578354622468, 'id_str': '1349668578354622468', 'indices': [61, 84], 'media_url': 'http://pbs.twimg.com/media/Err8a9FVcAQxGLl.jpg', 'media_url_https': 'https://pbs.twimg.com/media/Err8a9FVcAQxGLl.jpg', 'url': 'https://t.co/Q7qWpV3ksR', 'display_url': 'pic.twitter.com/Q7qWpV3ksR', 'expanded_url': 'https://twitter.com/watcha_kr/status/1349668631953608707/photo/1', 'type': 'photo', 'sizes': { 'thumb': { 'w': 150, 'h': 150, 'resize': 'crop' }, 'small': { 'w': 680, 'h': 365, 'resize': 'fit' }, 'medium': { 'w': 1200, 'h': 644, 'resize': 'fit' }, 'large': { 'w': 2048, 'h': 1100, 'resize': 'fit' } } }]
}

var img = data1['contentImg'];
// console.log(img)
//{'hashtags': [], 'symbols': [], 'user_mentions': [], 'urls': [], 'media': [{'id': 1351688895054790658, 'id_str': '1351688895054790658', 'indices': [6, 29], 'media_url': 'http://pbs.twimg.com/media/EsIp43SUwAI2sKk.jpg', 'media_url_https': 'https://pbs.twimg.com/media/EsIp43SUwAI2sKk.jpg', 'url': 'https://t.co/nzjC2zfMSs', 'display_url': 'pic.twitter.com/nzjC2zfMSs', 'expanded_url': 'https://twitter.com/sunahart/status/1351688897621749762/photo/1', 'type': 'photo', 'sizes': {'small': {'w': 605, 'h': 680, 'resize': 'fit'}, 'thumb': {'w': 150, 'h': 150, 'resize': 'crop'}, 'medium': {'w': 1000, 'h': 1124, 'resize': 'fit'}, 'large': {'w': 1000, 'h': 1124, 'resize': 'fit'}}}]} 
//string

var img2 = data2['hashtags'];
// console.log(typeof img2)
//[ { text: '주술회전', indices: [ 47, 52 ] } ]
//object

var img3 = img2;
// var jsonObj = JSON.parse(img3); 
// ->error
// console.log(jsonObj);
// console.log(typeof jsonObj);

var img4 = img['media'][0]['media_url'];
console.log(img4);

// function json2array(json) {
//     var result = [];
//     var keys = Object.keys(json);
//     keys.forEach(function (key) {
//         result.push(json[key]);
//     });
//     return result;
// }
// console.log(json2array(img))
// console.log(typeof result)

// var imgFilter = (data) => data.filter(function (tweet) {
//     img = tweet['contentImg'];
//     media = img['media'][0]['media_url'];
//     data2 = media;
//     console.log(data2, 'data2');
//     return;
// })

// let dataLink = imgFilter(data);
// dataLink = JSON.stringify(dataLink);
// fs.writeFileSync('twitter_AOT0120_newMedia.json', dataLink, 'utf-8');

// console.log('done');