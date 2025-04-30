const TodoFilters = ({ changeFilter, filter }) => {
  return (
    <div className="flex justify-center font-semibold">
      <button
        className={`${
          filter === "all"
            ? "text-blue-500"
            : "text-gray-400 hover:text-blue-500"
        } cursor-pointer px-2`}
        onClick={() => changeFilter("all")}>
        All
      </button>
      <button
        className={`${
          filter === "active"
            ? "text-blue-500"
            : "text-gray-400 hover:text-blue-500"
        } cursor-pointer px-2`}
        onClick={() => changeFilter("active")}>
        Active
      </button>
      <button
        className={`${
          filter === "completed"
            ? "text-blue-500"
            : "text-gray-400 hover:text-blue-500"
        } cursor-pointer px-2`}
        onClick={() => changeFilter("completed")}>
        Completed
      </button>
    </div>
  );
};
export default TodoFilters;
