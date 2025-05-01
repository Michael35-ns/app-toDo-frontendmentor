import React from "react";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = React.forwardRef(({ todo, todoRemove, todoUpdate,...props }, ref) => {
  const { id, title, completed } = todo;
  return (
    <div ref={ref} className="flex items-center gap-2 w-full" {...props}>

      <button
        className={`${
          completed
            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
            : "inline-block"
        } h-7 w-7 rounded-full border-2 border-gray-300 cursor-pointer`}
        onClick={() => todoUpdate(id)}>
        {completed && <CheckIcon />}
      </button>
      <h4
        className={`${
          completed && "line-through"
        } px-2 text-gray-500 dark:text-white`}>
        {title}
      </h4>
      <button
        className="ml-auto h-7 cursor-pointer"
        onClick={() => todoRemove(id)}>
        <CrossIcon />
      </button>
    </div>
  );
});
export default TodoItem;
