function solution(n) {
    var answer = String(n).split('').sort((a, b) => b - a);
    return Number(answer.join(''));
}

console.log(solution(118372));