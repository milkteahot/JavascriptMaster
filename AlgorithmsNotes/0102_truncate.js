function truncateString(str, num) {
    let exp = [...str].slice(0, num);
    return exp.join('').concat('...');
}

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));