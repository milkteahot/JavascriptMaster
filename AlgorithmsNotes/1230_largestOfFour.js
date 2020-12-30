//largest numbers in arrays
function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].sort((a, b) => b - a);
        result.push(arr[i][0]);
    }
    return result;
}

function largestOfFour2(arr) {
    return arr.map(function (group) {
        return group.reduce(function (prev, current) {
            return current > prev ? current : prev;
        });
    });
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

console.log(largestOfFour2([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));