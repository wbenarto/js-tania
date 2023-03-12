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