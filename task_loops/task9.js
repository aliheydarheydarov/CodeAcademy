
//9. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.


let arr=[3,8,2,5,4,10,7,6];
console.log("tek ededler arraydaki")
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==1){
        console.log(arr[i]);
    }
}
