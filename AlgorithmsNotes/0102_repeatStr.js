function repeatStringNumTimes(str, num) {
    let result = '';
    while (num > 0) {
        result += str;
        num--;
    }
    return result;
}

console.log(repeatStringNumTimes("abc", 3));

//review - recursion sol2
function repeatStringNumTimes2(str, num) {
    return num > 0 ? str + repeatStringNumTimes2(str, num - 1) : '';
}

console.log(repeatStringNumTimes2("abc", 3));