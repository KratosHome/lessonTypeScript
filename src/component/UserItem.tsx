import React, { FC } from "react";
import { IUser } from "../tayps/taypes";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid gray" }}>
      {user.id}. {user.name} прожива в городі {user.address.city} по вулиці{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
