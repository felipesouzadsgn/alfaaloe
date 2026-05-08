import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FboPage from "./pages/FboPage";
import CatalogPage from "./pages/CatalogPage";
import BlogPostPage from "./pages/BlogPostPage";
import BlogPage from "./pages/BlogPage";
import LinksPage from "./pages/LinksPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seja-fbo" element={<FboPage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/links" element={<LinksPage />} />
      </Routes>
    </BrowserRouter>
  );
}
