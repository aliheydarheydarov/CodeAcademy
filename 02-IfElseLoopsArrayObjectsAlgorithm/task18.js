//18. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın


let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4];

let max_length=0;
let the_longest;
for(let i=0; i<arr.length; i++){
    x= typeof arr[i];
    if(x=='string'){
        if (arr[i].length>=max_length){
            max_length=arr[i].length;
            the_longest=i;
        
        }
    }
}
console.log(arr[the_longest]);

