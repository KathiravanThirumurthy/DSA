// function declaration
function binarySearch(arr, no) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (arr[middle] === no) {
          //  return `Element found at index ${middle}`;
          return middle;
        }
        else if (arr[middle] < no) {
            low = middle + 1;
        }
        else {
            high = middle - 1;
        }
    }

   // return "Element not found";
   return -1;
}

const arr = [5, 9, 17, 23, 25, 45, 59, 63, 71, 89];  // Sorted array
const no = 59;  // Target value

//console.log(binarySearch(arr, no));  // Output: Element found at index 6
let value=binarySearch(arr,no);
console.log(value);
if(value == -1)
{
    console.log("The Element not found");
}else{
    console.log(`The element is found at the index ${value} and the element is ${arr[value]}`)
}
