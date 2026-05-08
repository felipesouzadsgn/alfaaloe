import { motion } from "motion/react";
import { MessageCircle, Droplet, Sparkles, Activity, Scale } from "lucide-react";
import { createWhatsAppLink } from "../lib/utils";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "bebidas",
    title: "Sucos e Géis de Aloe",
    icon: Droplet,
    image: "/images/produtos/bebidas/aloe-vera-gel/aloe-vera-gel-forever.png",
    description: "Nossa essência. Gel de Aloe Vera 99,7% puro, sem conservantes. O icônico galão amarelo e suas variações com frutas naturais para sua imunidade e digestão.",
    products: ["Forever Aloe Vera Gel", "Aloe Berry Nectar", "Aloe Peaches"],
    msg: "Olá, gostaria de acessar o catálogo da linha de Sucos de Aloe Vera."
  },
  {
    id: "peso",
    title: "Gerenciamento de Peso",
    icon: Scale,
    description: "Programas globais para desintoxicação e ajuste corporal. Uma abordagem limpa e natural para alcançar o bem-estar e a disposição ideal.",
    products: ["Programa Clean 9 (C9)", "Programa F15", "V-Force"],
    msg: "Olá, quero saber mais sobre os kits de transformação (Clean 9) e o catálogo de gerenciamento de peso."
  },
  {
    id: "nutricao",
    title: "Suplementação Premium",
    icon: Activity,
    description: "Ingredientes colhidos da natureza e refinados pela ciência. Vitaminas, minerais e ômega 3 de altíssima biodisponibilidade para complementar sua rotina.",
    products: ["Forever Arctic Sea", "Forever Daily", "Forever Calcium"],
    msg: "Olá, tenho interesse na linha de Suplementos Premium (Arctic Sea, Daily, etc.)."
  },
  {
    id: "cuidados",
    title: "Cuidados Diários e Beleza",
    icon: Sparkles,
    image: "/images/produtos/beleza/aloe-vera-gelly/aloe-vera-gelly-forever.png",
    description: "Fórmulas à base de Aloe Vera que acalmam, hidratam e protegem. De sabonetes líquidos naturais ao famoso gel dental sem flúor.",
    products: ["Forever Bright Toothgel", "Aloe Lips", "Aloe Liquid Soap"],
    msg: "Olá, quero comprar produtos de cuidados diários como o gel dental e sabonete da Forever."
  }
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-[#f8fcf9] relative overflow-hidden">
      {/* Decorative nature subtle elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forever-yellow/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-aloe-500/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-aloe-600 uppercase mb-3">Pureza Certificada</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-heading text-aloe-900 mb-6">
            O Poder da Natureza
          </h3>
          <p className="text-gray-600 text-lg">
            Direto das nossas plantações para a sua casa. Selecione a linha do seu interesse e receba instruções completas no WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-3xl p-8 border-2 border-gray-100 hover:border-forever-yellow bg-white transition-all shadow-sm hover:shadow-2xl hover:shadow-aloe-900/5 relative overflow-hidden"
              >
                {/* Accent corner matching packaging */}
                <div className="absolute top-0 right-0 w-4 h-full bg-transparent group-hover:bg-forever-yellow transition-colors duration-300"></div>
                
                <div className="relative z-10 pr-6">
                  {cat.image ? (
                    <div className="w-24 h-24 mb-6 relative group-hover:scale-110 transition-transform duration-300">
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-contain drop-shadow-xl" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-aloe-50 text-aloe-600 flex items-center justify-center mb-6 group-hover:bg-aloe-600 group-hover:text-white transition-colors border border-aloe-100 group-hover:border-aloe-600">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  )}
                  
                  <h4 className="text-2xl font-bold font-heading text-aloe-900 mb-3">{cat.title}</h4>
                  <p className="text-gray-600 mb-6 min-h-[60px] leading-relaxed">
                    {cat.description}
                  </p>
                  
                  <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-xs font-bold text-aloe-600 uppercase tracking-widest mb-3">Linha em Destaque:</p>
                    <ul className="space-y-2">
                      {cat.products.map(prod => (
                        <li key={prod} className="flex items-center gap-3 text-gray-800 font-medium text-sm">
                          <div className="w-2 h-2 rounded-full bg-forever-yellow shrink-0"></div>
                          {prod}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/catalogo"
                    className="inline-flex items-center justify-center w-full py-3.5 mt-4 bg-white border-2 border-aloe-100 text-aloe-900 hover:border-aloe-600 hover:bg-aloe-50 rounded-xl font-bold transition-colors"
                  >
                    Ver Linha Completa
                  </Link>
                  
                  <a 
                    href={createWhatsAppLink(cat.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 mt-3 bg-aloe-900 text-white hover:bg-aloe-800 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-lg shadow-aloe-900/20"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Catálogo PDF WhatsApp
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
