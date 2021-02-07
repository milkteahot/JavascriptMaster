//indexOf() 함수는 문자열에서 원하는 문자열을 검색하거나 배열에서 특정값의 존재여부를 확인한다. 배열의 경우 위치값을 index로 반환한다.
//every() 배열의 모든 원소가 조건에 맞는지 검사하는 메서드. 하나라도 만족하지 않으면 false 반환한다.

function mutation(arr) {
    //두번째 요소의 인자가 첫번째 요소안에 모두 있는지
    return arr[1]
        .toLowerCase()
        .split("")
        .every(function (v) {
            return arr[0].toLowerCase().indexOf(v) != -1;
        })
}

console.log(mutation(["Mary", "Aarmy"]))
console.log(mutation(["floor", "for"]))
