
//retrieving values from Object
const flowers  = {type:"Tulip", color:"yellow", season:"spring "};
// Display Data from the Object given
let answer = flowers .season;
console.log(answer);

  

//retrieving multiple values from Object and merging in to sentence
const person = {
    firstname: "Neeraj",
    lastname: "Doim",
    age: 90,
    eyecolor: "blue"
  };
  
let answer1 = person.firstname + " is " + person.age;
console.log(answer1);



// Create a JavaScript Sets using recipes list as a example
const recipe = new Set();

// Add Values to the list
recipe.add("Spanish Custard");
recipe.add("Pan-Fried Halloumi");
recipe.add("Loaded Kimchi Fries");

// Displaying the recipes
let recipeAnswer = "The list has " + recipe.size + " recipes.";
console.log(recipeAnswer);
