// Check for a palindrome
function palindrome(str)
{
    let  reversed=str.split('').reverse().join('');
    if(str=== reversed)
    {
        return 'palindrome';
    }
    else {
        return 'not Palindrome'
    }
}
str='liri'
let result=palindrome(str);
console.log(result);