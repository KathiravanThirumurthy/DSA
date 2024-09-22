const sentence = "The cat and the dog chased the cat.";
const wordToFind = "cat";
let result=wordcount();
console.log(`The word "${wordToFind}" appears ${result} times.`);

function wordcount()
{
 
    let count = 0;
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === wordToFind.toLowerCase()) {
        count++;
    }
    }
    return count;
    //console.log(`The word "${wordToFind}" appears ${count} times.`);
}

