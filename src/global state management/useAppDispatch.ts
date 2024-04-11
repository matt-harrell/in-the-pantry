import { useContext } from "react";
import { AppAction } from "../../interfaces/GlobalState";
import { AppContext } from "./AppContext";

const useAppDispatch = (): React.Dispatch<AppAction> => {
    const context = useContext(AppContext);
  
    if (!context) {
      throw new Error('useAppDispatch must be used within an AppContextProvider');
    }
  
    return context.dispatch;
  };
  
  export default useAppDispatch;