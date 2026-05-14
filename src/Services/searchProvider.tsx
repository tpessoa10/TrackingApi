import { useState } from 'react';
import type {ReactNode} from 'react';
import { SearchContext } from './SearchContext';

export function SearchProvider({ children }: { children: ReactNode }) {
  const [cidade, setCidade] = useState('');

  return (
    <SearchContext.Provider value={{ cidade, setCidade }}>
      {children}
    </SearchContext.Provider>
  );
}