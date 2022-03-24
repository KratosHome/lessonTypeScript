import axios from "axios";
import React, { useEffect } from "react";
import Card, { CardVariant } from "./component/Card";
import UserItem from "./component/UserItem";
import UserList from "./component/UserList";
import { ITodo, IUser } from "./tayps/taypes";
import List from "./component/List";
import TodoItem from './component/TodoItem';

function App() {
  const [users, setUsers] = React.useState<IUser[]>([]);

  const [todos, setTodo] = React.useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

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
    <div className="App">
      <Card
        onClick={(num) => console.log(num)}
        variant={CardVariant.outline}
        width="200px"
        height="200px"
      >
        <button>ffссf </button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />
      <List
        items={todos}
        renderItem={(todos: ITodo) => <TodoItem key={todos.id}  todo={todos} />}
      />
    </div>
  );
}

export default App;
