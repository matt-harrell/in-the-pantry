export interface User {
    name:string;
    profileImage: string
    favoriteRecipes:string[];
}

export interface Drawer {
    isOpen:boolean;
}

export interface AppState {
    user:User | null;
    isLoggedIn:boolean;
    Drawer:Drawer;
}

interface SetLoggedIn {
    type: "SET_LOGGED_IN"; 
    payload:boolean;
}

interface SetIsOpen {
    type: "SET_IS_OPEN"; 
    payload:boolean;
}

export type AppAction = SetIsOpen | SetLoggedIn;

export interface AppContextValue {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
  }