import { createContext } from 'react';
import { AppContextValue } from '../../interfaces/GlobalState';

export const AppContext = createContext<AppContextValue | null>(null);