const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
let result=commonElements(arr1,arr2)
console.log(`The Common elements are ${result}`)


function commonElements(arr1,arr2)
{
    const commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        }
      }
      return commonElements;
}

//console.log("Common elements:", commonElements);  // Output: [3, 4, 5]
