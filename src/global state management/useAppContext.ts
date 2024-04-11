import { useContext } from "react";
import { AppState, AppAction } from "../../interfaces/GlobalState";
import { AppContext } from "./AppContext";

const useAppContext = (): [AppState, React.Dispatch<AppAction>] => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }

    return [context.state, context.dispatch];
};

export default useAppContext;
