import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Sustainability from "./pages/Sustainability";
import LandingPage from "./pages/LandingPage";
import Menu from "./components/Menu";
import OurCompany from "./pages/OurCompany";

const App = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <Navbar menuState={menuState} setMenuState={setMenuState} />
      <AnimatePresence>
        {menuState ? (
          <Menu menuState={menuState} setMenuState={setMenuState} />
        ) : (
          <>
            <Routes>
              <Route path="" element={<LandingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/company" element={<OurCompany />} />
              <Route path="/sustainability" element={<Sustainability />} />
            </Routes>
            <Footer />
          </>
        )}
      </AnimatePresence>
      {/* <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<OurCompany />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
