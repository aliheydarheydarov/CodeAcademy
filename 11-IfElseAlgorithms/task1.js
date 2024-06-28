let a = 5;
let b= 10;
let c= 16;

let ab = a+b;
let ac= a+c;
let cb = c+b;


if (ab>=ac && ab>= cb){
    console.log(`Big sum result ${a} and ${b}`);
}
else if (ac>=ab && ac>= cb){
    console.log(`Big sum result ${a} and ${c}`);
    
}
else if (cb>=ab && cb>= ac){
    console.log(`Big sum result ${c} and ${b}`);
    
}


// var reqemDiv = document.querySelector('.task1');

// // Create an h1 element
// var h1 = document.createElement('h1');

// // Set the text content of the h1 element to the variable
// h1.textContent = cem;

// // Append the h1


// element to the div
// reqemDiv.appendChild(h1);