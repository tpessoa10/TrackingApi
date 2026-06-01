import { useState, useCallback } from "react";
import styles from "./styles.module.css";
import { MdErrorOutline } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import {ErrorContext} from './ErrorContext'
import type { ReactNode } from "react";

export function ErrorProvider({ children }: { children: ReactNode }) {
  const [mensagem, setMensagem] = useState<string | null>(null);

  // Função para fechar o erro
  const fecharErro = useCallback(() => setMensagem(null), []);

  // Função global que qualquer componente vai chamar
  const dispararErro = useCallback((msg: string) => {
    setMensagem(msg);
    // Auto-clear: o erro some sozinho depois de 5 segundos
    setTimeout(() => {
      setMensagem(null);
    }, 5000);
  }, []);

  return (
    <ErrorContext.Provider value={{ dispararErro }}>
      {children}
      
      {/* O Componente Visual do Toast de Erro */}
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

// Hook customizado para facilitar o uso nos componentes
