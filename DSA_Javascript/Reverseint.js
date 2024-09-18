// reverse a no.
let no=367;
let resut=reverseint(no);
console.log(resut);
function reverseint(no)
{
    return no.toString().split('').reverse().join('');
}