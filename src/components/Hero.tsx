import { motion } from "motion/react";
import { MessageCircle, ShieldCheck, Star, Users } from "lucide-react";
import { createWhatsAppLink } from "../lib/utils";
// Link removed for Astro migration

export default function Hero() {
  const whatsappUrl = createWhatsAppLink("Olá, acessei a página e gostaria de informações sobre os produtos e o catálogo.");

  return (
    <section className="relative overflow-hidden bg-aloe-900 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop" 
          alt="Aloe Vera Fresca" 
          className="w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aloe-900 via-aloe-900/90 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-aloe-600/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center py-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forever-yellow/10 border border-forever-yellow/30 text-sm font-bold text-forever-yellow uppercase tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-forever-yellow animate-pulse"></span>
            Distribuidor Oficial Forever Living
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white leading-[1.1] mb-6">
            A Essência <br /> da <span className="text-forever-yellow border-b-8 border-aloe-500">Aloe Vera.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-aloe-50 mb-8 max-w-lg font-light leading-relaxed">
            Tenha acesso à pureza da Aloe Vera direto no seu WhatsApp. Produtos originais com consultoria especializada para sua saúde e bem-estar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-forever-yellow hover:bg-forever-yellow-dark text-aloe-900 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl shadow-forever-yellow/20"
            >
              <MessageCircle className="w-6 h-6" />
              Catálogo no WhatsApp
            </a>
            <a 
              href="/catalogo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-medium transition-colors border border-white/20 backdrop-blur-sm"
            >
              Ver Catálogo Completo
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white font-medium">
            <div className="flex items-center gap-2 bg-aloe-800/50 px-4 py-2 rounded-lg border border-aloe-500/30 backdrop-blur-md">
              <ShieldCheck className="w-5 h-5 text-forever-yellow" />
              Certificação IASC (Alta Pureza)
            </div>
            <div className="flex items-center gap-2 bg-aloe-800/50 px-4 py-2 rounded-lg border border-aloe-500/30 backdrop-blur-md">
              <Users className="w-5 h-5 text-forever-yellow" />
              160+ Países
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative hidden md:block"
        >
          {/* Main Visual box playing with the Yellow identity */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-forever-yellow p-1 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="w-full h-full rounded-[20px] overflow-hidden relative bg-white">
                <img src="/images/produtos/bebidas/aloe-vera-gel/aloe-vera-gel-forever.png" alt="Aloe Vera Gel" className="w-full h-full object-contain p-8 drop-shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-aloe-900/90 to-transparent flex flex-col justify-end p-8">
                  <div className="inline-flex items-center gap-1 text-forever-yellow mb-3">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-2xl font-heading font-bold text-white mb-2 leading-tight">"A verdadeira pureza da planta para a sua casa."</p>
                  <p className="text-forever-yellow font-bold uppercase tracking-wider text-sm mt-2">- Garantia de Qualidade</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
