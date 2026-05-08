import { motion } from "motion/react";
import { TrendingUp, Globe2, Briefcase, ChevronRight } from "lucide-react";
import { createWhatsAppLink } from "../lib/utils";

export default function BusinessOpportunity() {
  const whatsappMsg = "Olá, vi a apresentação sobre o Negócio Forever e quero saber como me tornar um Empreendedor Oficial (FBO) com o seu patrocínio.";

  return (
    <section className="py-24 bg-forever-yellow text-aloe-900 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-white opacity-20 rounded-full blur-[80px] -z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aloe-900 text-forever-yellow text-sm font-extrabold tracking-widest uppercase mb-4 shadow-md">
                Torne-se um Empreendedor
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight mb-6">
                Construa seu negócio em mais de 160 países.
              </h2>
              <p className="text-xl text-aloe-900/80 font-medium leading-relaxed">
                Mais do que produtos: um modelo de negócios comprovado e consolidado há mais de 45 anos. Sem limites geográficos, com ganhos atrelados ao seu próprio ritmo e empenho.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/40 border border-white/60 p-6 rounded-2xl backdrop-blur-sm shadow-xl shadow-aloe-900/5 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-aloe-900 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-forever-yellow" />
                </div>
                <h4 className="text-xl font-bold mb-2">Margens Fortes</h4>
                <p className="text-aloe-900/80 text-sm font-medium">Inicie como Cliente Preferencial (5%) e escale os lucros sobre revenda para até 48%.</p>
              </div>
              <div className="bg-white/40 border border-white/60 p-6 rounded-2xl backdrop-blur-sm shadow-xl shadow-aloe-900/5 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-aloe-900 rounded-xl flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6 text-forever-yellow" />
                </div>
                <h4 className="text-xl font-bold mb-2">Expansão de Rede</h4>
                <p className="text-aloe-900/80 text-sm font-medium">Escalabilidade real e global. Construa sua equipe e receba bônus estruturados sobre as vendas do grupo.</p>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={createWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 bg-aloe-900 hover:bg-black text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-aloe-900/30"
              >
                Quero ser FBO Patrocinado
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative w-full"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-[4/5] sm:aspect-square bg-white">
               <img 
                 src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000&auto=format&fit=crop" 
                 alt="Oportunidade Forever Living" 
                 className="w-full h-full object-cover mix-blend-multiply" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-aloe-900 via-aloe-900/60 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-12">
                 <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-forever-yellow mb-3 sm:mb-4 shrink-0" />
                 <p className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 sm:mb-3 leading-tight">
                   Mentoria Passo a Passo
                 </p>
                 <p className="text-aloe-50 text-base sm:text-lg max-w-sm">
                   Acesse nossos manuais práticos e entenda as metas para alcançar ativamente a qualificação e o sucesso financeiro.
                 </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
