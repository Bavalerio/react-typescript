import './App.css';

import React, { useState } from 'react';

import NewTodo from './components/new-todo';
import { Todo } from './models/todo-model';
import TodoList from './components/todo-list';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
