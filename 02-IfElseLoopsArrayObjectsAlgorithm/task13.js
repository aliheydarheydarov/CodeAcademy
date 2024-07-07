//13. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin


let arr=[3,8,2,5,4,10,7,6]
let min =arr[0];
let min_index=0;
let max=arr[0];
let max_index=0;

for(let i=0; i<arr.length; i++){
    if (arr[i]>=max){
        max=arr[i];
        max_index=i;
    }
    if (arr[i]<=min){
        min=arr[i];
        min_index=i;
    }
}
console.log('before');

console.log(arr);
let x;
x=max;
arr[max_index]=min;
arr[min_index]=x;


console.log('after');

console.log(arr);
