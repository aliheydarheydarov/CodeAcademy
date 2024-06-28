//14. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin


let arr=[3,8,2,5,4,10,7,6]
let min_even;
let max_odd;

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        min_even= arr[i];
    }
    if(arr[i]%2==1){
        max_odd= arr[i];
    }
}

console.log(min_even, max_odd);


for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){   
    if (arr[i]<=min_even){
        min_even=arr[i];
        min_even_index=i;
    }
}
    if(arr[i]%2==1){   
        if (arr[i]>=max_odd){
            max_odd=arr[i];
            max_odd_index=i;
        }

}
}

console.log("Before:");
console.log(arr);

let x;
x=max_odd;
arr[max_odd_index]=min_even;
arr[min_even_index]=x;
console.log("After:");
console.log(arr);