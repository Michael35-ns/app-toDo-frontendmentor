import Header from "./components/Header";
import TodoClear from "./components/TodoClear";
import TodoCreate from "./components/TodoCreate";
import TodoFilters from "./components/TodoFilters";
import TodoItemsLeft from "./components/TodoItemsLeft";
import TodoList from "./components/TodoList";
import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoCreate = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const todoRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const todoItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const changeFilter = (filter) => setFilter(filter);

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTask) => reorder(prevTask, source.index, destination.index));
  };

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-2xl mt-[-7rem] px-4 ">
        <TodoCreate todoCreate={todoCreate} />
        <main className="bg-white shadow-2xl rounded-md border-gray-800 dark:bg-gray-800 transition-all duration-700">
          <DragDropContext onDragEnd={handleDragEnd}>
            <TodoList
              todos={filteredTodos()}
              todoRemove={todoRemove}
              todoUpdate={todoUpdate}
            />
          </DragDropContext>
          <div className="flex justify-between p-4 align items-center">
            <TodoItemsLeft todoItemsLeft={todoItemsLeft} />
            <TodoFilters changeFilter={changeFilter} filter={filter} />
            <TodoClear clearCompleted={clearCompleted} />
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
