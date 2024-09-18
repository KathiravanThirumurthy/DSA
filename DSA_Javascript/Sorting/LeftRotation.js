/*
5.LEFT ROTATION

You are given a array of numbers. Your task is to rotate the given array left(anti-clockwise) by 1 units from the starting index. You are required to return the rotated array.

Input format
First line contains an integer n, the size of the array. Second line contains n integers, the elements of the array.

Output format
Return the rotated string.

Sample Input 1
1 2 3 4 5

Sample Output 1
2 3 4 5 1

Explanation
In the left rotation, the subarray of length 1 from the beginning is [1],
 this subarray is removed from the beginning and attached to the end of the array(i.e. anti-clockwise).

Constraints
1 <= n <= 10^5 1 <= arr[i] <= 10^5
*/
function leftRotate(arr) {
    // Remove the first element of the array and store it
    let firstElement = arr.shift();
    
    // Push the removed element to the end of the array
    arr.push(firstElement);
    
    return arr;
  }
  
  // Example input:
  let inputArray = [1, 2, 3, 4, 5];  // The array to be rotated
  
  let outputArray = leftRotate(inputArray);
  console.log(outputArray);  // Output: [2, 3, 4, 5, 1]
  