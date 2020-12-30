const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function disemvowel(str) {
//     let array = [...str];
//     array = array.filter(v=>!vowel.includes(v))
//     return array.join("");
//   }

//   console.log(disemvowel("This website is for losers LOL!"));

//review
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

//   console.log(disemvowel("This website is for losers LOL!"));
