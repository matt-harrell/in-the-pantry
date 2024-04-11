'use client'
import { useReducer, useMemo } from "react";
import { AppState } from "../../interfaces/GlobalState";
import { AppContext } from "./AppContext";
import { appReducer } from "./appReducer";

const initialState: AppState = {
    user: null,
    isLoggedIn:false
  };
  
  interface AppContextProviderProps {
    children: React.ReactNode;
  }
  
  const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
  
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export default AppContextProvider;