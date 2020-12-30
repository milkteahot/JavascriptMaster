function alphabetPosition(text) {
    text.toLowerCase();
    let regex = /[a-z]/;
    let arr = text.split("");
    let list = [];
    let arr2 = arr.map(v => (v.match(regex) === null) ? "" : v);
    arr2 = arr2.filter(function (el) {
        return el !== '';
    })
    arr2.map((item, index) => {
        item = item.charCodeAt(0) - 96;
        if (item < 0) return;
        else list.push(item);
    })
    return list.join(" ");
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("c|4+y1.0"));

function alphabetPosition2(text) {
    text = text.toLowerCase();
    return text.split('').map(function (c) {
        if (c === " ") return;
        return 'abcdefghijklmnopqrstuvwxyz'
            .indexOf(c) + 1
    })
        .join(' ');
}
// console.log(alphabetPosition2("The sunset sets at twelve o' clock."));

function convertToNumbers(str) {
    var arr = "abcdefghijklmnopqrstuvwxyz".split("");
    return str.replace(/[a-z]/ig, function (m) { return arr.indexOf(m.toLowerCase()) + 1 });
}

// console.log(convertToNumbers("The sunset sets at twelve o' clock."));

//review
function alphabetPosition3(text) {
    return text
        .toLowerCase()
        .match(/[a-z]/gi)
        .map((v) => v.charCodeAt() - 96)
        .join(" ");
}

console.log(alphabetPosition3("c | 4 + y1.0"));