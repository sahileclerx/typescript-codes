// Type Composition (Intersection & Extension)

// Intersection Type
type HasName = { name: string };
type HasAge = { age: number };
type Person = HasAge & HasName;
let user : Person = {name: 'Sahil', age: 29};

// Interface Extension
interface Vehicle {type: string};
interface Car extends Vehicle {drive(): void}
let Car : Car = {
    type: 'sports',
    drive: () => console.log('speed'),
}

Car.drive();

// Type Alias with Function
type Logger = {log(msg: string): void}
type DebugLogger = Logger & {debugLevel: number}
