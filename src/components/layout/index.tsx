import { Outlet } from "react-router-dom";
import Header from "../header";
import { useLocation } from "react-router-dom";
import SideTab from "../sideTab";

function Layout() {
  const location = useLocation();
  return (
    <>
      <div
        style={{
          background: location.pathname === "/auth" ? "#F7FAFD" : "#fff",
          height: "100vh",
          display: "flex",
        }}
      >
        <SideTab />
        <div
          style={{
            width: "calc(100vw - 210px)",
          }}
        >
          <div>
            <Header />
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
