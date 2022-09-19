const addBtn = document.querySelector("#todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter new todo");
  }
});
