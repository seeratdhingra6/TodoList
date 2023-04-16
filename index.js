let listItem=document.getElementsByClassName('listitem')[0];
let toDoList=[];
function addToDo(){
    let item=document.getElementById('item').value;
    toDoList.push(item);
    renderToDo();
    }
    function removeTodo(){
        toDoList.pop(item);
        renderToDo();
    }
    function renderToDo(){
        let finalResult="";
       toDoList.forEach(item => {
        finalResult+=`<li>${item}</li>`;
        listItem.innerHTML=finalResult;
       });}
    
