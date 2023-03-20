import React, { ChangeEvent, SyntheticEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Children from "./components/Children";
import Counter from "./components/Counter";
import Form from "./components/Form";
import HttpRequest from "./components/HttpRequest";
import { Route, Routes } from "react-router-dom";
import UsersRoute from "./components/UsersRoute";
import UserRoute from "./components/UserRoute";
import ReduxCounter from "./components/ReduxCounter";

function App() {
  return (
    <div className="App">
      <Menu />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/users" element={<UsersRoute />} />
        <Route path="/users/:userId" element={<UserRoute />} />
        <Route
          path="/other"
          element={
            <>
              <ReduxCounter />

              <ReduxCounter />
              <ReduxCounter />
              <ReduxCounter />

              <HttpRequest />

              <Form onSubmit={(values) => console.log(values)} />

              <Counter initialValue={0} step={2} />
              <Counter initialValue={0} step={2} />

              <Children>
                <ReduxCounter />
                <ReduxCounter />
                <Counter initialValue={0} step={2} />
                <Counter initialValue={0} step={2} />
              </Children>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
