function isPalindrome(x) {
  // for negative no.
  if (x < 0) return false
  let num = x
  let reverse = 0
  while (num > 0) {
    let rem = num % 10
    reverse = reverse * 10 + rem
    num = Math.floor(num / 10)
  }
  if (reverse === x) return true
  else return false
}

console.log(isPalindrome(121));