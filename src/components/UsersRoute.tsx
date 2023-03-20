import { useEffect } from "react";
import { useAppDispatch } from "../data/hooks";
import { fetchUsers } from "../data/slices/users";

function UsersRoute() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <h1>Users</h1>

      <p>adsfas</p>
    </>
  );
}

export default UsersRoute;
