import { useState } from "react";

const TodoCreate = ({ todoCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }
    todoCreate(title);
    return setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="rounded-md bg-white flex px-2 items-center shadow-2xl mb-6 dark:bg-gray-800 transition-all duration-700">
      <span className="inline-block rounded-full border-2 border-gray-300 px-3 py-3"></span>
      <input
        className="w-full py-4 px-2 focus:outline-none dark:text-white"
        type="text"
        placeholder="Create a new todo"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
