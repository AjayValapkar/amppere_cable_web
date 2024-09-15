import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import CardSlider from "./components/CardSlider";
import Wire from "./components/Wire";
import ProductSection from "./components/ProductSection";
import Product from "./pages/Product";
import HeroSection from "./components/HeroSection";
import CopperConductors from "./components/CopperConductors";
import AboutUs from "./pages/AboutUs";
import EnquiryPage from "./pages/EnquiryPage";
import Founder from "./pages/Founder";
import ScrollToTop from "./components/ScrollToTop";
import Clients from "./components/Clients";
import ProductSlider from "./components/ProductSlider";
const Header = lazy(() => import("./components/Header"));
const Banner = lazy(() => import("./components/Banner"));
const Goals = lazy(() => import("./components/Goals"));
const ClientsComponent = lazy(() => import("./components/ClientsSeciton"));
const KeyNumbers = lazy(() => import("./components/Keynumbers"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Router>
    <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Goals />
                <ProductSection />
                <HeroSection />
                <ClientsComponent />
                <Wire />
                <CopperConductors />
                <CardSlider />
                <KeyNumbers />
              </>
            }
          />
          <Route path="/product/:productName" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/products" element={<ProductSlider />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/contact" element={<EnquiryPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
