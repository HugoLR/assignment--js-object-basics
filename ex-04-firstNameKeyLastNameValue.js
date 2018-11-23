/**
 * firstNameKeyLastNameValue()
 *
 * Create a function that accepts 3 strings with first + last names as arguments
 * The function should return an object with 3 properties:
 * The first name will be a property-name and the last name will be the value
 *
 * EXAMPLE:
 * firstNameKeyLastNameValue("George Washington", "John Adams", "Kanye West")
 *   =>
 *   {
 *      George: "Washington",
 *      John: "Adams",
 *      Kanye: "West"
 *   }
 *
 * HINT: You may need to review `object bracket notation` to dynamically
 *       set an object's property name.
 *
*/


// ++ YOUR CODE HERE

function firstNameKeyLastNameValue(text1, text2, text3) {
  //crear nuestras arrays
  newArray1 = text1.split(" ");
  newArray2 = text2.split(" ");
  newArray3 = text3.split(" ");

  //creamos nuestro objeto
  var objectTwoNames = {};

  objectTwoNames[newArray1[0]] = newArray1[1];
  objectTwoNames[newArray2[0]] = newArray2[1];
  objectTwoNames[newArray3[0]] = newArray3[1];

  return objectTwoNames;
}



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-04');
  console.log('%cFunction: firstNameKeyLastNameValue', 'background-color: green; color: white')
console.groupEnd();


var greatMenObj = firstNameKeyLastNameValue("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = firstNameKeyLastNameValue("Rosa Parks", "Amelia Earhart", "Frida Kahlo")
var greatAthletesObj =  firstNameKeyLastNameValue("Cristiano Ronaldo", "Serena Williams", "Lebron James")


/* ----------------------- TEST-1  ----------------------- */
// Function returns an object
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert(typeof greatMenObj === "object")
console.assert(typeof greatWomenObj === "object")
console.assert(typeof greatAthletesObj === "object")


/* ----------------------- TEST-2  ----------------------- */
// Function accepts 3 first+last names strings arguments, separated by space
//   returns object with 3 properties
//      each property is first name,
//      and property's value as the last name
/* ------------------------------------------------------ */
console.log('\n');
console.log('TEST-2');

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")


/* ----------------------- TEST-3  ----------------------- */
// Function accepts 3 first+last names strings arguments, separated by space
//   returns object with 3 properties
//      each property is first name,
//      and property's value as the last name
/* ------------------------------------------------------ */
console.log('\n');
console.log('TEST-3');

console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Amelia === "Earhart")
console.assert(greatWomenObj.Frida === "Kahlo")


/* ----------------------- TEST-4  ----------------------- */
// Function takes object w/ `color` property with value of 'red'
//   returns object with `color` property with value of 'blue'
/* ------------------------------------------------------ */
console.log('\n');
console.log('TEST-4');

console.assert(greatAthletesObj.Serena === "Williams")
console.assert(greatAthletesObj['Lebron'] === "James")
console.assert(greatAthletesObj['Cristiano'] === "Ronaldo")
