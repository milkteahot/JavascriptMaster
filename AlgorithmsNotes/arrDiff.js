//두 개의 배열에서 중복 제거하기
function arrayDiff(a, b) {
  return a.filter(v => !b.includes(v));
}

// console.log(
//   arrayDiff([5, 3, -3, 3, 2, 3, 20, 3, -10, -20, 20, 18, -18, 6, 9], [3, -3])
// );

//작은 값 걸러내기
function isBigEnough(value){
  return value >= 10;
}

var filtered = [12,8,5,130,33].filter(isBigEnough);
// console.log(filtered);

//json에서 무효한 항목 걸러내기
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj){
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterById(item){
  if(isNumber(item.id) && item.id !== 0){
    return true;
  }
  invalidEntries++;
  return false;
}

var arrayById = arr.filter(filterById);
// console.log(arrayById);

//배열 내용 검색
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// function filterItems(query){
//   return fruits.filter(function(elem){
//     return elem.toLowerCase().indexOf(query.toLowerCase()) > -1;
//   })
// }

//es2015
const filterItems = (query) => {
  return fruits.filter((elem) => 
     elem.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}
// console.log(filterItems('ap'));


var arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
var case4 = arr.includes('a', -3); // true

console.log(case4);