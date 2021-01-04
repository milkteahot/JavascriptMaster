function bouncer(arr) {
    return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]))

/*
The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy 1.4k value or false for falsy 1.6k value.
*/