//Create an empty array called colors
const colors = [];

//Add three colors to the array using push[]
colors.push("purple", "blue", "brown");

console.log(colors);

//Create another array called numbers with five numbers
const numbers = [1, 2, 3, 4, 5];

console.log(numbers);

//remove the last color from the colors array
const removedColor = colors.pop();

console.log(colors);
console.log(removedColor);

//add a new color to the beginning of the colors array

colors.unshift("black");
console.log(colors);

//print the legnth of both arrays
console.log(colors.length);
console.log(numbers.length);

