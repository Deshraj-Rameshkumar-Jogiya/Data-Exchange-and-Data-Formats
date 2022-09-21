// //creating the randome number genrater function.
// const generateRandomeNumber = function (minimum, maximum){
//     return Math.floor(Math.random() * (maximum - minimum)) + minimum;
// }

// //passing the minimum and maximum number.
// console.log(generateRandomeNumber(37,700));

// //exporting the randome number genrater function to index.js.
// export const generateRandomeNumber = function (minimum, maximum){
//     return Math.floor(Math.random() * (maximum - minimum)) + minimum;
// }

// //passing the minimum and maximum number.
// console.log(generateRandomeNumber(37,700));


//exporting the randome number genrater function to index.js.
export const generateRandomeNumber = function (minimum, maximum){
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

//Defining and passing the minimum and maximum number.
console.log(`from Utility ${generateRandomeNumber(37,700)}`);
