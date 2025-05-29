// Variable Anotation
let userName: string = "Alice";
let userAge: number = 30;
let isLoggedIn: boolean = true;

// Function Anotation
function multiply(x: number, y: number) {
  return x * y;
}

function multiplyVoid(x: number, y: number): void {
    // void Anotation means function does'nt return anything
  console.log( x * y);
}

// Object Anotation
let user: {id: number, name: string, isAdmin: boolean} = {
  id: 1,
  name: "John",
  isAdmin: false,
};

// Array Anotation
let scores: number[] = [85, 90, 78];
let mixedArray: (string | number | boolean)[] = [
  "Alice",
  42,
  true,
  "Bob",
  false,
  99,
];

// Union Type
let identifier: string | number;
identifier = "abc123";
identifier = 1001;

// Literal & Optional Types
let theme: 'dark' | 'light'; // should only accept "light" or "dark"

let settings: {font?: string } = {
  font: "Arial",
  // fontSize may or may not be provided
};
