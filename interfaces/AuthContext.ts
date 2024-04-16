import { ReactNode } from "react";
import { User } from "./GlobalState";

export type AuthContextValue = User | null;


export interface AuthContextProviderProps {
  children: ReactNode;
};