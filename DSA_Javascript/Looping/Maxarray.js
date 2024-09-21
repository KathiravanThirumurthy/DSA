const arr=[1,2,3,4,5];
let ans=maxArray(arr);
console.log(ans);
function maxArray(arr)
{
    let max=arr[0];
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i] > max)
            {
                max=arr[i];
            }
        }
    
        return max;
   
}
let min=minArray(arr);
console.log(`minimum element in the array ${min}`);
function minArray(arr)
{
    let min=arr[0];
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i] < min)
            {
                min=arr[i];
            }
        }
    
        return min;
   
}
