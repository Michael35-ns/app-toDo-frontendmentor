import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex h-14 border-b p-3 border-gray-300 w-full py-2 items-center">
          <TodoItem todo={todo} />
        </div>
      ))}
    </>
  );
};

export default TodoList;
