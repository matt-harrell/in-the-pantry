import { AppAction, AppState } from "../../interfaces/GlobalState";

export const APP_ACTIONS = {
    SET_LOGGED_IN:'SET_LOGGED_IN',
    SET_IS_OPEN:'SET_IS_OPEN',
} as const;

export const appReducer = (state: AppState, action:AppAction): AppState => {
    // const { SET_LOGGED_IN, SET_IS_OPEN } = APP_ACTIONS;
    switch (action.type) {
      case APP_ACTIONS.SET_LOGGED_IN:
        return { ...state, isLoggedIn: action.payload };
      case APP_ACTIONS.SET_IS_OPEN:
        return {
          ...state,
          Drawer: {
            ...state.Drawer, 
            isOpen: action.payload,
          }
        }
      default:
        return state;
    }
}