let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};
//generate an array of all object Keys
function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users));