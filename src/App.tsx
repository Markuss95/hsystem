import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
