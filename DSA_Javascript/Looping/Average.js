const scores = [80, 90, 85, 70, 95];

let result=average(scores);
console.log("Average score:", result);
function average(scores)
{
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
      }
      const average = total / scores.length;
      return average;

}


