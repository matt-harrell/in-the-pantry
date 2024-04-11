export interface User {
    name:string;
    profileImage: string
    favoriteRecipes:string[];
}

export interface AppState {
    user:User | null;
    isLoggedIn:boolean;
}

export type AppAction = 
| {type: 'SET_LOGGED_IN'; payload:boolean;}

export interface AppContextValue {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
  }