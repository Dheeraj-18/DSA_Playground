// write a function which return how many negative no. inside the array

function countNegative(arr) {
    let negativeCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount += 1;
        }
    }
    return negativeCount
}

// console.log(countNegative([5, 6, -6, -7, -45, 89, -89]))

// write a function that return the largest no. inside the array

//Bug in this solution if all element are -ve then we still return -1 
function findLargest(arr) {
    let currentLargestNo = -1
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > currentLargestNo) {
            currentLargestNo=arr[i]
        }
    }
  return currentLargestNo
}


// Correct Solution in js Standard 
function findLargestInJs(arr) {
    let currentLargestNo = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > currentLargestNo) {
            currentLargestNo=arr[i]
        }
    }
  return currentLargestNo
}