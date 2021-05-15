import React, { createContext, useEffect, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [favourites, dispatch] = useReducer(userReducer, [], () => {
    const storedData = localStorage.getItem("favourites");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <UserContext.Provider value={{ favourites, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
