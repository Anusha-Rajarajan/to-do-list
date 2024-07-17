


import ToDoList from "./todolist.js";

const todoList = new ToDoList();

// Get DOM elements
const addTaskForm = document.getElementById("addTaskForm");
const taskList = document.getElementById("taskList");
const filterSelect = document.getElementById("filterSelect");

// Event listeners
addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("taskDueDate").value;
  todoList.addTask(title, description, dueDate);
  renderTaskList();
  addTaskForm.reset();
});

filterSelect.addEventListener("change", () => {
  renderTaskList();
});

// Render the task list
function renderTaskList() {
  taskList.innerHTML = "";
  const tasksToDisplay = todoList.filterTasks(filterSelect.value);

  tasksToDisplay.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <input type="checkbox" id="task-${index}" ${task.isCompleted ? "checked" : ""}>
      <label for="task-${index}">${task.title}</label>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(taskItem);

    // Add event listeners for edit and delete buttons
    taskItem.querySelector(".edit-btn").addEventListener("click", () => {
      // Implement editing logic here
    });

    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
      todoList.deleteTask(index);
      renderTaskList();
    });

    // Add event listener for checkbox
    taskItem.querySelector("input[type='checkbox']").addEventListener("change", () => {
      todoList.toggleTaskCompletion(index);
      renderTaskList();
    });
  });
}

// Initial rendering
renderTaskList();