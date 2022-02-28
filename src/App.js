import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import TacoDetail from "./pages/TacoDetail";
import Tacos from "./pages/Tacos";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/tacos/:taco" element={<Tacos />}>
          <Route path="detail" element={<TacoDetail />} />
        </Route>
      </Routes>
    </div>
  );
}
