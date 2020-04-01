function newFunction(name, age, country) {
    var name = name || 'danelia';
    var age = age || 'danelia';
    var country = country || 'danelia';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'danelia', age = 33, country = "MX") {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', 23, 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "lorem ipsum. Commodi. Ipsum vel duis yet \n" + "otra frase espica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Danelia',
    'age': 33,
    'country': 'MX'
}

console.log(person.name, person.age);

let { name } = person;
console.log(name);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = "Global Var";
} 

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);

let name = 'Danelia';
let age = 33;

//es5
obj = { name: name, age: age};
//es6
obj2 = { name, age };
console.log(obj2);

const names = [
    { name: 'Oscar', age: 33 },
    { name: 'Yesica', age: 27}
]

let listOfNames = names.map(function(item) {
    console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames = (names, age, countri) => {
    //codigo
}

const listOfNames4 = name => {
    // codigo
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './module';

hello();

function* helloWorld() { //generators
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

console.log(generatorHello.next().value);