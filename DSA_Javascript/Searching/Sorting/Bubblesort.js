arr=[90,60,10,25,78,15]
function bubbleSort(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=0;j<arr.length-1-i;j++)
        {
         
            if(arr[j] > arr[j+1])
                {
                    let temp=arr[j+1];
                    arr[j+1]=arr[j];
                    arr[j]=temp;
                }
        }
    }
    return arr;
}
let ans=bubbleSort(arr);
console.log(ans);