// Find the Second Largest No. in an array 

// Some common Edge cases
// -> Array is empty
// -> Array has negative no.
// -> Array has duplicates
// -> Array has infinite No.

// Optimal approach 
function secondLargest(arr) {
    if(arr.length<2) return null
   let  fLargest = -Infinity;
   let  sLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > fLargest) {
            sLargest = fLargest
            fLargest = arr[i];
        }
        else if (arr[i] > sLargest && arr[i] !== fLargest ) {
            sLargest = arr[i]
        }
    }
    return sLargest
}

console.log(secondLargest([4,6, 38,38,3,5]))
