
function checkPrime(n)
{
    if (n <= 1) return false; // 1 and below are not prime numbers
    if (n === 2) return true; // 2 is the only even prime number
    if (n % 2 === 0) return false; // Any even number greater than 2 is not prime
    for( let i=3;i<= Math.floor(Math.sqrt(n));i++)
    {
        if(n % i == 0 )
            return false;
    }
    
    return true;
}
let n=23;

let results=checkPrime(n);
if(results)
{
    console.log(`The no ${n} is   prime`);
}else
{
    console.log(`The no  ${n} is not  prime`);
}

function primenoGen(no)
{
    let primeNos=[]
    for(let i=3;i<no;i++)
    {
        if(checkPrime(i))
        {
            primeNos.push(i);
           
        }
    }
    return primeNos;
}
let no=20;
let primeNos=primenoGen(no);
console.log(primeNos);