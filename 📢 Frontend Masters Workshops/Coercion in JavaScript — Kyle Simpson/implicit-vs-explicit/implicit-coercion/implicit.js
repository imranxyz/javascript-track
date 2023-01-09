// happens as a side effect of some other operation

var foo = '123'
// it's first convert foo to number and then multiply it with 5
// *, /, -, % is only use for math operation [Implicit coercion happened here]
var baz = foo * 5
console.log(baz) // 615
console.log(foo - 10) // 113
console.log(foo / 5) // 24.6
console.log(foo  % 5) // 3
console.log(foo + 5) // 1235 [string + number = string]

// same things is happing here
console.log(125 - "0") // 125
console.log(125 * "5") // 625

console.log(625 - "") // 625 ["" means 0]
console.log(foo - "1") // 122 [Implicit coercion string to number]

baz = 456
console.log(baz + "") // "456"

// Boolean implicit coercion
var foo = "123"
if (foo){ // true [foo is truthy value]
   console.log('Sure!') // Sure!
}

foo = 0
if (foo){ // foo is falsy, so code wouldn't run
    console.log('Right!!') // not run
}

if (foo == false){ // first false convert into 0 and then compare
    console.log('Yeah!!') // Yeah!!
}

// don't use == for evaluate true or false, it's worse line 

var baz = foo || 'foo'
console.log(baz) // 'foo'

var a = "123"

// a => it checks first truthy/falsy but it doesn't return true/false, returned value itself
var b = a || "456" 
b = a ? a : "456" // more accurate way
console.log(b) // "123"

var c = a && "456"
console.log(c) // "456"
c = a ? a : '456' // more accurate