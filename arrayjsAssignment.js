// Find the last element of the following arrays.
let arr1 = [3,7,34,90,12];
console.log(arr1.pop());

let arr2 = [true, "green", "where",12,56];
console.log(arr2.pop());

// write a JS program that will join the following array elements into a string
myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join(""))

// Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());

// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
 var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
 //Console the array without duplicates
 let uniqueArr1 = arr.filter((orange, index) => {
    return arr.indexOf(orange) === index;
});
console.log(uniqueArr1)
//and console another array that only contains the duplicates
let duplicates = arr.filter((orange, index) => {
    return arr.indexOf(orange) !== index;
});
console.log(duplicates)
// Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
 let arr5 = ["the", "way", "x", 4];
 if(arr5.includes("the")) {console.log("the")}else{
    console.log("the search word was not found")
 }

// Write a JS script to sort the following string
let word = "sevink"
console.log(word.split("").sort().join(""))
