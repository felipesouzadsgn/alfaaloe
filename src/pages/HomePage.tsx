import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Forever Living | Compre Aloe Vera Gel e Produtos Originais</title>
        <meta name="description" content="Compre produtos Forever Living Originais. Fale com um Especialista via WhatsApp, receba consultoria exclusiva e adquira seu Aloe Vera Gel puro hoje." />
      </Helmet>
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
