const arr=[1,2,3,4,5];
let ans=commonFunction(arr);
console.log(ans);
function commonFunction(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
        {
            sum=sum+arr[i];
        }
    return sum;
}
