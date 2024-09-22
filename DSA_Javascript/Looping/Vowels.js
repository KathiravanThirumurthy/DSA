let result=vowels();
console.log(result);
function vowels()
{
    const vowels='aeiouAEIOU';
    const str="Hello world";
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(vowels.includes(str[i]))
        {
            count++;
        }
    }
    return count;
}