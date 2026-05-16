import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { SearchProvider } from './Services/SearchProvider'

export default function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SearchProvider>
        <Header />
        <main style={{ height:"90vh", display:'flex', flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <Outlet />
        </main>
      </SearchProvider>
    </div>
  );
}