import styles from "./styles.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.textoLoading}>Buscando informações do clima...</p>
    </div>
  );
}