//8. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.

let arr=[3,8,2,5,4,10,7,6];
console.log("tek ededlerin indeksi")
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==1){
        console.log(i);
    }
}