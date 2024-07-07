//16. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.


let arr=[3,8,2,5,4,10,7,6];

let sum= 0;

let max =arr[0];
let min= arr[0];
for(let i=0; i<arr.length; i++){
    if (arr[i]>=max){
        max=arr[i];
    }
    if (arr[i]<=min){
        min=arr[i];
    }
}
for(let i=0; i<arr.length; i++){
    if(arr[i]==max || arr[i]==min){
        continue;
    }
    sum+=arr[i];
}

console.log(sum);

