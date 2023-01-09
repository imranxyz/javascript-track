/*
* 3 Important pillars of JavaScript =>
    1) Types / Coercion
    2) Closures / Scope
    3) this / Prototypes

* Loops ==> repeating something over and over again
* decisions ==> whether or not to do something or do something else
* statement ==> It's a complete line of code that performs some action
* Expression ==> it's like a phrase in a sentence. it is combination of values and operators, which always evaluates a single value
* values ==> 45, "hello world", true
* variables ==> it is a container where we can put value
* operators ==> it's like 45 + 1
* functions ==> a group of code that return value & can call as many times as want
*/

document.write('Hello, World')

document.write('<br>')
let teacher = 'Kyle Simpson'
let twitterHandle = 'getify'
let age = 39

// function definition
function whoAmI(name, nickname, age){
    document.write(`Hi, I'm ${name}(aka ${nickname}) and I'm ${age} years old`)
}

// invoke the function
whoAmI(teacher, twitterHandle, age)

let names = ['Jim', 'Alina', 'Jenny', 'Sarah', 'Ruba']
for (let name of names){
    console.log(`Hello ${name}`)
}
