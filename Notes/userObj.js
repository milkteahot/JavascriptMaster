function countOnline(usersObj) {
    let cnt = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) cnt++;
    }
    return cnt;
}

let userObj = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

console.log(countOnline(userObj));