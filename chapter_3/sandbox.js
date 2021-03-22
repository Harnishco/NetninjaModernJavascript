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

while(c < 1000){
    console.log('in loop: ', c);
    c++;
}