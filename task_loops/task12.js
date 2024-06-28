//12. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.


let arr=[3,8,2,5,4,10,7,6];
let min =arr[0];
let min_index=0;
for(let i=0; i<arr.length; i++){
    if (arr[i]<=min){
        min=arr[i];
        min_index=i;
    }
}
console.log("the min element:" ,min);
console.log("the min element's index:" ,min_index);

