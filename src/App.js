import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Navbar";
import Footer from "./pages/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Servicios from "./pages/servicios";
import Rutas from "./pages/rutas";

function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/rutas-client" element={<Rutas />} />

      </Routes>
      <Footer /> {/* Aquí agregamos el Footer */}
    </BrowserRouter>
  );
}

export default App;
