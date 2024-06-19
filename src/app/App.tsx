import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../utils/consts/routes";
import { RootStoreContext } from "./context/root-store-context";
import { store } from "../model/stores/store-root";
import "./App.css";
function App() {
  return (
    <RootStoreContext.Provider value={store}>
      <div className="App">
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
    </RootStoreContext.Provider>
  );
}

export default App;
