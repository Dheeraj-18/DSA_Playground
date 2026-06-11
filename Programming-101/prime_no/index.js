// Prime No.: Are the No. which have exactly two factor 1 and the No. itself

// Approach :1 O(N)

function isPrime(n) {
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++
    }
  }
  return count === 2 ? true : false
}

// console.log(isPrime(17))

// Approach : 2 O(sqt(n))

function isPrimeNo(n) {
  let count = 0
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      count++
      if (n / i !== i) count++
    }
  }
  return count === 2 ? true : false
}

console.log(isPrimeNo(14));
