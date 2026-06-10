function getReverse(x) {
  let rev = 0
  let num = Math.abs(x)
  while (num > 0) {
    let rem = num % 10
    rev = rev * 10 + rem
    num = Math.floor(num / 10)
  }
  // for -ve no.
  return x < 0 ? -rev : rev
}
