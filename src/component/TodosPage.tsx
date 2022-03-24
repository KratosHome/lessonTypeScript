import React, { useEffect } from "react";
import { ITodo } from "../tayps/taypes";
import List from "./List";
import axios from "axios";
import TodoItem from './TodoItem';

const TodosPages = () => {
  const [todos, setTodo] = React.useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodo(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <List
        items={todos}
        renderItem={(todos: ITodo) => <TodoItem key={todos.id} todo={todos} />}
      />
    </>
  );
};
export default TodosPages;
