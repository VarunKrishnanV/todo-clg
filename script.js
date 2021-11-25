
"use strict"
// Selecting elements
let input = document.querySelector(".input");
let btnAdd = document.querySelector(".btn-add");
let todoContainer = document.querySelector(".todo-container");
let todoItem = document.querySelector(".todoItem");

// Initializing
let todoData = [];

function loadData(){
    todoData = localStorage.getItem(JSON.parse("todos"))
}
loadData()

function addItem(){
    if(input.value !== ""){
        let todoInput = input.value
        todoData.push(todoInput);
        let todo =  document.createElement("div")
        todo.innerHTML = `${todoInput}`
        todoContainer.insertAdjacentElement("beforeend", todo)
        input.value = "";

        localStorage.setItem("todos", JSON.stringify({"todo" : todoData}))
        console.log(todo);
    }
}

btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    addItem();
})

document.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        addItem()
    }
})

let localData = JSON.parse(localStorage.getItem("todos"))
console.log(localData);