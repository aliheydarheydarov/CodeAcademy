//19. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.


let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4];


let max_length=0;

let ind;

for(let i=0; i<arr.length; i++){
    x= typeof arr[i];
    if(x=='string'){
        if (arr[i]==arr[i].toUpperCase()){
            console.log("index:", i);
            console.log(arr[i]);

        }
    }
}

