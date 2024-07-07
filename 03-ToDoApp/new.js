// console.log(window);


// console.log(window.document.body);

// const btn=document.querySelector(".btn");
// const np=document.querySelector(".np");
const frm=document.querySelector(".frm");
const input=document.querySelector(".input");
const ToDoList=document.querySelector(".ToDoList");
const ToDoItem=document.querySelector(".ToDoItem");


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
    if (input.value!=''){
    const li=document.createElement("li");
    li.className="ToDoItem";
    li.innerText=input.value;
    ToDoList.appendChild(li);
    const btn2=document.createElement("button");
    btn2.className="btn2";
    btn2.innerText="X";
    li.prepend(btn2);
    btn2.addEventListener("click", RemoveButton)
    }
}



function RemoveButton (b){
    console.log(b.target.innerText);

    b.target.parentElement.remove();

}