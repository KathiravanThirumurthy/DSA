/*2. Given an array of n strings. Sort the array in lexicographical order.
Input format
First line contains integer n.

Next line contains n space separated strings.

Output format
Print the sorted array.

Sample Input 1
4

abc abd ab a

Sample Output 1
a ab abc abd

Explanation
The given array is sorted in lexicographical order.

Constraints
1 <= n <= 10000

Strings contain only lowercase english alphabet.

Each string will have length no more than 15.*/

let arr=["abc","abd","ab","a"]
function lexicographical(arr)
{
    for (var i = 0; i < arr.length; i++) {  
        for (var j = 0; j < arr.length - i - 1; j++) {  
            // Use localeCompare to compare strings lexicographically
            if (arr[j].localeCompare(arr[j + 1]) > 0) {  
                // Swap if current string is lexicographically greater than the next one
                var tempValue = arr[j];  
                arr[j] = arr[j + 1];  
                arr[j + 1] = tempValue;  
            }  
        }  
    }  
    return arr;
}
let ans=lexicographical(arr)
console.log(ans);

/*

Comparison: In the numeric version of the bubble sort, we used arr[j] > arr[j + 1] to compare numbers. 
For strings, we use arr[j].localeCompare(arr[j + 1]):

localeCompare() returns a negative value if arr[j] is lexicographically smaller than arr[j + 1].
It returns 0 if they are equal.
It returns a positive value if arr[j] is lexicographically greater.


*/