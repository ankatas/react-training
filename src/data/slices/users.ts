import axios from "axios";
import _ from "lodash";

import { AnyAction } from "redux";
import { AppThunk } from "../store";

export interface UserItem {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const baseUrl = "https://nzjjui.sse.codesandbox.io"; // todo: change this

const USERS_FETCH_FULFILLED = "USERS_FETCH_FULFILLED";

function usersFetchFulfilled(payload: UserItem[]) {
  return {
    type: USERS_FETCH_FULFILLED,
    payload,
  };
}

type UsersFetchFulfilledAction = ReturnType<typeof usersFetchFulfilled>;
function isUsersFetchFulfilledAction(
  action: AnyAction
): action is UsersFetchFulfilledAction {
  return action.type === USERS_FETCH_FULFILLED;
}

export function fetchUsers(): AppThunk<Promise<UserItem[]>> {
  return (dispatch, getState) => {
    return axios
      .get<UserItem[]>(`${baseUrl}/users`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(usersFetchFulfilled(data));

        return data;
      });
  };
}

const USER_FETCH_FULFILLED = "USER_FETCH_FULFILLED";

function userFetchFulfilled(payload: UserItem) {
  return {
    type: USER_FETCH_FULFILLED,
    payload,
  };
}

type UserFetchFulfilledAction = ReturnType<typeof userFetchFulfilled>;
function isUserFetchFulfilledAction(
  action: AnyAction
): action is UserFetchFulfilledAction {
  return action.type === USER_FETCH_FULFILLED;
}

export function fetchUser(id: string): AppThunk<Promise<UserItem>> {
  return (dispatch, getState) => {
    return axios
      .get<UserItem>(`${baseUrl}/users/${id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(userFetchFulfilled(data));

        return data;
      });
  };
}

const USER_EDIT_FULFILLED = "USER_EDIT_FULFILLED";

function userEditFulfilled(payload: UserItem) {
  return {
    type: USER_EDIT_FULFILLED,
    payload,
  };
}

type UserEditFulfilledAction = ReturnType<typeof userEditFulfilled>;
function isUserEditFulfilledAction(
  action: AnyAction
): action is UserEditFulfilledAction {
  return action.type === USER_EDIT_FULFILLED;
}

export function editUser(
  id: string,
  data: Partial<UserItem>
): AppThunk<Promise<UserItem>> {
  return (dispatch, getState) => {
    return axios
      .put<UserItem>(`${baseUrl}/users/${id}`, data)
      .then((response) => response.data)
      .then((data) => {
        dispatch(userFetchFulfilled(data));

        return data;
      });
  };
}

type UsersState = {
  byId: {
    [key: string]: UserItem;
  };
  entities: UserItem[];
};

const initialState = {
  byId: {
    // [user.id]: user
  },
  entities: [],
};

export function reducer(state: UsersState = initialState, action: AnyAction) {
  if (isUsersFetchFulfilledAction(action)) {
    // todo: handle the fulfilled action for fetching many users
    const users = action.payload;
    const byId = _.keyBy(users, "id");

    return {
      ...state,
      byId: {
        ...state.byId,
        ...byId,
      },
      entities: users,
    };
  }

  if (isUserFetchFulfilledAction(action)) {
    // todo: handle the fulfilled action for fetching just one user at a time
    const user = action.payload;

    const byId = {
      ...state.byId,
      [user.id]: user,
    };

    // byId[user.id] = user;

    return {
      ...state,
      byId: byId,
    };
  }

  if (isUserEditFulfilledAction(action)) {
    // todo: handle the fulfilled action for editing a user
    return state;
  }

  return state;
}
