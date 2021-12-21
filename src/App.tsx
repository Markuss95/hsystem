import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Sustainability from "./pages/Sustainability";
import LandingPage from "./pages/LandingPage";
import OurCompany from "./pages/OurCompany";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<OurCompany />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
