
let arr=[2,1,4,6,7,12,90];
const tofind=60;
const find=linearSearch(arr,tofind)

if(find == -1)
console.log(`Element not found`);
else
console.log(`Element found at index ${find}`);

function linearSearch(arr,tofind)
{
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i] == tofind)
            {
               // console.log(`Element found at index ${i}`);
                return i;
                break;
            }
        }
      //  console.log("Element not found");
        return -1;  // Return -1 if the element is not found
}

