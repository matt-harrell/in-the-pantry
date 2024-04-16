import { useContext } from "react";
import AuthContext from "./AuthContext";
import { AuthContextValue } from "../../interfaces/AuthContext";

const useAuthContext = ():AuthContextValue  => useContext(AuthContext);

export default useAuthContext;