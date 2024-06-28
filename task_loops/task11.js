//11. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.


let arr=[3,8,2,5,4,10,7,6];
let max;
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        max= arr[i];
    break;
    }
}


for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){   
    if (arr[i]>=max){
        max=arr[i];
    }
}
}

console.log('the max even element: ',max);