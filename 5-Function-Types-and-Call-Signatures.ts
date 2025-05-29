// Function Types & Call Signatures

// Basic Function Type

let adder = (a: number, b: number) : number => { return a + b}
console.log(adder(2, 3));

// Function Type Alias
type StringFormatter = (str : string) => string;
const upperCase : StringFormatter = (str) => str.toUpperCase()
console.log(upperCase('sahil'))

// Function in Interface
interface Notifier{
    notify(message: string): void
}
const consoleNotifier : Notifier = {
    notify: (m) => console.log(m),
} 
consoleNotifier.notify('Hi')


// Optional Parameter
function greet(name: string, title?: string): void{
 title ? console.log(`Hello, ${title} ${name}`) : console.log(`Hello, ${name}`)
}
greet('sahil', 'mr.');
greet('alfiya')

// Never Return Type
function fail(e: string) : never{
    throw new Error(e);
}

fail('Function Not Found')
