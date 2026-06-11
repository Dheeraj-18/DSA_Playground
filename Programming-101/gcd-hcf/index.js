// Brute force approach

// Time complexity O(min(n1,n2))
function getGCD(n1, n2) {
  let gcd = 1
  for (let i = 1; i < Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i
    }
  }
  return gcd
}

// console.log(getGCD(9,12));

// Other way but still better for some cases but worst case are same  it's O(min(n1,n2))

function getGCD(n1, n2) {
  let gcd = 1
  for (let i = Math.min(n1, n2); i >= 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i
      break
    }
  }
  return gcd
}

// Optimal approach by Euclidean Algorithm
// It say the
// GCD(a,b) = gcd(a-b, b)   a > b

// After understanding we can in better way that
// GCD(a,b) = gcd(a % b , b) if one of the is 0 other is gcd

// Time complexity o(logϕ min(n1,n2))

function getGCDByEuclid(n1, n2) {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) {
      n1 % n2
    } else {
      n2 % n1
    }
  }
  return n1 === 0 ? n2 : n1
}
