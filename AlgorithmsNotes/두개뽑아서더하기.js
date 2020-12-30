const numbers = [5, 0, 2, 7];

function solution(numbers) {
    const answer = [];
    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<numbers.length;j++){
            if(i !== j) answer.push(numbers[i]+numbers[j]);
        }
    }
    //중복제거를 위해 reduce() 사용
    return answer.reduce((acc,cur)=>acc.includes(cur) ? acc:[...acc,cur],[]).sort((a,b)=>a-b);
}

//review
function solution(numbers) {
  const temp = [];
  for (let i = 0; i < numbers.length; i++) {
      //i+1 로 다음값부터 더하기
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  //중복제거를 위해 Set() 사용
  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}

console.log(solution(numbers));
