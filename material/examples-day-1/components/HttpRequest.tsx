import User from "./User";

// todo: Fork this project: https://codesandbox.io/s/test-api-pcei4
// todo: Replace the below URL with the forked one (the server logs the URL when it starts)
const baseUrl = "https://pcei4.sse.codesandbox.io";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function HttpRequest() {
  // todo: create a useState container for storing the loaded data (state type: User[], initial value: [])
  // todo: which hook should be used for creating side-effects?
  // todo: what to put in the dependencies list?

  /*
    You can use this inside the hook:

    Axios.get<User[]>(`${baseUrl}/users`).then((response) => {
        const users = response.data;
        setUsers(users);
      });
  */

  // todo: map the data to User components
  return <></>;
}

export default HttpRequest;
