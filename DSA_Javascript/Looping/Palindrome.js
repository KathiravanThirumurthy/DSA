const word = "madam";
let res=palindrome(word);
console.log(res);
if(res)
{
    console.log(`${word} is a palindrome:`, res);
}else
{
    console.log(`${word} is a not a palindrome:`, res);
}

function palindrome(word)
{
    let isPalindrome = true;
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
          isPalindrome = false;
          break;
        }
      }
      return isPalindrome;
}


