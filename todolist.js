

// todoList.js
import Task from "./task.js";

export default class ToDoList {
  constructor() {
    this.tasks = this.loadTasksFromLocalStorage();
  }

  addTask(title, description, dueDate) {
    const newTask = new Task(title, description, dueDate);
    this.tasks.push(newTask);
    this.saveTasksToLocalStorage();
  }

  editTask(index, updatedTask) {
    this.tasks[index] = updatedTask;
    this.saveTasksToLocalStorage();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.saveTasksToLocalStorage();
  }

  toggleTaskCompletion(index) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
    this.saveTasksToLocalStorage();
  }

  filterTasks(status) {
    if (status === "completed") {
      return this.tasks.filter(task => task.isCompleted);
    } else if (status === "incomplete") {
      return this.tasks.filter(task => !task.isCompleted);
    } else {
      return this.tasks;
    }
  }

  loadTasksFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      return storedTasks.map(taskData => new Task(
        taskData.title,
        taskData.description,
        taskData.dueDate,
        taskData.isCompleted
      ));
    } else {
      return [];
    }
  }

  saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}