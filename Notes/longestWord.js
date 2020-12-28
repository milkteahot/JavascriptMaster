//map
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(v => v.length))
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//reduce
function findLongestWordLength2(str) {
    return str.split(' ')
        .reduce(function (x, y) {
            return Math.max(x, y.length)
        }, 0);
}
