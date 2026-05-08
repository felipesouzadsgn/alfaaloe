// Helmet removed for Astro migration
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutFBO from "../components/AboutFBO";
import Products from "../components/Products";
import BusinessOpportunity from "../components/BusinessOpportunity";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import LeadCapture from "../components/LeadCapture";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      <Header />
      <main>
        <Hero />
        <AboutFBO />
        <Products />
        <div id="negocio">
          <BusinessOpportunity />
        </div>
        <Blog />
        <FAQ />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
