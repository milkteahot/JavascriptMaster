function rangeOfNumbers(startNum, endNum) {
    if(startNum === endNum){
        return [endNum]; //여기에 괄호 추가한걸로 해결. 
    }
    const array = rangeOfNumbers(startNum,endNum-1);
    array.push(endNum);
    return array;
  };

rangeOfNumbers(1,5);

//sol2
function rangeOfNumbers2(startNum, endNum){
    return (startNum === endNum) ? [startNum] : [...rangeOfNumbers(startNum,endNum-1), endNum];
}

console.log(rangeOfNumbers2(1,5));