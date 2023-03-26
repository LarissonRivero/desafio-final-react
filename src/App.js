import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CarsProvider} from "./Context";

import Home from "./views/Home";
import Cars from "./views/Cars";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <CarsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars/:id" element={<Cars />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CarsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;