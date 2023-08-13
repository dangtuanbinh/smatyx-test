import { Routes, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routers";
import Layout from "./components/layout";
import "react-big-calendar/lib/css/react-big-calendar.css"

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          {PrivateRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="auth">
          {PublicRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
