

let result=countDigits();
console.log(result);
function countDigits()
{
    const number = 1234567890;
    let count = 0;
    let reverse=0;
    for (let i = number; i > 0; i = Math.floor(i / 10)) {
        count++;
        let digit = i % 10;
        
        // Append the digit to the reversed number
        reverse = reverse * 10 + digit;
      }
      console.log("Reversed number:", reverse);
      return count;
      //return { count, reverse };  // Return both values as an object
}


