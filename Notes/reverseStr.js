function reverseString(str) {
    let arr = [];
    for (let i = str.length - 1; i > -1; i--) {
        arr.push(str[i]);
    }
    return arr.join('');
}

console.log(reverseString("hello"));

//sol2
function reverseString2(str) {
    return str
        .split("")
        .reverse()
        .join("");
}

console.log(reverseString2("love"));
