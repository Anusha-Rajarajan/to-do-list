export default class Task {
    constructor(title, description, dueDate, isCompleted = false) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.isCompleted = isCompleted;
    }
  }