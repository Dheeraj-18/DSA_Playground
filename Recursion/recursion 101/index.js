// Problem:1 Find the Sum of n
function sum(num) {
  if (num === 0) return 0
  return num + sum(n - 1)
}

// Problem : 2 Find the Sum of array

let arr = [5, 4, 3, 2, 1]

function findSum(nums) {
  if (nums === 0) return arr[nums]
  return arr[nums] + findSum(nums - 1)
}

// problem : 3 Find sum of odd no. in array

function findSumOdd(n) {
  isOdd = arr[n] % 2 !== 0
  if (n === 0) {
    return isOdd ? arr[n] : 0
  }
  return (isOdd ? arr[n] : 0) + findSumOdd(n - 1)
}

// console.log(arr.length-1);

// Problem :4 Find the factorial

function findFactorial(n) {
 // if (n === 0 || n === 1) return 1 
 if(n<=1) return n;
  return n * findFactorial(n - 1)
}
