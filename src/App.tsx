import "./App.css";
import { Box } from "@mui/material";
import "./themes/style.css";
import { Routes, Route } from "react-router-dom";
import { HeaderApp } from "./layouts/Header";
import { TopBarApp } from "./layouts/TopBar";
import { FooterApp } from "./layouts/Footer";
import { HomePage } from "./pages/Home";
import { ContactSection } from "./pages/contacts/ContactSection";
import { ProductListing } from "./pages/products/ProductListing";
import { Cart } from "./pages/carts/Cart";
import { AboutUs } from "./pages/about/About";
import { Chatbot } from "./components/Chatbot";

function App() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <TopBarApp />
      <HeaderApp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/carts" element={<Cart />} />
      </Routes>
      <Chatbot />
      <FooterApp />
    </Box>
  );
}

export default App;
