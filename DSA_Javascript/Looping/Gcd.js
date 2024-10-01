/*
The Euclidean algorithm is used to find the HCF by repeatedly replacing the larger number with its remainder when divided by 
the smaller number, until one of the numbers becomes zero.
gcd(a ,a%b)
The recursion continues with the new values of a and b until b becomes zero, at which point a will hold the HCF.
*/
function findGcd(a,b)
{
    if(b === 0)
        return a;

    return findGcd(b,a%b)

}
function findhcf(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
let gcd=findGcd(2,8);
let hcf=findhcf(2,8);
console.log(`the Gcd of the no is ${gcd}`)
console.log(`the HCF of the no is ${hcf}`)
