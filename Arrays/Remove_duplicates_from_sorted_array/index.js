// The is the Interview approach Brute force -> Better -> Optimal 

// Brute-force 

// Time Complexity: O(N), We traverse the entire array and insert elements into set.
// Space Complexity: O(N), additional space used to store elements in set.

// Solution class containing removeDuplicates method
class Solution {
    // Removes duplicates using Set and returns count of unique elements
    removeDuplicates(nums) {
        // Set to store unique numbers encountered
        const seen = new Set();

        // Index where next unique element will be placed
        let index = 0;

        // Loop over each number in nums
        for (const num of nums) {
            // If num not already in set, it's unique
            if (!seen.has(num)) {
                // Add num to set
                seen.add(num);

                // Overwrite nums[index] with num
                nums[index] = num;

                // Move index forward
                index++;
            }
        }
        // Return count of unique elements
        return index;
    }
}

// Driver code
let nums = [0,0,1,1,1,2,2,3,3,4];
const sol = new Solution();
let k = sol.removeDuplicates(nums);

console.log("k =", k);
console.log("Array after removing duplicates:", nums.slice(0, k));


// Optimal way 

// Time Complexity: O(N), We traverse the entire original array only once.
// Space Complexity: O(1), constant additional space is used to check unique elements.

// Class to hold the solution logic
class Solution {
    // Function to remove duplicates from sorted array in-place
    removeDuplicates(nums) {
        // If array is empty, return 0
        if (nums.length === 0) return 0;

        // Pointer for last unique element
        let i = 0;

        // Start from second element
        for (let j = 1; j < nums.length; j++) {
            // If current element is different from last unique element
            if (nums[j] !== nums[i]) {
                // Move pointer forward
                i++;
                // Place the new unique element
                nums[i] = nums[j];
            }
        }

        // i is last index of unique element, count = i + 1
        return i + 1;
    }
}

// Example usage
let nums = [0,0,1,1,1,2,2,3,3,4];
let sol = new Solution();
let k = sol.removeDuplicates(nums);
console.log("Unique count =", k);
console.log("Array after removing duplicates:", nums.slice(0, k));
