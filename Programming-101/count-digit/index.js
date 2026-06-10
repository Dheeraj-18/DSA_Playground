// write a function that return the count of digit in a no.
// Corner case:
// 1. No. is zero 
// 2. No. is -ve 

function digitCount(number) {
 if(n===0 ) return 1
  let count = 0
  // converting negative no. to positive
  number = Math.abs(number)
  while (number > 0) {
    number = Math.floor(number / 10)
    count++
  }
  return count
}

console.log(digitCount(455758))
