var a = "50";
var b = Number(a);
var c = 50;

if(a === c){
    console.log('Son iguales y del mismo tipo')
}

if(a == c){
    console.log('Son iguales pero diferentes tipos')
}

/*
for (var i = 0; i <= 10; i++){
    console.log(i);
}*/

/*for (let i = 0; i <= 10; i++){
    console.log(i);
}*/

var d = undefined;
var e;

console.log(typeof d === undefined); // false
console.log(typeof d === 'undefined'); // true
console.log(typeof d); // true
console.log(typeof e); // true

