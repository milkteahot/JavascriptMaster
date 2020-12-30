function filteredArray(arr, elem) {
    let newArr = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i].indexOf(elem) == -1){ //indexOf사용하여 -1 결과값인 경우만 푸시
        newArr.push(arr[i]);
      } 
    }
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));