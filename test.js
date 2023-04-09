function greeting() {
    console.log('hello world')
}

greeting();

function morning(myVar) {
    console.log('Good morning, '+myVar)
}

morning('Joe Mama');

const myName="Denis"

const nameMy="William"

morning(myName);
morning(nameMy);

function school(firstName, lastName) {
    console.log('Welcome to my school, '+firstName, lastName)
}

school('Denis', 'Denis');

const firstName="Ong"

const lastName="Hong"

school(firstName, lastName);

function equation(a, b) {
    console.log(a + b)
    return a + b
}

equation(12, 8);
console.log(equation(8.534, 23.56478))

const fruits = ["apple", "banana", "strawberry", "raspberry", "blueberry", "mango"];
console.log(fruits)
fruits[0] = "pineapple";
console.log(fruits)

function topFruits(fruits) {
    for (let i = 2; i <= fruits.length-1; i++) {
        console.log('Here is my top ', i+1, 'fruit', fruits[i])
    }
    console.log('Here are my top favorite fruits...', fruits)
}

topFruits(fruits);
console.log(fruits.length)

function reverseFruits(fruits) {
    for (let i = fruits.length-1; i >= 0; i-=2) {
        console.log(fruits[i])
    }
}

reverseFruits(fruits);

fruits.push("pear", "dragonfruit")
console.log(fruits)

fruits.pop()
console.log(fruits)
console.log(fruits)

function add(a) {
    if (fruits.includes(a)) {
        console.log("fruit is already in the array")
    }
    else fruits.push(a);
    console.log(fruits)
}
add("kiwi")
add("jackfruit")
add("kiwi")


// ES6 Javascript
// Arrow Function

// const = constant variable, immutable 
// let = mutable variables
// var = old way of creating variables

// const array = [] // an array
// const addNum = () => {} // es6
// function addNum() {} // old way

const addNum = (a,b) => {
    console.log("New Arrow Function is soooo kewwlllll!!!")
    return a + b
}

console.log(addNum(10, 20))

console.log(fruits.filter((e)=>e == "banana")) // returns whatever the function inside returning true

fruits.map(e=> {
    console.log("my fave fruit " + e)
    console.log('im testing hereeee')
})

for (let i=fruits.length; i>=0; i--) {
    
    console.log("my fave fruit " + fruits[i])
    console.log('im testing hereeee FOR LOOP THE OLD WAYYYYYYYYYY')
}

const subtractNum = (a, b) => {
    console.log(a - b, "this console runs inside of the function")
    return a - b
}

console.log(subtractNum(5, 4))

fruits.map(e=> {
    console.log("my fave fruit " + e)
    console.log("im testing hereeee i'm tania")
})

