function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]); //push로 arr더하기
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));