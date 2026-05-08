import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
// Link removed for Astro migration
// Helmet removed for Astro migration
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadCapture from "../components/LeadCapture";
import { blogPosts } from "../lib/blog-data";
import { createWhatsAppLink } from "../lib/utils";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const generalMsg = "Olá Especialista, acessei a página do Blog da Forever e gostaria de fazer algumas perguntas ou realizar um pedido.";

  return (
    <div className="min-h-screen bg-[#f8fcf9]">

      <Header />
      
      <main>
        {/* Blog Hero Section */}
        <section className="bg-aloe-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-96 h-96 bg-forever-yellow opacity-10 rounded-full blur-[80px] -mr-20 -mt-20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6">
              O Seu Guia de <span className="text-forever-yellow">Saúde e Negócios</span>
            </h1>
            <p className="text-xl text-aloe-100 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
              Nossa missão é espalhar as maravilhas da Aloe Vera. Leia artigos aprofundados sobre bem-estar e independência financeira com a Forever Living.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white relative z-20 -mt-10 rounded-t-[3rem]">
          <div className="container mx-auto px-6">
             <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-aloe-900 text-left">Destaque da Semana</h2>
             </div>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="group flex flex-col md:flex-row bg-[#f8fcf9] rounded-[2rem] border border-gray-100 shadow-xl shadow-aloe-900/5 overflow-hidden transition-all hover:shadow-2xl"
             >
                <div className="md:w-1/2 relative overflow-hidden aspect-[4/3] md:aspect-auto">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold text-aloe-900 flex items-center gap-2 uppercase tracking-wide border border-white/50 shadow-md">
                    <featuredPost.icon className="w-5 h-5 text-forever-yellow-dark" />
                    {featuredPost.category}
                  </div>
                </div>
                <div className="md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                   <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-aloe-900 mb-6 leading-tight">
                     {featuredPost.title}
                   </h3>
                   <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                     {featuredPost.excerpt}
                   </p>
                   <a 
                     href={`/blog/${featuredPost.slug}`}
                     className="inline-flex items-center gap-2 px-8 py-4 bg-aloe-900 hover:bg-black text-white rounded-xl font-bold uppercase tracking-widest transition-transform hover:-translate-y-1 self-start shadow-lg"
                   >
                     Ler Artigo
                     <ArrowRight className="w-5 h-5" />
                   </a>
                </div>
             </motion.div>
          </div>
        </section>

        {/* Other Posts Grid */}
        <section className="py-16 bg-[#f8fcf9]">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-aloe-900 mb-10">Mais Publicações</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {otherPosts.map((post, idx) => {
                 const Icon = post.icon;
                 return (
                   <motion.div 
                     key={post.id}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="group flex flex-col sm:flex-row bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-aloe-900/10 overflow-hidden transition-all h-full"
                   >
                      <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden relative">
                         <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-aloe-900 flex items-center gap-1.5 uppercase tracking-wide border border-white/50">
                           <Icon className="w-4 h-4 text-forever-yellow-dark" />
                           <span className="hidden sm:inline">{post.category}</span>
                         </div>
                      </div>
                      <div className="sm:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                         <div>
                            <h4 className="text-xl md:text-2xl font-bold font-heading text-aloe-900 mb-3 leading-tight group-hover:text-aloe-600 transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
                              {post.excerpt}
                            </p>
                         </div>
                         <a 
                           href={`/blog/${post.slug}`}
                           className="inline-flex items-center text-sm font-bold text-aloe-600 hover:text-aloe-800 uppercase tracking-wide group/btn"
                         >
                           Ler Artigo Completo
                           <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                         </a>
                      </div>
                   </motion.div>
                 );
              })}
            </div>
          </div>
        </section>

        {/* Special CTA */}
        <section className="bg-forever-yellow py-16">
          <div className="container mx-auto px-6 text-center text-aloe-900 max-w-3xl">
            <h3 className="text-3xl font-extrabold font-heading mb-4">Gostou dos conteúdos?</h3>
            <p className="font-medium opacity-90 mb-8 text-lg">
              Receba orientações personalizadas, faça pedidos ou descubra como construir sua rede de negócios contatando-me diretamente.
            </p>
            <a 
              href={createWhatsAppLink(generalMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 bg-aloe-900 hover:bg-black text-white rounded-2xl font-extrabold text-lg uppercase tracking-widest transition-transform hover:-translate-y-1 shadow-xl shadow-aloe-900/20"
            >
              <MessageCircle className="w-6 h-6" />
              Fale pelo WhatsApp
            </a>
          </div>
        </section>

        <LeadCapture />

      </main>

      <Footer />
    </div>
  );
}
