import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
