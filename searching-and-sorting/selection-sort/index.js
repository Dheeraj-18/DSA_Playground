let arr = [3, 45, 1, 7, 9, 10]

function selectionSort(arr) {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    // find the minimum in the array
    let min = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}
