import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
