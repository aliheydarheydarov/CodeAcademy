

//17. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin

let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

for(let i=0; i<arr.length; i++){
    x=typeof arr[i];
    if(x=='boolean'){
        console.log(arr[i-1], arr[i+1]);
    }
}


let car= {
    name: 'ali',
    surname: 'heydar'
}

let car1= {
    name: 'ali',
    surname: 'heydar'
}

if(car1==car){
    console.log(true);
}