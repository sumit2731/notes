import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "./components/About";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import Homepage from "./components/Homepage";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Homepage />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
