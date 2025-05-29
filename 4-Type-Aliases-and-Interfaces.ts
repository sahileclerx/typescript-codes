// Type Aliases & Interfaces

// Type Alias - Union
type Status= "success" | "error" | "loading" | "failed";
let responseStatus: Status;

responseStatus = "success"; 
responseStatus = "failed"; 

// Type Alias - Object
type User = {username: string, age: number, isActive: boolean}
let users : User = {username: 'sahil', age: 23, isActive: true}

// Interface
interface Product {name: string, price: number, inStock: boolean}
function printProduct(product: Product){
    console.log(product.name, product.price, product.inStock)
}
printProduct({name: 'Pant', price: 200, inStock: true});

// Extend Interface
interface Person {name: string, age: number}
interface Employee extends Person {department: string};
let employee : Employee = {name: 'sahil', age: 30, department: 'marketing'}
