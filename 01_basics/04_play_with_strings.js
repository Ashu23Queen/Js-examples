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