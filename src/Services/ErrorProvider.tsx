import { useState, useCallback } from "react";
import styles from "./styles.module.css";
import { MdErrorOutline } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import {ErrorContext} from './ErrorContext'
import type { ReactNode } from "react";

export function ErrorProvider({ children }: { children: ReactNode }) {
  const [mensagem, setMensagem] = useState<string | null>(null);

  const fecharErro = useCallback(() => setMensagem(null), []);

  const dispararErro = useCallback((msg: string) => {
    setMensagem(msg);
    setTimeout(() => {
      setMensagem(null);
    }, 5000);
  }, []);

  return (
    <ErrorContext.Provider value={{ dispararErro }}>
      {children}
      
      {mensagem && (
        <div className={styles.toastErro}>
          <MdErrorOutline className={styles.iconeErro} />
          <p className={styles.textoErro}>{mensagem}</p>
          <button onClick={fecharErro} className={styles.botaoFechar}>
            <IoCloseOutline />
          </button>
        </div>
      )}
    </ErrorContext.Provider>
  );
}

