import { useState } from "react";
// Helmet removed for Astro migration
// Link removed for Astro migration
import { motion } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  Globe2, 
  ShoppingBag, 
  Briefcase, 
  FileText, 
  ArrowRight,
  TrendingUp,
  Leaf
} from "lucide-react";
import Footer from "../components/Footer";
import { blogPosts } from "../lib/blog-data";
import { createWhatsAppLink } from "../lib/utils";
import { trackWhatsAppClick, trackFormSubmit } from "../lib/tracking";

export default function LinksPage() {
  const profileImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop";
  const name = "Seu Nome Aqui";
  const title = "Especialista Forever Living";
  
  const whatsappMsg = "Olá Especialista! Gostaria de mais informações após acessar seus links.";

  const recentPosts = blogPosts.slice(0, 3);

  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "", interest: "produtos" });

  const msg = formData.interest === "produtos" 
    ? `Olá, Especialista! Me chamo ${formData.name}. Meu e-mail é ${formData.email} e WhatsApp ${formData.whatsapp}. Gostaria de receber os catálogos dos produtos de Aloe Vera e suplementos.`
    : `Olá, Especialista! Me chamo ${formData.name}. Meu e-mail é ${formData.email} e WhatsApp ${formData.whatsapp}. Tenho interesse na plataforma de negócios (FBO) da Forever Living.`;

  const whatsappUrl = createWhatsAppLink(msg);

  return (
    <div className="min-h-screen bg-[#f8fcf9] flex flex-col">


      {/* Main Content */}
      <main className="flex-grow py-12 px-6">
        <div className="max-w-xl mx-auto space-y-12">
          
          {/* Header Section */}
          <section className="text-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl shadow-aloe-900/10 mb-6"
            >
              <img src={profileImage} alt={name} className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-extrabold font-heading text-aloe-900 mb-2"
            >
              {name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-aloe-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2"
            >
              <Leaf className="w-4 h-4 text-forever-yellow-dark" />
              {title}
            </motion.p>
          </section>

          {/* Social Icons Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <a 
              href={createWhatsAppLink(whatsappMsg)}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => trackWhatsAppClick(e, 'links_page_social')}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-aloe-900 border border-aloe-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:text-[#25D366] hover:border-[#25D366] transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-aloe-900 border border-aloe-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:text-[#E1306C] hover:border-[#E1306C] transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="/"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-aloe-900 border border-aloe-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:text-aloe-600 transition-all"
              aria-label="Site Oficial"
            >
              <Globe2 className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Main Links */}
          <section className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <a 
                href={createWhatsAppLink("Olá! Quero ver o catálogo de produtos e fazer um pedido.")}
                target="_blank" rel="noopener noreferrer"
                onClick={(e) => trackWhatsAppClick(e, 'links_page_buy_now')}
                className="group flex flex-col items-center justify-center gap-3 w-full p-6 bg-aloe-900 text-white rounded-2xl font-extrabold uppercase tracking-widest hover:bg-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-aloe-900/20 text-center"
              >
                <ShoppingBag className="w-8 h-8 text-forever-yellow" />
                <span>Comprar Produtos Agora</span>
              </a>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <a 
                href="/catalogo"
                className="group flex items-center justify-between p-5 bg-white border border-aloe-100 rounded-2xl hover:border-aloe-300 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-aloe-50 rounded-xl flex items-center justify-center text-aloe-600">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-800">Catálogo Digital Oficial</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-aloe-600 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <a 
                href="/seja-fbo"
                className="group flex items-center justify-between p-5 bg-white border border-aloe-100 rounded-2xl hover:border-aloe-300 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forever-yellow/20 rounded-xl flex items-center justify-center text-forever-yellow-dark">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-800">Oportunidade FBO (Renda Extra)</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-forever-yellow-dark group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <a 
                href="/blog"
                className="group flex items-center justify-between p-5 bg-white border border-aloe-100 rounded-2xl hover:border-aloe-300 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-aloe-50 rounded-xl flex items-center justify-center text-aloe-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-800">Dicas Diárias (Blog)</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-aloe-600 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>
          </section>

          {/* Quick Blog Snippets */}
          <section>
            <motion.h2 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              className="text-center font-heading font-extrabold text-aloe-900 mb-6 uppercase tracking-widest text-sm"
            >
              Últimas do Blog
            </motion.h2>
            <div className="space-y-4 flex flex-col">
              {recentPosts.map((post, idx) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a 
                    href={`/blog/${post.slug}`}
                    className="flex gap-4 p-3 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:border-aloe-200 transition-all group items-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center flex-grow pr-2">
                      <h3 className="font-bold text-sm sm:text-base text-aloe-900 line-clamp-2 mb-1 group-hover:text-aloe-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1">
                        Ler artigo <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Form embedded */}
          <section className="pt-8 border-t border-aloe-100">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-aloe-900/5 border border-gray-100"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold font-heading text-aloe-900 mb-2">Contato Rápido</h3>
                <p className="text-gray-600 font-medium text-sm">Preencha o formulário e receba informações pelo WhatsApp em instantes.</p>
              </div>

              <form action="https://formsubmit.co/alfaaloe.flp@gmail.com" method="POST" className="space-y-5" onSubmit={() => trackFormSubmit('lead_capture_links', formData)}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={whatsappUrl} />
                <input type="hidden" name="_subject" value="Novo Lead - Links Forever Living" />
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Maria Clara"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-aloe-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Seu E-mail</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: maria@email.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-aloe-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Seu WhatsApp</label>
                    <input 
                      type="tel" 
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="Ex: (11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-aloe-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">O que você procura?</label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.interest === 'produtos' ? 'border-aloe-600 bg-aloe-50 text-aloe-900' : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'}`}>
                      <input 
                        type="radio" 
                        name="interest" 
                        value="produtos"
                        checked={formData.interest === 'produtos'}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="sr-only"
                      />
                      <ShoppingBag className="w-5 h-5 mb-1" />
                      <span className="font-bold text-xs uppercase text-center">Produtos</span>
                    </label>
                    <label className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.interest === 'negocio' ? 'border-aloe-600 bg-aloe-50 text-aloe-900' : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'}`}>
                      <input 
                        type="radio" 
                        name="interest" 
                        value="negocio"
                        checked={formData.interest === 'negocio'}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="sr-only"
                      />
                      <Briefcase className="w-5 h-5 mb-1" />
                      <span className="font-bold text-xs uppercase text-center">Negócios</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-forever-yellow hover:bg-[#e0b000] text-aloe-900 py-4 rounded-xl font-extrabold uppercase tracking-wider transition-transform active:scale-[0.98] shadow-lg shadow-forever-yellow/30"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
