//ex1
const numbers = [1,2,3];
const pows = [];

numbers.forEach(item => pows.push(item**2));
console.log(pows); //[ 1, 4, 9 ]

//ex2 - forEach 콜백함수에 전달하는 인자 3개
[1,2,3].forEach((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}, arr: ${arr}`);
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3], arr: 1,2,3
요소값: 2, 인덱스: 1, this: [1,2,3], arr: 1,2,3
요소값: 3, 인덱스: 2, this: [1,2,3], arr: 1,2,3
*/

//ex3 - 콜백함수 내부의 this 가 undefined 이므로 에러
// class Numbers {
//     numberArray = [];

//     multiply(arr){
//         arr.forEach(function(item) {
//             this.numberArray.push(item*item);
//         });
//     }
// }

// const number = new Numbers();
// number.multiply([1,2,3]);
// >>TypeError: Cannot read property 'numberArray' of undefined

//ex4 - 콜백함수 내부의 this로 사용할 multiply 메서드 내부의 this를 전달
class Numbers {
    numberArray = [];

    multiply(arr){
        arr.forEach(function(item) {
            this.numberArray.push(item*item);
        }, this);
    }
}

const number = new Numbers();
number.multiply([1,2,3]);
console.log(number.numberArray); //[ 1, 4, 9 ]

//ex5 - 화살표 함수 사용
class Coffee {
    coffeeArr = [];

    multiply(arr){
        arr.forEach(item => this.coffeeArr.push(item*item));
    }
}

const coffees = new Coffee();
coffees.multiply([1,2,3]);
console.log(coffees.coffeeArr, 'coffeeArr'); //[ 1, 4, 9 ] coffeeArr

//ex6 - 폴리필
if(!Array.prototype.forEach){
    Array.prototype.forEach = function(callback, thisArg){
    //첫번째 인자가 함수가 아니라면, TypeError
        if(typeof callback !== 'function'){
            throw new TypeError(callback +'is not a function');
        }
        //this로 사용할 두번째 인자가 없으면 전역객체를 this로 사용
        thisArg = thisArg || window;

        //for문으로 배열 순회하면서 콜백함수를 호출
        for(var i=0;i<this.length;i++){
            //call 메서드로 thisArg를 전달, 콜백함수를 호출
            //콜백함수의 인수로 배열 요소, 인덱스, 배열 자신을 전달
            callback.call(thisArg, this[i], i, this);
        }
    }
}
