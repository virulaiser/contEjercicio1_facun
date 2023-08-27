import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
