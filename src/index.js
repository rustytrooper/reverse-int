module.exports = function reverse (n) {
  let absolute = Math.abs(n)
  let arrFromNum=Array.from(String(absolute))
  let reversed = Number(arrFromNum.reverse().join(''))
  return reversed
}
