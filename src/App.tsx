import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./utils/consts/routes";

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavLink className="headerLink" to="/">
          Киносправочник
        </NavLink>
      </div>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
