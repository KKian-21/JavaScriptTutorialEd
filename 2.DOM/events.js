const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-List");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title")

const items = todoList.children;


// // Click, Scroll, Resizing the browser


// // Attach a Event Listener
button.addEventListener("click",function(){
const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = `Item ${items.length + 1}`;
todoList.appendChild(newItem);
todoNr.innerText = items.length;
    
});

// Click Event with CSS Animations

// button.addEventListener("click", function(){
//     mainTitle.classList.toggle("special");
// });

// Keyboard Event with CSS Animations for clicking the Keyboard
// button.addEventListener("keydown", function(event){
//     console.log(event);
//     mainTitle.classList.toggle("special");
//     });