let task = document.getElementById("task");
let add=document.getElementById("add");
add.addEventListener("click",()=>{
    addTask();
})
let todo_container = document.getElementById("todo_container") 
// function addTask(){
//     let value1 = task.value.trim();
//     if (!value1){
//         return alert('Please Enter Your Task Before Clicking ADD')
//     }
//     let itemslist = document.createElement("div")
//     itemslist.id="itemslist1" 
//     let item = document.createElement("p")
//     item.innerText=value1;
//     let btns = document.createElement("div")
//     btns.innerHTML=`<button id="edit">Edit</button>
//         <button id="delete">Delete</button>`
//         itemslist.append(item)
//         itemslist.append(btns)
//         todo_container.append(itemslist)
//         task.value=""
//         let dltbtn = itemslist.querySelector("#delete");
// dltbtn.addEventListener("click", () => {
//     itemslist.remove();
// }); }
window.addEventListener("DOMContentLoaded",(value1)=>{
    let allTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
    allTasks.forEach(value1 => {
        let itemslist = document.createElement("div")
    itemslist.id="itemslist" 
    let item = document.createElement("p")
    item.innerText=value1;
    let btns = document.createElement("div")
    btns.id="btns"
    let EditBtn = document.createElement("button");
    EditBtn.innerText="Edit";
    let dltBtn = document.createElement("button")
    dltBtn.innerText="Delete";
    task.value=""
    btns.append(EditBtn,dltBtn)
    itemslist.append(item,btns)
    todo_container.append(itemslist)
    dltBtn.addEventListener("click",()=>{
        let decision = confirm("Are sure you want to delte the task");
        if(decision){
            itemslist.remove();
            let deleteTask = JSON.parse(localStorage.getItem("allTasks")) || [];
            deleteTask = deleteTask.filter((x)=> x!== value1);
            localStorage.setItem("allTasks",JSON.stringify(deleteTask));
        }
    })
    EditBtn.addEventListener("click",()=>{
        let chngTask = prompt("Change the Task")
        if(chngTask.trim()!==null && chngTask.trim()!==""){
        item.innerText=chngTask;
        alert('temporarily changed we are working on permanent change as well soon it gets completed');
    } })
})
    });
   
function addTask(){
    let value1 = task.value.trim();
    if (!value1){
        return alert('Please Enter Your Task Before Clicking ADD')
    }
    let itemslist = document.createElement("div")
    itemslist.id="itemslist" 
    let item = document.createElement("p")
    item.innerText=value1;
    let btns = document.createElement("div")
    btns.id="btns"
    let EditBtn = document.createElement("button");
    EditBtn.innerText="Edit";
    let dltBtn = document.createElement("button")
    dltBtn.innerText="Delete";
    task.value=""
    btns.append(EditBtn,dltBtn)
    itemslist.append(item,btns)
    todo_container.append(itemslist)
    let allTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
    allTasks.push(value1)
    localStorage.setItem("allTasks",JSON.stringify(allTasks));
    dltBtn.addEventListener("click",()=>{
        let decision = confirm("Are sure you want to delte the task");
        if(decision){
            itemslist.remove();
        }
    })
    EditBtn.addEventListener("click",()=>{
        let chngTask = prompt("Change the Task")
        if(chngTask.trim()!==null && chngTask.trim()!==""){
        item.innerText=chngTask;
        alert('temporarily changed we are working on permanent change as well soon it gets completed');
    } })
}