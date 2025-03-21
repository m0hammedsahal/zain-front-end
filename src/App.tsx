import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SplineBackground from "./components/SplineBackground";
import Consultation from "./components/Consultation";
import Background3D from "./components/Background3D";
import LocationPicker from "./components/LocationPicker";
import ProductUploadSection from "./components/ProductUploadSection";
import NotFound from "./pages/NotFound";

function App() {
  const handleLocationSelect = (location: { lat: number; lng: number; address: string }) => {
    console.log("Selected Location:", location);
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Background3D />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/upload" element={<ProductUploadSection />} />
          <Route
            path="/location"
            element={<LocationPicker onLocationSelect={handleLocationSelect} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
