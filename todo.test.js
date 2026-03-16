const TodoList = require('./todo');

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  // tests pour addTodo
  test('should add a new todo', () => {
    const todo = todoList.addTodo('Acheter du pain');
    expect(todo.title).toBe('Acheter du pain');
    expect(todo.completed).toBe(false);
    expect(todoList.getTodos()).toHaveLength(1);
  });

  test('should throw error on empty title', () => {
    expect(() => todoList.addTodo('')).toThrow('Title cannot be empty');
  });

  test('should throw error on whitespace-only title', () => {
    expect(() => todoList.addTodo('   ')).toThrow('Title cannot be empty');
  });

  // tests pour completeTodo
  test('should complete a todo', () => {
    const todo = todoList.addTodo('Faire les courses');
    todoList.completeTodo(todo.id);
    expect(todo.completed).toBe(true);
  });

  test('should throw error when completing non-existent todo', () => {
    expect(() => todoList.completeTodo(999)).toThrow('Todo not found');
  });

  // tests pour deleteTodo
  test('should delete a todo', () => {
    const todo = todoList.addTodo('Appeler Marie');
    todoList.deleteTodo(todo.id);
    expect(todoList.getTodos()).toHaveLength(0);
  });

  test('should throw error when deleting non-existent todo', () => {
    expect(() => todoList.deleteTodo(999)).toThrow('Todo not found');
  });

  // tests pour updateTodo 
  test('should update the title of a todo', () => {
    const todo = todoList.addTodo('Ancien titre');
    const updated = todoList.updateTodo(todo.id, 'Nouveau titre');
    expect(updated.title).toBe('Nouveau titre');
  });

  test('should throw error when updating with empty title', () => {
    const todo = todoList.addTodo('Un titre');
    expect(() => todoList.updateTodo(todo.id, '')).toThrow('Title cannot be empty');
  });

  test('should throw error when updating non-existent todo', () => {
    expect(() => todoList.updateTodo(999, 'Titre')).toThrow('Todo not found');
  });

  // tests pour getCompletedTodos
  test('should return only completed todos', () => {
    const t1 = todoList.addTodo('Tâche 1');
    todoList.addTodo('Tâche 2');
    todoList.completeTodo(t1.id);
    const completed = todoList.getCompletedTodos();
    expect(completed).toHaveLength(1);
    expect(completed[0].title).toBe('Tâche 1');
  });

  test('should return empty array if no completed todos', () => {
    todoList.addTodo('Tâche 1');
    expect(todoList.getCompletedTodos()).toHaveLength(0);
  });
});