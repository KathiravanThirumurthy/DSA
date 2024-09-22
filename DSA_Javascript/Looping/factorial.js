const num = 5;
let result=factorial();
console.log(`Factorial of ${num} is ${result}.`); 
function factorial()
{
    
    let factorial=1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
      }
    return factorial;
   // console.log(`Factorial of ${num} is ${factorial}.`); 
}



