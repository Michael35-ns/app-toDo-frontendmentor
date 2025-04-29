const TodoFilters = () => {
  return (
    <div className="flex justify-center font-semibold">
      <button className="text-gray-400 px-2 hover:text-blue-600">All</button>
      <button className="text-gray-400 px-2 hover:text-blue-600">Active</button>
      <button className="text-gray-400 px-2 hover:text-blue-600">
        Completed
      </button>
    </div>
  );
};
export default TodoFilters;