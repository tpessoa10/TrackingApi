import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "./Services/searchProvider";

export default function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SearchProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </SearchProvider>
    </div>
  );
}