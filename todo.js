class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(title) {
    if (!title || title.trim() === '') {
      throw new Error('Title cannot be empty');
    }
    const todo = {
      id: this.todos.length + 1,
      title: title.trim(),
      completed: false
    };
    this.todos.push(todo);
    return todo;
  }

  getTodos() {
    return this.todos;
  }

  completeTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    todo.completed = true;
    return todo;
  }

  deleteTodo(id) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error('Todo not found');
    }
    return this.todos.splice(index, 1)[0];
  }

  updateTodo(id, newTitle) {
    if (!newTitle || newTitle.trim() === '') {
      throw new Error('Title cannot be empty');
    }
    const todo = this.todos.find(t => t.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    todo.title = newTitle.trim();
    return todo;
  }

  getCompletedTodos() {
    return this.todos.filter(t => t.completed === true);
  }
}

module.exports = TodoList;