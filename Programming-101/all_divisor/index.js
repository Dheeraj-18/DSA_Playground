// Problem : Print all Divisor of given No. or Factor

// Approach-1  o(N)

function getAllDivisor(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i)
    }
  }
}

// console.log(getAllDivisor(36));

// Approach 2 O(sqt(n))

function getAllFactor(n) {
  let arr = []

  // O(sqt(n))
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      arr.push(i)
      if (n / i !== i) {
        arr.push(n / i)
      }
    }
  }
  // all factor in sorted order O(n. of factor *log(no. of factor))
  
  return arr.sort((a, b) => a - b)
}

console.log(getAllFactor(36))
