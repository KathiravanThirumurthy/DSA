// Reverse a String
function reverseStr(str)
{
    let reversed='';
    for(let i=str.length-1;i >= 0;i--)
    {
        reversed+=str[i];
    }
    return reversed;
}
function reverseString(str)
{
   /* const arr=str.split('');
    arr.reverse();
    arr.join('');
    return arr;*/
    return str.split('').reverse().join('');
    /*
    Explanation:
    split(''): Splits the string into an array of individual characters.
    reverse(): Reverses the array.
    join(''): Joins the array back into a string.
    */

}
let str="Hello"
let ans=reverseStr(str);
console.log(ans);
let ans1=reverseString(str);
console.log(ans1);