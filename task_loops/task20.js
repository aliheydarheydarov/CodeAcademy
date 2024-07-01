//20. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın


let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4];

let count;
for(let i=0; i<arr.length; i++){
    x= typeof arr[i];
    if(x=='string'){
        count=0;
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j]==arr[i][j].toUpperCase()){
                count+=1;
            }
        }
        if (count==2){
            console.log(arr[i]);
        }
    }
}