/**
 * Task 1:
 * Create a function named `printName`
 * - Accepts a "name" parameter of type "string"
 * - that just prints (logs) that "name" on the screen
 */
function printName(name: string): void {
  // write your code here
  console.log(name);
}

/**
 * Task 2:
 * Create a function named `printAge`
 * - Accepts a "birthYear" parameter of type "number"
 * - and prints (logs) the age on the screen
 * - Age = current year - birth
 */
function printAge(birthYear: number): number {
  // write your code here
  const age: number = new Date().getFullYear() - birthYear;

  console.log(age);

  return age; // replace -1 to what you see is fit
}

// example:
printAge(2000); // => 2025 (2025 - 2000)

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters (name and language)
 * - Accepts a "name" parameter of type "string"
 * - Accepts a "language" parameter of type "LanguageType"
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

// don't make any changes to LanguageType
type LanguageType = "en" | "es" | "fr" | "tr";

function printHello(name: string, language: LanguageType): string {
  // write your code here
  let greeting: string;
  if (language.match("en")) {
    greeting = `Hello ${name}`;
  } else if (language.match("es")) {
    greeting = `Hola ${name}`;
  } else if (language.match("fr")) {
    greeting = `Bonjour ${name}`;
  } else if (language.match("tr")) {
    greeting = `Merhaba ${name}`;
  } else {
    greeting = "I dont know that language";
  }
  return greeting; // replace the empty string with what you see is fit
}

// example:
printHello("Aziz", "es"); // => "Hola Aziz"
printHello("Aziz", "fr"); // => "Bonjour Aziz"

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters (x and y)
 * - Accepts a "x" parameter of type "number"
 * - Accepts a "y" parameter of type "number"
 * - should print out the bigger number
 */
function printMax(x: number, y: number): number {
  // write your code here
  const greaterNum: number = Math.max(x, y);
  console.log(greaterNum);

  return greaterNum; // replace -1 to what you see is fit
}

// example:
printMax(4, 7); // => 7

// don't touch me bro!
export { printName, printAge, printHello, printMax, LanguageType };
