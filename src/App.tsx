import axios from "axios";
import React, { useEffect } from "react";
import Card, { CardVariant } from "./component/Card";
import UserList from "./component/UserList";
import { IUser } from "./tayps/taypes";

function App() {
  const [users, setUsers] = React.useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
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
      <UserList users={users} />
    </div>
  );
}

export default App;
