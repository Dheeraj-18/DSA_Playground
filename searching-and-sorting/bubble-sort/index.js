// Time O(n^2)  space O(1)

let arr = [4, 5, 6, 3, 1, 0]

function bubbleSort(arr) {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

// Improved Bubble sort
// If the Array is already is already sorted then why we need to run the whole algo for all iteration
// So , we maintain the boolean value which initially false and when we run first pass and there is not change we break the loop

function bubbleSortNew(arr) {
  let n = arr.length
  let isSwapped = false
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        isSwapped = true
      }
    }
    if (!isSwapped) break
  }
  return arr
}

console.log(bubbleSort(arr))
