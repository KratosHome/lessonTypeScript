import axios from "axios";
import React, { useEffect } from "react";
import Card, { CardVariant } from "./component/Card";
import UserItem from "./component/UserItem";
import UserList from "./component/UserList";
import { ITodo, IUser } from "./tayps/taypes";
import List from "./component/List";
import TodoItem from "./component/TodoItem";
import EventsExample from "./component/EventsExample";
import { BrowserRouter } from "react-router-dom";
import UserPage from "./component/UserPage";
import { Route, Routes } from "react-router";
import TodosPages from "./component/TodosPage";
import { Link } from "react-router-dom";
import UserItemPage from "./component/UserItemsPage";
import UserItemTodo from "./component/UserItemTodo";
//    <EventsExample/>

function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to="/users">users</Link>
      <Link to="/todos">todos</Link>
      <Link to="/event">event</Link>
    </div>
      <Routes>
        <Route path={"/users"} element={<UserPage />} />
        <Route path={"/todos"} element={<TodosPages />} />
        <Route path={"/event"} element={<EventsExample />} />
        <Route path={"/users/:id"} element={<UserItemPage/>} />
        <Route path={"/users/:id"} element={<UserItemTodo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
