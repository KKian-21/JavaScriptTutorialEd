const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const items = todoList.children();


// Click, Scroll, Resizing the browser


// Attach a Event Listener
button.addEventListener("click",function(){
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = "Item 3";
    todoList.appendChild(newItem);
});