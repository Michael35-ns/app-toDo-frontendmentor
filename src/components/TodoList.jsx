import TodoItem from "./TodoItem";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const TodoList = ({ todos, todoRemove, todoUpdate }) => {
  return (
    <Droppable droppableId="todo">
      {(droppableProvided) => (
        <div
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}>
          {todos.map((todo, index) => (
            <div
              key={todo.id}
              className="flex h-14 border-b p-3 border-gray-300 w-full py-2 items-center">
              <Draggable index={index} draggableId={`${todo.id}`}>
                {(draggableProvider) => (
                  <TodoItem
                    todo={todo}
                    todoRemove={todoRemove}
                    todoUpdate={todoUpdate}
                    ref={draggableProvider.innerRef}
                    {...draggableProvider.dragHandleProps}
                    {...draggableProvider.draggableProps}
                  />
                )}
              </Draggable>
            </div>
          ))}
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
