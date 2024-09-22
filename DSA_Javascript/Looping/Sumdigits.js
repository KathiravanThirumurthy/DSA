
let res=sumDigits();
console.log(`The sum of digits ${res}`)
function sumDigits()
{
    let number = 12345;
    let sum = 0;
    for (let i = number; i > 0; i = Math.floor(i / 10)) {
        sum += i % 10;
      }
      
     return sum;
}
