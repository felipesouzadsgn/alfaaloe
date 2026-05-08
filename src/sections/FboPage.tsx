import { motion } from "motion/react";
import { TrendingUp, Globe2, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";
import { createWhatsAppLink } from "../lib/utils";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadCapture from "../components/LeadCapture";
import AboutFBO from "../components/AboutFBO";
// HashLink removed for Astro migration
// Helmet removed for Astro migration

export default function FboPage() {
  const whatsappMsg = "Olá, quero preencher meu cadastro e me tornar um Empreendedor Oficial da Forever Living.";
  
  return (
    <div className="min-h-screen bg-white">

      <Header />
      
      <main>
        {/* FBO Hero */}
        <section className="relative overflow-hidden bg-aloe-900 min-h-[85vh] flex items-center">
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-aloe-900 to-transparent z-10"></div>
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2000&auto=format&fit=crop" 
              alt="Empreendedorismo e Sucesso" 
              className="w-full h-full object-cover mix-blend-overlay opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-aloe-900/60 via-transparent to-aloe-900"></div>
          </div>

          <div className="container mx-auto px-6 relative z-20 pt-20 pb-32 text-center max-w-4xl">
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
             >
                <div className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-forever-yellow/20 border border-forever-yellow/40 text-forever-yellow text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                  Forever Business Owner
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-white leading-tight mb-8">
                  Construa seu império com a <span className="text-forever-yellow">Forever Living.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-aloe-50 mb-12 font-medium leading-relaxed max-w-3xl mx-auto opacity-90">
                  Um modelo consolidado em 160 países. Ganhos escaláveis, descontos agressivos de até 48% e mentoria completa com o Especialista.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a 
                    href={createWhatsAppLink(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 w-full sm:w-auto bg-forever-yellow hover:bg-forever-yellow-dark text-aloe-900 rounded-2xl font-bold text-xl transition-transform hover:-translate-y-1 shadow-xl shadow-forever-yellow/20"
                  >
                    Quero Ser FBO
                    <ChevronRight className="w-6 h-6" />
                  </a>
                  <a 
                    href="#detalhes"
                    className="inline-flex items-center justify-center px-10 py-5 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-xl transition-colors border border-white/20 backdrop-blur-md"
                  >
                    Entenda o Negócio
                  </a>
                </div>
             </motion.div>
          </div>
        </section>

        {/* Details Section */}
        <section id="detalhes" className="py-24 bg-gray-50 relative z-30 -mt-10 rounded-t-[3rem]">
           <div className="container mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-aloe-900 mb-6">
                  Estrutura de Resultados
                </h2>
                <p className="text-gray-600 text-lg">
                  Esqueça altos investimentos em estoque ou estrutura física. O modelo Forever é focado em lucro, escalabilidade e desenvolvimento de equipe.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl shadow-aloe-900/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 bg-aloe-50 rounded-2xl flex items-center justify-center mb-6 text-aloe-600">
                     <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-aloe-900 mb-4">Margens Incomparáveis</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Iniciando como Cliente Preferencial você já poupa 5%. Ao atingir o nível de Assistente de Supervisor, sua margem escala para grandes ganhos com vendas rápidas.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm font-bold text-gray-700"><CheckCircle2 className="w-5 h-5 text-forever-yellow shrink-0" /> Sem limites de ganhos mensais</li>
                    <li className="flex items-center gap-2 text-sm font-bold text-gray-700"><CheckCircle2 className="w-5 h-5 text-forever-yellow shrink-0" /> Produtos de altíssimo giro</li>
                  </ul>
                </div>
                
                <div className="bg-aloe-900 text-white p-8 lg:p-10 rounded-[2rem] shadow-2xl border border-aloe-800 hover:-translate-y-2 transition-transform duration-300 transform lg:scale-105 z-10">
                  <div className="w-16 h-16 bg-forever-yellow rounded-2xl flex items-center justify-center mb-6 text-aloe-900">
                     <Globe2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Expansão de Rede Global</h3>
                  <p className="text-aloe-50 leading-relaxed mb-6">Você não vende apenas o produto, mas a oportunidade. Aloque novos FBOs em sua equipe e passe a receber bônus de liderança vitalícios sobre a produtividade da rede.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-forever-yellow shrink-0" /> Ganhos Unilevel em 160 países</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-forever-yellow shrink-0" /> Plano de Carreira Definido</li>
                  </ul>
                </div>

                <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl shadow-aloe-900/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 bg-aloe-50 rounded-2xl flex items-center justify-center mb-6 text-aloe-600">
                     <Briefcase className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-aloe-900 mb-4">Mentoria de Ponta a Ponta</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Você será patrocinado e treinado. Fornecemos os scripts de vendas e os catálogos.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm font-bold text-gray-700"><CheckCircle2 className="w-5 h-5 text-forever-yellow shrink-0" /> Materiais de mídia e PDF</li>
                    <li className="flex items-center gap-2 text-sm font-bold text-gray-700"><CheckCircle2 className="w-5 h-5 text-forever-yellow shrink-0" /> Reuniões semanais focadas</li>
                  </ul>
                </div>
              </div>
           </div>
        </section>

        {/* Blog Summary inside Landing Page */}
        <section className="py-20 bg-white">
           <div className="container mx-auto px-6">
              <div className="bg-aloe-50 rounded-[3rem] p-10 md:p-16 border border-aloe-100 flex flex-col md:flex-row items-center gap-12">
                 <div className="md:w-1/2">
                    <h2 className="text-sm font-bold tracking-widest text-aloe-600 uppercase mb-3">Conteúdo Exclusivo</h2>
                    <h3 className="text-4xl font-extrabold font-heading text-aloe-900 mb-6">Inteligência de Mercado para FBOs</h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                       Não basta vender, é preciso dominar o setor de saúde, nutrição e o plano de marketing. Nosso Hub de Conteúdo prepara nossos distribuidores para lidarem com as maiores objeções e educarem os clientes sobre o poder curativo do genuíno gel de Aloe Vera.
                    </p>
                    <a 
                       href="/#blog"
                       className="inline-block px-8 py-4 bg-white border-2 border-aloe-600 text-aloe-600 hover:bg-aloe-600 hover:text-white rounded-xl font-bold transition-colors uppercase tracking-wide"
                    >
                       Acessar Diário de Conteúdos
                    </a>
                 </div>
                 <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                       <img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400&auto=format&fit=crop" className="rounded-[2rem] w-64 h-80 object-cover rotate-3 shadow-2xl border-4 border-white" alt="Conteúdo Forever" />
                       <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop" className="rounded-[2rem] w-64 h-80 object-cover -rotate-6 absolute top-0 -left-12 shadow-2xl border-4 border-white" alt="Sucesso e Renda" />
                       <div className="absolute -bottom-8 right-0 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-center">
                          <p className="font-bold text-aloe-900">+50 Artigos e Materiais</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <AboutFBO />

        <LeadCapture />

      </main>

      <Footer />
    </div>
  );
}
