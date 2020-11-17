//Local Storage

// localStorage.setItem('todo', 'Feed the cat');

//Session Storage

// sessionStorage.setItem('todo', 'Feeding the dog');

// Getting things back
const todoList = ['feed the cat', 'wash', 'listen'];

localStorage.setItem("todos", JSON.stringify(todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);