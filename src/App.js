import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Views/About";
import Home from "./Views/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Contact from "./Views/Contact";
import Product from "./Views/Product";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
