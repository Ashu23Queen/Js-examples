//converting to lowercase
let myownString = "Hello World, I am Developer!";
let lowercaseString = myownString.toLowerCase();
console.log(lowercaseString);

////////////////////////////////////////////////////////////////////

// Function to remove text
function removeTextfromsentence() {
    let originalText = 'Hi, I am Developer';
    // Replace method used to remove text
    let newText = originalText.replace('Developer', 'Designer');

    // output
    console.log(newText);
}

// Function called
removeTextfromsentence();



///////////////////////////////////////////////////////////////////

 
 // Function to reverse a string
function reversegivenString(str) {
    const strReverse =  str.split('').reverse().join('');
    console.log(strReverse);
}

// Function called 
reversegivenString("Generative AI");

//////////////////////////////////////////////////////////////////


//how to use quotes
let stringOne = "It's magic";
let stringTwo = "He is intelligent 'Guy'";
 
console.log(stringOne);
 
//how to add two strings
let txt1 = "Hello Raj,";
let txt2 = "How are you?";
let txt3 = txt1.concat(" ", txt2);

console.log(txt3);


//how to slice a string and give output, its very important to know how to slice as many people get confused
let txt4 = "Aparna, sagar, gaurav";
let txt5 = txt4.slice(0,13);
console.log(txt5);
