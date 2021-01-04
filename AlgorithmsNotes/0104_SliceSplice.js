function frankenSplice(arr1, arr2, n) {
    const first = arr2.slice(0, n);
    const newArr = arr1.concat(arr2.slice(n));
    return first.concat(newArr);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));