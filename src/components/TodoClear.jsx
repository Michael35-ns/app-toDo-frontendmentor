const TodoClear = ({clearCompleted}) => {
  return (
    <>
      <button 
        className="text-gray-400 cursor-pointer font-sans hover:text-red-500"
        onClick={clearCompleted}
        >
          Clear Completed
      </button>
    </>
  );
};
export default TodoClear;