import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action) {
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <AppContext.Provider value={{ state, dispatch }}>
          {children}
        </AppContext.Provider>
      </div>
    </>
  );
};
