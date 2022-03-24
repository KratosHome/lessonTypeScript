import React, { FC, useEffect } from "react";
import axios from "axios";
import { IUser } from "../tayps/taypes";
import { useNavigate, useParams } from "react-router";



const UserItemPage: FC = () => {
  const [user, setUser] = React.useState<IUser | null>(null);

  const params = useParams()

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h1>Страницп пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
    </div>
  );
};

export default UserItemPage;
