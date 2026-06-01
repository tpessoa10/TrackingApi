import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { SearchProvider } from './Services/SearchProvider'
import styles from './styles.module.css'
import { ErrorProvider } from "./Services/ErrorProvider";

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <ErrorProvider>
        <SearchProvider>
          <Header />
          <main className={styles.mainContent}>
            <Outlet />
          </main>
        </SearchProvider>
      </ErrorProvider>
    </div>
  );
}