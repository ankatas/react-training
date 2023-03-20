import axios from "axios";
import { useEffect, useState } from "react";
import useHttpRequest from "../hooks/useHttpRequest";
import User from "./User";

// todo: Fork this project: https://codesandbox.io/s/test-api-pcei4
// todo: Replace the below URL with the forked one (the server logs the URL when it starts)
const baseUrl = "https://nzjjui.sse.codesandbox.io";

// User -> UserItem
interface UserItem {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

function HttpRequest() {
  const users = useHttpRequest<UserItem>(`${baseUrl}/users`);

  return (
    <>
      {users.map((user) => (
        <User
          key={user.id}
          phone={user.phone}
          email={user.email}
          name={user.name}
        />
      ))}
    </>
  );
}

export default HttpRequest;
