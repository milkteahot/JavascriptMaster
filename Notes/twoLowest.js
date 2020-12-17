function sumTwoSmallestNumbers(numbers) {  
    const min = numbers.sort((a,b)=>(a-b));
  return min[0]+min[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))