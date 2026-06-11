// Given a number x, determine whether the given number is Armstrong's number or not. A positive integer of n digits is called an
// Armstrong number of order n (order is the number of digits) if

// abcd... = pow(a,n) + pow(b,n) + pow(c,n) + pow(d,n) + ....


// Edge cases 
// 0          
// Single digit numbers 
// Negative numbers      ->  usually return false
// Non-integers         -> usually ignored or return false

function isArmstrong(n) {
  if (n < 0 || !Number.isInteger(n)) return false;

  let sum = 0;
  let original = n;
  let digits = n.toString().length;

  while (n > 0) {
    let rem = n % 10;
    sum += Math.pow(rem, digits);
    n = Math.floor(n / 10);
  }

  return sum === original;
}