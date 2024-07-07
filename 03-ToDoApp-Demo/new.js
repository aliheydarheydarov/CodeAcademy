// console.log(window);


// console.log(window.document.body);

// const btn=document.querySelector(".btn");
// const np=document.querySelector(".np");

let x=0;
let classes=[];

const frm=document.querySelector(".frm");
const input=document.querySelector(".input");
const ToDoList=document.querySelector(".ToDoList");
const ToDoItem=document.querySelector(".ToDoItem");
const delDiv=document.querySelector(".delDiv");


//console.log(btn);

// btn.style.color="blue";
// btn.style.backgroundColor="green";
// btn.addEventListener("click", function (){
//    // console.log('hello');
//     console.log(np.value);
//     np.value="";

    

// })

// np.addEventListener("input", function(){
//     console.log(np.value);
// })
//ToDoItem.style.color="blue";

frm.addEventListener("submit", function(e){
    e.preventDefault();
    //console.log(input.value);
    //ToDoList.innerHTML+=`<li class='ToDoItem'>${input.value}</li>`;
    createLi();

    input.value=""

})

function createLi (){
    const li=document.createElement("li");
    li.className="ToDoItem";
    li.innerText=input.value;
    ToDoList.appendChild(li);
    const btn2=document.createElement("button");
    btn2.className="btn2";
    btn2.innerText="+";
    li.prepend(btn2);
    btn2.addEventListener("click", SelectItem);
    

}

function deleteElement(){
    let a;
    let x;
    console.log('hello');
    for(let i=0; i<classes.length; i++){
        a = document.querySelector(classes[i]);
    
        console.log(a);
        a.remove();
        classes.splice(i,1);
    }
    //deleteButton.remove();
}



function SelectItem (e){
    x+=1;
    const li=e.target.parentElement;
    li.className= 'w'+x;
    //console.log(li);
    classes.push('.' + li.className);
    //console.log(classes);
    e.target.style.color="blue";


    //console.log(document.querySelector('.w1'));
    //console.log(classes);
    let deleteButton = document.createElement("button");
deleteButton.className = "deleteButton"; 
deleteButton.innerText = "Delete";
if(classes.length==1){
delDiv.appendChild(deleteButton);
}
deleteButton.addEventListener("click", deleteElement);

}





// let deleteButton = document.createElement("button");
// deleteButton.className = "deleteButton"; 
// deleteButton.innerText = "Delete";
// delDiv.appendChild(deleteButton);

// deleteButton.addEventListener("click", function() {
//   console.log('helloworld');
// });