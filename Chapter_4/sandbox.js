//function declaration
/* 
function greet(){
    console.log('hello there'); */
/* } */

//function expression

/* const speak = function(){
    console.log('good day')
}; */

/* greet();
greet();
greet();

 */
/* speak();
speak();
speak(); */

// arguments % parameters

/* const speak = function(name, time){
    console.log(`good ${time} ${name}`);
};

speak ('mario', 'morning')

const speak = function(name, time){
    console.log(`good ${time} ${name}`);
};

speak ('mario', 'morning')

 */

/* const calcArea = function(radius){
    return 3.14 * radius**2
}



console.log(area)

const calcVol = function(area){

} */

// arrow function

/* const calcArea = (radius) => {
    return 3.14 * radius **2;
}

const area = calcArea(5)
console.log('area is:', area)





const calcgrowth = (growth, invested) => growth * invested + invested;


const number1= calcgrowth(.05, 100) 


console.log("Your return is;" number1 ); */




/* const calcArea = radius =>  3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area); */

/* const greet = function(){
    return 'hello, world';
} */




const greet = () => 'hello,world'
const result = greet();
console.log(result);

const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}