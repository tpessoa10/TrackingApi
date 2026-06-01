import { useContext } from "react";
import { createContext } from "react";


interface ErrorContextType {
  dispararErro: (mensagem: string) => void;
}

export const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export function useErrorGlobal() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useErrorGlobal deve ser usado dentro de um ErrorProvider");
  }
  return context;
}