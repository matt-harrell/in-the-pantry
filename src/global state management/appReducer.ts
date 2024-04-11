import { AppAction, AppState } from "../../interfaces/GlobalState";

export const APP_ACTIONS = {
    SET_LOGGED_IN:'SET_LOGGED_IN',
}

export const appReducer = (state: AppState, action: AppAction): AppState => {
    const { SET_LOGGED_IN } = APP_ACTIONS;
    switch (action.type) {
      case SET_LOGGED_IN:
        return { ...state, isLoggedIn: action.payload };
      default:
        return state;
    }
}