import React, { FC } from "react";
import { ITodo } from "../tayps/taypes";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" capture={todo.completed} />
      {todo.id}, {todo.title}
    </div>
  );
};

export default TodoItem;
