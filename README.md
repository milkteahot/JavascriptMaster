# How to be a Javascript Master
- 자바스크립트 마스터하기
- [Following the FrontEnd RoadMap](https://github.com/milkteahot/JavascriptMaster/blob/master/FrontendRoadmap/index.md#%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A1%9C%EB%93%9C%EB%A7%B5-%EB%94%B0%EB%9D%BC%ED%95%B4%EB%B3%B4%EA%B8%B0)
- [Following the BackEnd RoadMap] 

## 목차
1. [변수와 타입](https://github.com/milkteahot/JavascriptMaster#%EB%B3%80%EC%88%98%EC%99%80-%ED%83%80%EC%9E%85)
2. [조건문과 반복문](https://github.com/milkteahot/JavascriptMaster#%EC%A1%B0%EA%B1%B4%EB%AC%B8%EA%B3%BC-%EB%B0%98%EB%B3%B5%EB%AC%B8)
3. [함수](https://github.com/milkteahot/JavascriptMaster#3-%ED%95%A8%EC%88%98)
4. [배열]
5. [배열의 반복](https://github.com/milkteahot/JavascriptMaster#5-%EB%B0%B0%EC%97%B4%EC%9D%98-%EB%B0%98%EB%B3%B5)
6. [객체]
7. [배열의 메서드]
8. [스코프]
9. [Closure]
10. [객체지향 프로그래밍]
11. [this]
12. [Prototype]
13. [함수 메서드]
14. [비동기 호출]
15. [타이머 API]
16. [서버 요청하기]
17. [DOM]


## 1. 변수와 타입
### 변수
- 변수variable란, `하나의 값을 저장`하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름이다. 
- 변수 선언 -> 초기화(최초로 값 할당) -> 값 할당(대입, 저장)
- var, let, const 키워드를 사용하여 변수를 선언한다. (var 변수 선언은 선언과 초기화가 동시에 진행된다.)
    ```js
    var latte; //변수 선언
    latte = 3500; //값의 할당
    ```
- 선언하지 않은 식별자에 접근하면 ReferenceError(참조 에러) 발생.
- `호이스팅` : 자바스크립트 엔진은 변수 선언을 코드 선두로 끌어올려서 다른 코드보다 먼저 실행한다. (var, let, const, function, function*, calss) 키워드를 사용해서 선언한 모든 식별자는 호이스팅된다. 모든 선언문은 런타임 이전 단계에서 실행되기 때문이다. 
    ```js
    console.log(coffee); //undefined

    var coffee; //선언
    coffee = 100; //할당
    console.log(coffee); //100 :값의 할당은 런타임에 실행된다. 
    ```
### 타입
- 데이터 타입은 값의 종류를 말한다. 
- 변수는 선언이 아닌 할당에 의해 타입이 결정(추론)된다. 
- 7개의 데이터 타입: primitive type(number, string, boolean, undefined, null, Symbol), Object type
```js
var foo;
foo = {};
console.log(typeof foo); //object - 객체

foo = [];
console.log(typeof foo); //object - 배열

foo = function(){};
console.log(typeof foo); //object - 함수
```

⬆️ [목차로 가기](https://github.com/milkteahot/JavascriptMaster#%EB%AA%A9%EC%B0%A8)

## 2. 조건문과 반복문
### 조건문
- if...else
- switch
    ```js
    let coffee;
    switch(coffee){
        case 1: coffee = 'americano';
            break;
        case 2: coffee = 'latte';
            break;
        default: coffee = 'coffee';
    }
    ```
### 반복문
- for문은 반복 횟수가 명확할 때, while문은 반복 횟수가 불명확할 때 주로 사용.
- for문
    ```js
    for(let i=0;i<3;i++){
        console.log(i);
    }
    ```

- while문
    ```js
    let count = 0;

    while(true){
        count++;
        console.log(count);
        if(count === 3) break;
    }
    ```

- do...while문
    ```js
    let count = 0;

     do {
        count++;
        console.log(count);
    } while(count<3);
    ```

⬆️ [목차로 가기](https://github.com/milkteahot/JavascriptMaster#%EB%AA%A9%EC%B0%A8)

## 3. 함수
- 함수는 입력을 받고, 출력을 하는 일련의 과정이다. 
- 함수 정의 방식은 4가지가 있다.
    - 함수 선언문
    ```js
    function add(x,y){
        return x+y;
    }
    ```
    - 함수 표현식
    ```js
    var add = function(){
        return x+y;
    };
    ```
    - Function 생성자 함수
    ```js 
    var add = new Function('x', 'y', 'return x+y');
    ```
    - arrow function
    ```js
    var add = (x,y) => x+y;
    ```

- 함수 정의시 알맞은 인수가 전달되었는지 확인할 필요가 있다. 타입스크립트를 사용하는 것도 하나의 방법이다.
- 즉시실행함수, 재귀함수, 내부함수, 콜백함수, 순수함수와 비순수함수가 있다.

### 3.2 스코프
- 스코프란 식별자가 유효한 범위를 말한다.
- 자바스크립트는 렉시컬 스코프를 따른다. 함수를 어디서 정의했느냐에 따라 상위 스코프를 결정한다. 

### 3.3 함수와 일급객체
- 일급 객체 조건: 무명의 리터럴로 생성 가능, 변수에 저장가능, 함수의 매개변수로 전달 가능, 함수의 반환값으로 사용 가능
- 자바스크립트에서 함수는 일급객체로서, 객체와 동일하게 값으로 사용할 수 있다. 
- 차이: 일반 객체는 호출할 수 없지만 함수객체는 호출할 수 있다. 또한 함수 객체는 함수 고유의 프로퍼티를 소유한다. 
- arguments, caller, length, name, __proto__, prototype


⬆️ [목차로 가기](https://github.com/milkteahot/JavascriptMaster#%EB%AA%A9%EC%B0%A8)



## 5. 배열의 반복
### forEach
- 함수형 프로그래밍에 따른 for문을 대체하는 고차함수
- 함수를 인자로 받는다.
- Array.prototype.forEach 메서드 : 자신의 내부에서 반복문을 실행한다. 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행할 처리를 콜백 함수로 전달받아 반복 호출한다. 
- 콜백함수 호출시 3개의 인자 전달. 메서드를 호출한 배열의 요소값과 인덱스, forEach메서드를 호출한 배열(this)를 순차적으로 전달한다.
```js
const numbers = [1,2,3];
const pows = [];

numbers.forEach(item => pows.push(item**2));
console.log(pows);
```
- 원본 배열 this 를 변경하지 않는다. 콜백함수를 통해 원본 배열을 변경할 수 있다. 
- forEach 메서드의 반환값은 undefined 이다. 
- 콜백함수 내부의 this는 undefined를 가리킨다. 따라서 1) 콜백함수 내부에서 forEach 메서드의 두번째 인자로 this를 전달하거나 2) 화살표 함수를 사용한다.(화살표 함수는 함수 자체의 this바인딩을 갖지 않으므로, 상위 스코프의 this를 그대로 참조한다. )
- 희소 배열의 경우 존재하지 않는 요소는 순회대상에서 제외된다.
- for문에 비해 성능이 좋지는 않지만, 가독성이 좋다. 

### map
- 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복 호출한다. 
- 콜백함수의 반환값들로 구성된 새로운 배열을 반환한다. 원본배열 변경x
```js
//array.map(callbackFunction(currenValue, index, array), thisArg)

const coffee = [1,2,3];
const order = coffee.map(item => item*2);
console.log(coffee); //[ 1, 2, 3 ]
console.log(order); //[ 2, 4, 6 ]

//객체 타입 컨트롤
const cafes = [
    {id:1, name:'starbucks'},
    {id:2, name:'hollys'},
    {id:3, name:'twosmoe'}
];

const names = cafes.map(item => item.name);
console.log(names); //[ 'starbucks', 'hollys', 'twosmoe' ]
```

⬆️ [목차로 가기](https://github.com/milkteahot/JavascriptMaster#%EB%AA%A9%EC%B0%A8)


## Reference
1. Inside Javascript(송형주, 고현준 저)
2. 모던 자바스크립트 Deep Dive(이응모 저)
- 디버깅 
3. [33 Concepts Every Javascript Developer Should Know](https://github.com/leonardomso/33-js-concepts)(feat. Nomad Coder youtube)
    1. Call Stack
        - 자바스크립트가 함수 실행을 핸들링하는 방법 중 하나이다.
        - 콜스택이라는 자바스크립트의 todo list가 있고, 스택방식으로 하나씩 쌓여서 순서대로 실행된다. 
        - [콜스택과 이벤트루프](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)

    2. Primitive Types(원시 타입)
    3. Value Types and Reference Types
    4. Implicit, Explicit, Nominal, Structuring and Duck Typing
    5. == vs === vs typeof
    6. Function Scope, Block Scope and Lexical Scope
    7. Expression vs Statement
    8. IIFE, Modules and Namespaces
    9. Message Queue and Event Loop
    10. setTimeout, setInterval and requestAnimationFrame

    19. map, reduce, filter


4. 함수형 프로그래밍




⬆️ [목차로 가기](https://github.com/milkteahot/JavascriptMaster#%EB%AA%A9%EC%B0%A8)