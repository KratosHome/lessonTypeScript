import React from "react";
import Card, { CardVariant } from "./component/Card";
import UserList from "./component/UserList";
import { IUser } from "./tayps/taypes";

function App() {

  const users: IUser[] = [
    {id: 1, name: "favre", email: "fvafva", address: {city: "vfvsdf", street: "ffvsf" }},
    {id: 2, name: "favre", email: "fvafva", address: {city: "vfvsdf", street: "ffvsf" }}
  ]

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
      <UserList users={users}/>
    </div>
  );
}

export default App;
