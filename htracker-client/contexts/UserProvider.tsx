"use client";
import { User } from "@/types/user";
import React, { ReactNode, createContext, useContext, useReducer } from "react";

interface Props {
  children: ReactNode;
}

interface UserContextType {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
}

interface InitialState {
  user: User | null;
}

type Action = { type: "SET_USER"; payload: User } | { type: "LOGOUT" };

const UserContext = createContext<UserContextType | null>(null);

const initialState: InitialState = {
  user: null,
};

const userReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload, error: null };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export const UserProvider = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = useReducer<React.Reducer<InitialState, Action>>(
    userReducer,
    initialState
  );

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
