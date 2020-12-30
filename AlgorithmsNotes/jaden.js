//codewars - 7kyu
String.prototype.toJadenCase = function () {
  const list = this.split(" ");
  const result = list.map(
    (v) => v.charAt(0).toUpperCase() + v.slice(1, v.length)
  );
  return result.join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
var test = str.toJadenCase("How Can Mirrors Be Real If Our Eyes Aren't Real");

console.log(test, ", test");

//review1
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

//review2
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase();
  });
};
