import Header from "./components/Header";
import TodoClear from "./components/TodoClear";
import TodoCreate from "./components/TodoCreate";
import TodoFilters from "./components/TodoFilters";
import TodoItemsLeft from "./components/TodoItemsLeft";
import TodoList from "./components/TodoList";
import { useState } from "react";
const initialStateTodos = [
  {
    id: 1,
    title: "Complete online JavaScript course",
    completed: false,
  },
  {
    id: 2,
    title: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    title: "Read for 1 hour",
    completed: false,
  },
  {
    id: 5,
    title: "Pick up groceries",
    completed: false,
  },
  {
    id: 6,
    title: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const todoCreate = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-2xl mt-[-7rem] px-4">
        <TodoCreate todoCreate={todoCreate} />
        <main className="bg-white shadow-2xl rounded-md  border-gray-800">
          <TodoList todos={todos} />
          <div className="flex justify-between p-4">
            <TodoItemsLeft />
            <TodoFilters />
            <TodoClear />
          </div>
        </main>
        <div className="flex justify-center py-16">
          <p className="text-gray-400">Drag and drop to reorder list</p>
        </div>
      </div>
    </>
  );
};

export default App;
