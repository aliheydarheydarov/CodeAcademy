//Students array-indən istifadə edərək aşağıdakı alqoritmləri funksiya ilə yazın


    
let student= [
    {name: 'qurban', surname: "qurbanzade", username:'qurban123',password:'qqq123', kesr: true},
    {name: 'qabil', surname: "qabilzade", username:'qabil2002',password:'1234', kesr: false},
    {name: 'reshad',surname: "reshadzade", username:'reshad33',password:'qwer', kesr: true},
    {name: 'togrul',surname: "togrulzade", username:'togrulll',password:'Salam123', kesr:false},
    {name: 'elvin', surname: "elvinzade", username:'elvinmzade',password:'password', kesr: true}
]

console.log("Bütün elementləri konsola yazın");

console.log(student);

console.log("\n");


console.log("Bütün tələbələrin adlarını konsola yazın - ad: Qurban");

for (let index = 0; index < student.length; index++) {
    console.log(student[index].name);
}

console.log("\n");



console.log("Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzadan");




for (let index = 0; index < student.length; index++) {
    console.log(student[index].name, student[index].surname);
}


console.log(" - Kəsri olan tələbələrin ad və soyadını çapa verin");

for (let index = 0; index < student.length; index++) {
    if(student[index].kesr==true){
    console.log(student[index].name, student[index].surname);
    }
}