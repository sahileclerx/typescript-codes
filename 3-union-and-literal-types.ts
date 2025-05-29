// Union Types & Literal Types

// Union Type - Variable
let value: number | string | boolean; // ← Add type here
value = 42;
value = "forty-two";
value = true;

// Union Type - Function Parameter
function display(id: number | string | boolean) : void {
  console.log("ID:", id);
}

display(101); 
display("101");   
display(true);

// Literal Types
let mode : 'manual' | 'off' | 'on'; // ← Add literal type here

mode = "manual";   
mode = "off";     
mode = "on";   

// Discriminated Literals
type Animal =
  | { kind: "cat"; livesLeft: number }
  | { kind: "dog"; isGoodBoy: boolean };

function handleAnimal(a: Animal) {
  if (a.kind === "cat") {
    console.log(a.livesLeft);
  } else {
    console.log(a.isGoodBoy);
  }
}

handleAnimal({ kind: "dog", isGoodBoy: true });

// Literal Types in Functions
function setLevel(level: "medium" | "extreme") {
  console.log("Level set to:", level);
}

setLevel("medium");
setLevel("extreme");

