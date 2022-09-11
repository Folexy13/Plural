import "./App.css";
import { Routes, Route } from "react-router-dom";
import { About, Appointment, LandingPage, Services } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
