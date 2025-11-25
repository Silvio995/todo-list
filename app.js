// app.js
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#todo-list");

function addElement() {
  const userInput = input.value.trim();
  if (!userInput) return;

  const li = document.createElement("li");
  li.classList.add("todo-item");

   const completeBtn = document.createElement("button");
  completeBtn.classList.add("todo-complete");
  completeBtn.setAttribute("aria-label", "Mark task as completed");
  completeBtn.innerText = "✓";

  const span = document.createElement("span");
  span.classList.add("todo-text");
  span.innerText = userInput;

  const btn = document.createElement("button");
  btn.classList.add("todo-delete");
  btn.setAttribute("aria-label", "Elimina elemento");
  btn.innerText = "✕";

  li.append(completeBtn, span, btn);
  list.append(li);

  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addElement);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addElement();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.matches(".todo-delete")) {
    e.target.parentElement.remove();
    return;
  }

const item = e.target.closest(".todo-item");
  if (item) {
    item.classList.toggle("todo-completed");
  }
});