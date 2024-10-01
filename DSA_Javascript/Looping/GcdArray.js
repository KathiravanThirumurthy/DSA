/*
Given an array of numbers, find GCD of the array elements.
The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

*/


function findGCD(arr) {
    if (arr.length === 0) {
      return null; // Handle empty array case
    }
  
    const gcd = (a, b) => {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    };
  
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result = gcd(result, arr[i]);
    }
    return result;   
  
  }

  const numbers = [12, 15, 18];
const gcd = findGCD(numbers);
console.log("GCD of the array:", gcd);