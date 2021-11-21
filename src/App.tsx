import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
