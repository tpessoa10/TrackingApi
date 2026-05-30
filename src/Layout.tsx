import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { SearchProvider } from './Services/SearchProvider'
import styles from './styles.module.css'

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <SearchProvider>
        <Header />
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </SearchProvider>
    </div>
  );
}