import { createContext } from "react";
import { AuthContextValue } from "../../interfaces/AuthContext";

 const AuthContext = createContext<AuthContextValue>(null);

export default AuthContext;