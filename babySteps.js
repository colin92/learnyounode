function consoleSum() {
  var sum = 0;
  var ary = process.argv.slice(2);
  for (x in ary) {
    sum += Number(ary[x]);
  }
  return sum;
}
console.log(consoleSum());
