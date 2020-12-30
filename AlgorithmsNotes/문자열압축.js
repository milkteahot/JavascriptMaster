function cutStr(num, s) {
  let temp = "";
  let eq = 1;
  let sLength = s;
  for (let i = 0; i < sLength.length; i += num) {
    s = sLength.substring(i, sLength.length);
    let a = s.substr(0, num);
    let b = s.substr(num, num);
    if (a === b) {
      eq++;
    } else {
      if (eq !== 1) {
        temp += eq + "";
      }
      temp += a;
      eq = 1;
    }
  }
  return temp;
}

function solution(s) {
  var min = cutStr(1, s).length;
  for (let i = 1; i < s.length - 1; i++) {
    let b = cutStr(i + 1, s).length;
    if (min > b) {
      min = b;
    }
  }
  console.log(min);
  return min;
}

const test2 = "ababcdcdababcdcd";
solution(test2)