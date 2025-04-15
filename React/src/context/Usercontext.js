import { createContext, useContext, useReducer } from "react";
import Userreducer from "../reducer/userreducer";
const intialState = {
  user: [],
  roleUser: false,
  roleAdmin: false,
};
const UserContext = createContext(intialState);
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Userreducer, intialState);
  function filter(user) {
    if (state.roleUser) {
      let filteruser = state.user.filter((item) => item.role !== "admin");
      return filteruser;
    } else return state.user;
  }
  function filterAdmin(user) {
    if (state.roleAdmin) {
      let filteruser = state.user.filter((item) => item.role !== "user");
      return filteruser;
    } else return state.user;
  }
  let finalvalue = filterAdmin(filter(state.user));
  let value = {
    user: finalvalue,
    addUser,
    dispatch,
  };
  function addUser(user) {
    console.log("user", user);
    let newUser = state.user.concat(user);
    dispatch({ type: "ADD_USER", payload: { user: newUser } });
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
