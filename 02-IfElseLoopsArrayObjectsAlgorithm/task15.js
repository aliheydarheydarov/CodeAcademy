//15. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.



let arr=[3,8,2,5,4,10,7,6]

let a = 5;
let count=0;
for(let i=0; i<arr.length; i++){
    if (arr[i]==a){
        console.log(`${a} arrayin icherisindedir`);
        count+=1;
        break;
    }
}
if (count==0){
    console.log(`${a} arrayin icherisinde deyil`);
}