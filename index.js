// A visitor receives a prompt upon opening the website to
// enter a list of comma-separated froyo flavors.
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
// When they view the browser console, they observe a table listing how
// many of each flavor they have ordered. In this case, they will be able to
// observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

const userinput = prompt(
  "Please enter a list of comma-separated froyo flavors"
);
const flavorArr = userinput.split(",");
const flavorObj = {};

for (let flav of flavorArr) {
  if (flav in flavorObj) {
    flavorObj[flav]++;
  } else {
    flavorObj[flav] = 1;
  }
}

function displayResults(flavorObj) {
  console.log(flavorObj);
  console.table(flavorObj);
}
displayResults(flavorObj);
//why does it not want me to use return before the function name?

//flav in flavorObj ? flavorObj[flav]++ : (flavorObj[flav] = 1);

// what sould be encapsulated into a function that makes the most sense to do in a practical/professional setting?
// For example, should I put the whole process(lines 8-26) into a function?
// Or do I only put the Object/Loop into a function because thats the more "useful/applicable" code?

// I cannot figure out how to make it functional with the object/for loop within a function: help please.
// Rubric requires that the "logic for counting the frequencies of elements in an array is organized into a function that returns an object."
