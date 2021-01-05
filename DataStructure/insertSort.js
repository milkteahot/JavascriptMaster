var inserSort = function (arr) {
    var i = 1, j, temp;
    for (i; i < arr.length; i++) {
        temp = arr[i]; //숫자를 선택
        //선택한 숫자보다 크면 
        for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
            console.log(arr[j + 1] + ' [j+1] ' + arr[j] + ' [j]');
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
};

console.log(inserSort([5, 3, 6, 12, 9]));