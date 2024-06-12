const flowers = new Set(["Tulip","Rose","mogra", "hibiscus"]); 
console.log("The set has " + flowers.size + " numbers.");   //getting numbers of values present in setInterval.

//------------------------------------------------------------------------------


// Create a Set by using first creating variables and then add values to the sets
const flowers1 = new Set();

// Create Variables and declaring 
const a = "Daisy";
const b = "Lily";
const c = "Marigold";
const d = "Orchid";
const e = "Daffodil";
const f = "Iris";

// Add Values as Variables flowers to the Set
flowers1.add(a);
flowers1.add(b);
flowers1.add(c);
flowers1.add(d);
flowers1.add(e);
flowers1.add(f);

// Display the Size of the sets 
console.log( "The set has " + flowers1.size + " values.");