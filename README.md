# How to be a Javascript Master
- 자바스크립트 마스터하기

## 목차
1. [변수와 타입](https://github.com/milkteahot/JavascriptMaster#%EB%B3%80%EC%88%98%EC%99%80-%ED%83%80%EC%9E%85)
2. [조건문과 반복문]
3. [함수]
4. [배열]
5. [배열의 반복]
6. [객체]
7. [배열의 메서드]

## 변수와 타입
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
- 변수의 타입
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

## 조건문과 반복문
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

⬆️ [목차로 가기](https://github.com/milkteahot/JavascriptMaster#%EB%AA%A9%EC%B0%A8)

4. 함수형 프로그래밍
