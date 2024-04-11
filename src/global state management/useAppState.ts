import { useContext } from "react";
import { AppState } from "../../interfaces/GlobalState";
import { AppContext } from "./AppContext";

const useAppState = (): AppState => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppState must be used within an AppContextProvider');
    }

    return context.state;
};

export default useAppState;
