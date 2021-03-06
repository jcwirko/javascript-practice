const person = {
    name: 'juan',
    lastname: 'blariza',
    saludo() {
        console.log('Hola ' + this.name);
    }
};

const hobbies = ['sport', 'cooking'];

//DESTRUCTURING
const [hobby1] = hobbies;

console.log(hobby1);

//SPREAD OPERATOR
const copiedHobbies = [...hobbies];

const hobbyesTransformed = hobbies.map(hobby => 'Hobby ' + hobby);

copiedHobbies.push('PHP');

//console.log(hobbies);

//REST OPERATOR
const func = (...args) => {
   console.log(args);
};

console.log(func(1,2,4,5,6));

