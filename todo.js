/*
  *Title: To do Application using vanilla js DOM
  *Description: This js file has all the functions necessary to control the to do application.
  *Js learn by sumit vai.  
*/

let newTask=document.querySelector('#new_task');
let form=document.querySelector('form');
let todoUl=document.querySelector('#items_new');
let completeUl=document.querySelector('.complete_list');

//Function------------------------

let createTask=function(task){
  
    let  listItem=document.createElement('li');
    let  checkBox=document.createElement('input');
    let  label=document.createElement('label');

    label.innerText=task;
    checkBox.type='checkbox';
    
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask=function(event){
    event.preventDefault();
    let listItem=createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value="";

    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function() {
    
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'btn btn-danger btn-sm ml-5 delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');

    checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}


for(let i=0; i< todoUl.children.length; i++ ) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}

for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}


form.addEventListener('submit',addTask);
