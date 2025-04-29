import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <>
      <span className="inline-block rounded-full border-2 border-gray-300 h-7 w-7"></span>
      <h4 className={`${completed && "line-through"} px-2 text-gray-500`}>
        {title}
      </h4>
      <button className="ml-auto h-7">
        <CrossIcon />
      </button>
    </>
  );
};
export default TodoItem;
