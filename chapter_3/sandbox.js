let ninjas = ['shaun', 'ryu', 'chun-li'];

ninjas[1] = 'ken';

console.log(ninjas)

let ages = [20,25,30,35];

console.log(ages)

let random = ['shaun', 'crystal', 30, 20];

console.log(random);

console.log(ninjas.length);

let result = ninjas.join(' and ');

console.log(result);

let result2 = ninjas.indexOf('chun-li');

console.log(result2);

let result3 = ninjas.concat('ken', 'crystal');

console.log(result3);

let result4 = ninjas.push('ken');

console.log(result4)

let result5 = ninjas.pop()

console.log(result5)
console.log(result4)


//NULL

let age = null;

console.log(age, age + 3, `the age is ${age}`)

//booleans
console.log(true, false, 'true', 'false');

let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'tooad'];

let result6 = email.includes('@')

console.log(result6)

let result7 = names.includes('luigi')
console.log(result7)

let age2 = 25;

console.log(age2 == 25);
console.log(age2 == 30);
console.log(age2 != 30); // != means is "not equal"
console.log(age2 > 20);
console.log(age2 < 20);
console.log(age2 <= 25);
console.log(age2 >= 25);

let name2 = 'colin';

console.log(name2 == 'colin') //loose equality doesn't consider value type
console.log(name2 == 'Colin')
console.log(name2 > 'amanda')
console.log('Amanda' > 'amanda')  //java is alphabetical and looks for capital letters. 
