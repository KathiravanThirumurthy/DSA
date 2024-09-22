const mixedArray = [1, "hello", true, 42, "world", false];
let res=seperator(mixedArray);
console.log(res);


function seperator(mixedArray)
{
    const numbersOnly = [];
    for (let i = 0; i < mixedArray.length; i++) {
        if (typeof mixedArray[i] === 'number') {
          numbersOnly.push(mixedArray[i]);
        }
      }
      return numbersOnly;
}

//console.log(numbersOnly);  // Output: [1, 42]
