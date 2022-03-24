import React, { FC, useEffect } from "react";
import { IUser } from "../tayps/taypes";
import List from './List';
import axios from "axios";
import UserItem from './UserItem';

const UserPage: FC = () => {
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
    <>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />
    </>
  );
};

export default UserPage;
