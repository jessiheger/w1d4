// Week One Day Four Homework - Function Problems with Scope

// 1. 
// const printCool = (name) => {
//     console.log(`${name} is cool`);
// }
// // printCool("Captain Reynolds");

// // 2.
// // const calculateCube = (num) => {
// //     console.log(Math.pow(num, 3));
// // }
// // calculateCube(5);

// // 3.
// const isAVowel = (letter) => {
//     switch (letter.toLowerCase()) {
//     case "a":
//         console.log(true); 
//          break;
//     case "e":
//         console.log(true);
//         break;
//     case "i":
//         console.log(true);
//         break;
//     case "o":
//         console.log(true);
//         break;
//     case "u":
//         console.log(true);
//         break;
//     default:
//         console.log(false);
//     }
// }
// // OR
// const isVowel = (character) => {
//     return/[aeiou]/i.test(character);
// }

// 4. 
// const getTwoLengths = (string1, string2) => {
//     if (string1.length >=1 && string2.length >= 1){
//       let bothStringsArray = [];
//     bothStringsArray.push(string1.length);
//     bothStringsArray.push(string2.length);
//     return bothStringsArray;
//     }
//     };

//     console.log(getTwoLengths('my', 'house'));

// 5.
// declare new empty array
// loop through all strings in the original array
// take the length of [i], push it to a new array
// take the length of [i++], push it to the new array
// take the length of [i++]
// console log new array
// let lengths = [];
// const getMultipleLengths = (array) => {
//     for (i of array) {
//         // OR array.forEach(function(i){
//         lengths.push(i.length);
//     })
//     return lengths;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// 6. 
// create array
// sort it numerically (ascending)
// print value of final index

// let numArray = [];
// const maxOfThree = (num1, num2, num3) => {
//     numArray = [num1, num2, num3];
//     numArray.sort();
//     console.log(numArray[numArray.length - 1]);
// }
// maxOfThree(6, 9, 1);

// 7.
// get length of each element in the array
// sort array based on that length
// print word with longest length

// const printLongestWord = (array) => {
//     let biggerWord = array[0];
//     for (i of array) {
//         if (i.length > biggerWord.length) {
//             biggerWord = i;
//         }
//     }
//     return biggerWord;
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// 8.
const transmogrify = (num1, num2, num3) => {
    let mult = num1*num2
    return (Math.pow(mult, num3));
}
console.log(transmogrify(5, 3, 2));

// // 9.
// const fSequence = (a) =>{
//     let newArray = [];
//     for(i=0; i<a; i++){
//       if(i===0 || i===1){
//         newArray.push(1)  
//       } else {
//        newArray.push(newArray[i-1]+newArray[i-2])
//       }
//       console.log('newarray[i]', newArray[i])
//       console.log('a', i, a)
//       if(newArray[i] == a){
//         return newArray
//     }
//     }
    
//     return 'not in sequence'
