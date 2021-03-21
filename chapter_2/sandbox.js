// strings '' or "" do the same thing

console.log('helloworld')

let email = 'h.c@gmail.com'

console.log(email)

//string concatenation
let firstName = 'Colin';
let lastName = 'Harnish';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

//getting characters
console.log(fullName[0])  //square brackets let you choose character which char you want 0 = the first

// string length

console.log(fullName.length) // .length tells you the length of the object

//string methods //these do not actually alter the original data

console.log(fullName.toUpperCase()); //the empty () brackets make the things actually happen
let result = fullName.toLowerCase();
console.log(result) 

let index = email.indexOf('@')
console.log(index) // 3 is 4 because js is 0 based

// common string methods

   //let email = 'h.c@gmail.com';

    //let emailResult = email.slice(0,5)


    //let emailResult = email.lastIndexOf('g');
    //let emailResult = email.substr(2,5)  //retreives amount of characters

let emailResult = email.replace('g', 'b') //only replaces the first instance of the letter

console.log(emailResult)

//numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi)

//math operators +, -, *, /, **, %

console.log(10 / 2)
let result2 = radius % 3; //took radius which is 10 divides it by 3 and gave us the remainder which was 1

console.log(result2)

let result3 = pi * radius**2;

console.log(result3)

//order of operation B I D M A S
/*brackets indesis** division multiplications addition subtraction*/

let result4 = 5 * (10-3)**2;

console.log(result4)

let likes = 10;

likes++
likes-=5
likes /= 2;


console.log(likes)

//NaN - not a number

//console.log(5 / 'hello')

let result5 = 'the blog has ' + likes + ' likes'

console.log(result5);

// template strings

const title = 'best reads of 2019';
const author = 'mario';
const likes2 = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + 'likes';
//console.log(result)

//template string way
let result6 = `The blog called ${title} by ${author} has ${likes2} likes`

console.log(result6)


//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);
