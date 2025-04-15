import { createContext, useContext, useReducer } from "react";
import pagereducer from "../reducer/pagereducer";
const initialState = {
  page: 1,
};
const PageContext = createContext(initialState);
export const PageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pagereducer, initialState);
  let value = {
    page: state.page,
    dispatch,
    state,
  };
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export const usePage = () => {
  return useContext(PageContext);
};
