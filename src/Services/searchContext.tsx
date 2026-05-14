import { createContext } from 'react';

export interface SearchContextType {
  cidade: string;
  setCidade: (cidade: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
  cidade: '',
  setCidade: () => {}
});