console.log("hello friend")

// for loops

for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}

console.log('loop finish')

const names = ['shaun', 'mario', 'luigi'];

for(let b = 0; b < names.length; b++){
    console.log(names[b]);
    let html = `<div>${names[b]}</div>`
    console.log(html)
}


let c = 0;

while(c < 10){
    console.log('in loop: ', c);
    c++;
}

let d = 0;
while(d < names.length){
    console.log(names[d])
    d++;
}

let e = 5;
do{
    console.log('val of e is: ', e);
    e++;
}
while(e < 5)

// if statements

const age = 25;

if(age > 20){
    console.log('you are over 20 years old')
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3){
    console.log("that's a lot of ninjas")
}

// logical operators - OR || and AND &&

const password = 'pass@word12345678';

if(password.length >= 12 && password.includes("@")){
    console.log('that password is very strong')
} else if(password.length >= 8 || password.includes("#","!")&& password.length > 5){
    console.log('that password is long enough but does not contain the correct symbols')
} else{ //else is for when the opposite of if happens
    console.log('password is not long enough')
} 

//logical NOT (!)

let user = false;

if(!user){
    console.log("Wrong Username");
}

console.log(!true)
console.log(!false)

//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for(let i = 0; scores.length; i++){
    
    if(scores[i] === 0){
        continue;
    }
        

    console.log('your score: ', scores[i])

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;

    }
    
}

// switch statements
const grade = 'D'

switch(grade){
    case 'A':
        console.log('you got and a')
        break;
    case 'B':
        console.log('you got and B')
        break;
    case 'C':
        console.log('you got and C')    
        break;
    case 'D':
        console.log('you got and D')
        break;
    case 'E':
        console.log('you got and E')
        break;
    default:
        console.log('Not a valid grade')    
}

//variables & block scope

let ages1 = 41;

if(true){
    let ages1 = 23;
    let name = 'colin'
    console.log('inside 1st code block: ', ages1, name);
}

if(true){
    let ages1 = 50;
    console.log('inside 2nd code block', ages1)
    var test = 'hello'
}

console.log('outside code block; ', ages1);



