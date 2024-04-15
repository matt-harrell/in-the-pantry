import { User } from "./GlobalState";

export interface UserDrawerProps {
    isOpen:boolean;
    isLoggedIn:boolean;
    toggleDrawer:(newOpen:boolean) => () => void;
    user?:User;
}