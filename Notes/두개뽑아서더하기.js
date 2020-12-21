const numbers = [5, 0, 2, 7];

// function solution(numbers) {
//     const answer = [];
//     for(let i=0;i<numbers.length;i++){
//         for(let j=0;j<numbers.length;j++){
//             if(i !== j) answer.push(numbers[i]+numbers[j]);
//         }
//     }
//     return answer.reduce((acc,cur)=>acc.includes(cur) ? acc:[...acc,cur],[]).sort((a,b)=>a-b);
// }
function solution(numbers) {
  const temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  console.log(temp, 'temp')
  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}

console.log(solution(numbers));
