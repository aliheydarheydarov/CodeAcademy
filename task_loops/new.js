let i = 0;

while(i<10){
    console.log(i);
    i++;
}

let arr =[6,5,4,1,2,3,4,5,6,7,8];

arr.push('gurban');

arr.unshift('qabil');
arr.shift();
arr.pop();
console.log(arr);

arr2= ["baku", 'london', 'beyleqan', 'newyork']




for(let i= 0; i< arr2.length; i++){
    if(arr2[i][0]=='b'){
    console.log(arr2[i]);
    }

}



let obj = {
    name: 'gurban', password : '1234'
};

console.log(obj.name);
console.log(obj.age);


let db = [
    {
        username: 'gurban',
        password: '123'
    },
    {
        username: 'gurban',
        password: '123'
    },
    {
        username: 'gurban',
        password: '123'
    },
    {
        username: 'gurban',
        password: '123'
    },
    {
        username: 'gurban',
        password: '123'
    },
    {
        username: 'gurban',
        password: '123'
    }
]

console.log(db[0].username[0]);



