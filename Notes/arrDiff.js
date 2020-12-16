function arrayDiff(a, b) {
  return a.filter(v => !b.includes(v));
}

console.log(
  arrayDiff([5, 3, -3, 3, 2, 3, 20, 3, -10, -20, 20, 18, -18, 6, 9], [3, -3])
);
