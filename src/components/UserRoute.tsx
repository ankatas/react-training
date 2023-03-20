import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { fetchUser, UserItem } from "../data/slices/users";

function UserRoute() {
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, userId]);

  const user: UserItem | null = useAppSelector((state) => {
    console.log("userroute selector");
    if (userId) {
      return state.users.byId[userId] ?? null;
    }
    return null;

    // return getUser(userId)
  });

  if (!user) {
    // The user wasn't loaded yet
    return null;
  }

  return (
    <>
      <h1>User</h1>
      <p>User email: {user.email}</p>
      <p>User phone: {user.phone}</p>
      <p>User name: {user.name}</p>
      <p>User id: {user.id}</p>
    </>
  );
}

export default UserRoute;
