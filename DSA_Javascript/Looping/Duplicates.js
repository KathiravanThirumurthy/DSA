//Remove Duplicates from an Array
const arr=[1, 2, 3, 2, 4, 5, 1, 6, 4];
let res=duplicates(arr);
console.log(res);
function duplicates(arr)
{
    let uniqueNumbers=[];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueNumbers.includes(arr[i])) {
          uniqueNumbers.push(arr[i]);
        }
      }
      return uniqueNumbers;
}