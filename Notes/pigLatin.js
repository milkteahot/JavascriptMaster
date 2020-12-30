function pigIt(str) {
    let first = str.slice(0, 1);
    str = str.slice(1, str.length);
    str = str + first + "ay";
    return str.toLowerCase();
};
function pigIt2(str) {
    let regex = /^[^aeiou]+/;
    let consonant = str.match(regex);
    return consonant !== null
        ? str
            .replace(regex, "")
            .concat(consonant)
            .concat("ay")
        : str.concat("way");
};
// console.log(pigIt('Pig latin is cool'));
console.log(pigIt2('glove'));