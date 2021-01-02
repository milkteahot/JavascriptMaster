
// function solution(a, b) {
//     var answer;
//     var result = 0;
//     //a[0]*b[0] a인덱스와 b인덱스에 들어있는 값을 곱하고, 차례대로 더한다.
//     answer =
//         a.map(item =>
//             b.map(v => item * v));
//     for (let i = 0; i < answer.length; i++) {
//         for (let j = i; j < answer[i].length; j++) {
//             if (i === j) {
//                 result += answer[j][i];
//             }

//         }
//     }
//     return result;

// }

function solution(a, b) {
    var answer = a.map((item, index) => b.map(v => v * item));
    return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));