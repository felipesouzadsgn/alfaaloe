import { motion } from "motion/react";
import { Download, MessageCircle, FileText, ChevronRight } from "lucide-react";
import { createWhatsAppLink } from "../lib/utils";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadCapture from "../components/LeadCapture";
// Helmet removed for Astro migration

const catalogItems = [
  {
    category: "Bebidas",
    description: "A essência da plantação para o seu copo com nossa linha pioneira de bebidas nutritivas.",
    products: [
      { name: "Aloe Vera Gel", desc: "O gel de aloe vera puro da empresa, reconhecido como uma escolha nutritiva e funcional para o dia a dia.", image: "/images/produtos/bebidas/aloe-vera-gel/aloe-vera-gel-forever.png" },
      { name: "Aloe Berry Nectar", desc: "Bebida feita do puro gel de Aloe, acrescida de um toque suave e adocicado de uvas do monte (cranberry) e maçã.", image: "/images/produtos/bebidas/aloe-berry-nectar/aloe-berry-nectar-forever.png" },
      { name: "Forever Aloe Bits N' Peaches", desc: "Bebida feita do puro gel de Aloe, contendo um saboroso toque de pêssego e pedaços de Aloe vera.", image: "/images/produtos/bebidas/aloe-peaches/aloe-peaches-forever.png" },
      { name: "Forever Freedom", desc: "Bebida de puro gel de Aloe vera acrescida de suco de laranja." },
      { name: "Aloe Mango", desc: "Variante da bebida de aloe vera com sabor tropical de manga.", image: "/images/produtos/bebidas/aloe-mango/aloe-mango-forever.png" },
      { name: "Forever Active Boost (FAB)", desc: "Bebida energética pioneira fabricada no Brasil, com fórmula à base de acerola, cranberry, açaí, guaraná, vitaminas B e taurina.", image: "/images/produtos/bebidas/active-boost/forever-active-boost.png" }
    ]
  },
  {
    category: "Nutrição e Suplementos",
    description: "Suplementação premium para complementar sua dieta diária e melhorar o funcionamento do corpo.",
    products: [
      { name: "Forever Arctic-Sea", desc: "Suplemento fonte de Ômega 3 e Ômega 9, extraído de óleos de peixes de águas frias, lula e azeite de oliva." },
      { name: "Forever Calcium", desc: "Suplemento vitamínico e mineral com malato dicálcico de alta absorção, magnésio, zinco, manganês e cobre." },
      { name: "Forever C", desc: "Suplemento com 45mg de Vitamina C com farelo de aveia e mel, auxiliando na formação de colágeno." },
      { name: "Collagen", desc: "Colágeno hidrolisado e vitamina C, para suporte da hidratação da pele, prevenção de rugas e metabolismo." },
      { name: "Forever Daily", desc: "Mistura abrangente que fornece 24 nutrientes essenciais, incluindo vitaminas e minerais." },
      { name: "Forever Lite Ultra", desc: "Suplemento de proteína isolada de soja (baunilha ou chocolate) que fornece aminoácidos essenciais." },
      { name: "Forever Fiber", desc: "Suplemento de fibras projetado para atuar como uma solução para a saúde do trato intestinal." },
      { name: "Forever Immune Gummy", desc: "Gomas sabor manga focadas na imunidade, ricas em vitaminas A, C, D e b6, livre de glúten." },
      { name: "Forever Move", desc: "Suplemento especialmente voltado para a saúde e mobilidade articular." },
      { name: "Forever Argi+", desc: "L-Arginina e vitaminas que auxilia o sistema imunológico, saúde óssea e vitalidade no dia a dia." },
      { name: "Forever iVision", desc: "Suplemento de luteína e zeaxantina, para prevenir fadiga ocular e danos nocivos da luz azul de telas." },
      { name: "Immublend", desc: "Suplemento focado no suporte contínuo ao sistema imunológico." },
      { name: "Forever Garlic Thyme", desc: "Benefícios do alho e do tomilho em cápsulas gelatinosas que não deixam odor." },
      { name: "Forever UltraBody", desc: "Suplemento antioxidante contendo vitaminas A, E e cromo para fortalecer a imunidade, pele e cabelos." },
      { name: "Forever Royal Jelly", desc: "Geleia real liofilizada." },
      { name: "Forever Bio Active e V-Force", desc: "Suplementos focados em nutrição avançada e energia metabólica." }
    ]
  },
  {
    category: "Cuidados Pessoais",
    description: "Produtos fundamentais para o ritual diário de banho e cuidados gerais com a máxima pureza do Aloe.",
    products: [
      { name: "Aloe Avocado Face & Body Soap", desc: "Sabonete feito com manteiga de abacate e aloe vera que limpa poros e nutre a pele seca.", image: "/images/produtos/cuidados-pessoais/aloe-avocado-face-body-soap/aloe-avocado-face-body-soap.png" },
      { name: "Forever Bright Toothgel", desc: "Gel dental livre de flúor agressivo, focado na higiene bucal com ingredientes naturais.", image: "/images/produtos/cuidados-pessoais/bright-toothgel/bright-toothgel.png" },
      { name: "Aloe Ever-Shield Deodorant", desc: "Desodorante diário em formato de bastão.", image: "/images/produtos/cuidados-pessoais/aloe-ever-shield-deodorant/aloe-ever-shield-deodorant.png" },
      { name: "Aloe Liquid Soap", desc: "Sabonete líquido feito com 100% de gel estabilizado de aloe, limpa e deixa a pele macia.", image: "/images/produtos/cuidados-pessoais/aloe-liquid-soap/aloe-liquid-soap.png" },
      { name: "Aloe-Jojoba Shampoo", desc: "Xampu suave revitalizante de aloe vera e jojoba.", image: "/images/produtos/cuidados-pessoais/aloe-jojoba-shampoo/aloe-jojoba-shampoo.png" },
      { name: "Aloe-Jojoba Conditioning Rinse", desc: "Condicionador que utiliza aloe, óleos de jojoba, macadâmia e lavanda para retenção de umidade.", image: "/images/produtos/cuidados-pessoais/aloe-jojoba-conditioner/aloe-jojoba-conditioner.png" },
      { name: "Aloe Lips (com Jojoba)", desc: "Bastão labial para hidratação e proteção contra efeitos do sol e frio.", image: "/images/produtos/cuidados-pessoais/aloe-lips/aloe-lips.png" },
      { name: "Aloe Sunscreen", desc: "Protetor solar Fator 30 à base de aloe vera, resistente à água e rico em hidratação.", image: "/images/produtos/cuidados-pessoais/aloe-sunscreen/aloe-sunscreen.png" },
      { name: "Aloe First", desc: "Solução versátil em spray para cuidados variados da pele.", image: "/images/produtos/cuidados-pessoais/aloe-first/aloe-first.png" },
      { name: "Gentleman’s Pride", desc: "Loção pós-barba sem álcool, enriquecida com aloe, alecrim e camomila.", image: "/images/produtos/cuidados-pessoais/gentlemans-pride/gentlemans-pride.png" },
      { name: "Aloe Body Wash", desc: "Sabonete líquido suave para todo o corpo.", image: "/images/produtos/cuidados-pessoais/aloe-body-wash/image.png" },
      { name: "Nourishing Hair Oil", desc: "Óleo capilar nutritivo com aloe e seis óleos botânicos, livre de silicone pesado." }
    ]
  },
  {
    category: "Beleza e Skincare",
    description: "As melhores fórmulas (Linha Rosto, Corpo e Sonya) para proteger, hidratar e prevenir sinais do tempo.",
    products: [
      { name: "Aloe Activator", desc: "Tônico composto por 99% de gel de Aloe vera, usado como hidratante e adstringente nutritivo.", image: "/images/produtos/beleza/aloe-activator/aloe-activator-forever.png" },
      { name: "Mask Powder", desc: "Pó de albumina e camomila que, com Aloe Activator, cria loção tensora para limpeza dos poros." },
      { name: "Aloe Propolis Creme", desc: "Creme espesso que une aloe vera e própolis, ideal para revitalizar peles muito ressecadas.", image: "/images/produtos/beleza/aloe-propolis-creme/aloe-propolis-creme.png" },
      { name: "Aloe Vera Gelly", desc: "Gel puro de aloe vera para aplicação e cuidado tópico da pele.", image: "/images/produtos/beleza/aloe-vera-gelly/aloe-vera-gelly-forever.png" },
      { name: "Aloe Heat Lotion", desc: "Loção com mentol e eucalipto para massagens relaxantes e alívio de músculos cansados.", image: "/images/produtos/beleza/aloe-heat-lotion/aloe-heat-lotion-forever.png" },
      { name: "Aloe MSM Gel", desc: "Gel relaxante que combina enxofre orgânico (MSM) com aloe vera estabilizada." },
      { name: "Aloe Scrub", desc: "Produto para dermoabrasão com microesferas de jojoba, remove células mortas da pele.", image: "/images/produtos/beleza/aloe-scrub/aloe-scrub-forever.png" },
      { name: "Aloe Moisturizing Lotion", desc: "Loção encorpada contendo colágeno, elastina e camomila, para hidratação do corpo inteiro.", image: "/images/produtos/beleza/aloe-moisturizing-lotion/aloe-moisturizing-lotion-forever.png" },
      { name: "Forever Alpha-E Factor", desc: "Loção antioxidante rica com vitaminas A, C, E, óleo de borragem e bisabolol para o rosto." },
      { name: "R3 Factor", desc: "Loção com hidroxiácidos, chá verde e colágeno para escamar e suavizar linhas de expressão." },
      { name: "Forever Marine Mask", desc: "Máscara de limpeza com minerais marinhos, mel e pepino que equilibra a pele." },
      { name: "Máscara de Aloe bio-cellulose", desc: "Máscara biodegradável ultrafina infundida com castanha da índia e chá verde." },
      { name: "Aloe Bath Gelée", desc: "Gel de banho com pH fisiológico (5.5) e diversos extratos botânicos para seu banho." },
      { name: "Aloe Sunscreen Spray", desc: "Protetor solar fator 30 em formato de spray prático." },
      { name: "Sonya Hydrating Nourishing Serum", desc: "Loção serosa leve que conserva a hidratação da pele utilizando extratos de chá branco.", image: "/images/produtos/cuidados-pessoais/hydrating-serum/hydrating-serum.png" },
      { name: "Batons Matte Sonya", desc: "Maquiagem de longa duração que hidrata sem craquelar." },
      { name: "Forever Alofa & Forever Malosi", desc: "Linha de fragrâncias finas unissex recém-lançadas." }
    ]
  },
  {
    category: "Packs (Combos)",
    description: "Kits de produtos cuidadosamente agrupados voltados para negócios prósperos e saúde total de sua família.",
    products: [
      { name: "Business Pack / Fast Start", desc: "Combos estratégicos voltados para acelerar entrada e ganho de FBOs no plano de carreira." },
      { name: "Pack Clean 9 (C9)", desc: "Kit focado em gerenciamento de peso e saúde metabólica para limpeza orgânica em 9 dias." },
      { name: "Vital5", desc: "Pacote de nutrição ortomolecular que inclui os 5 suplementos fundamentais para resete nutricional." },
      { name: "Super 5", desc: "Kit que agrupa os campeões de vendas em higiene e cuidados essenciais familiares." },
      { name: "Top 5", desc: "Exelente mostruário que permite compartilhar facilmente os benefícios evidentes com famílias." },
      { name: "Together Forever", desc: "Conjunto familiar elaborado para aumento significativo de bem-estar corporativo." }
    ]
  }
];

export default function CatalogPage() {
  const generalMsg = "Olá, Especialista. Entrei na página do Catálogo e gostaria de receber o PDF completo oficial da Forever Living (2026/2027) no meu WhatsApp.";

  return (
    <div className="min-h-screen bg-[#f8fcf9]">

      <Header />
      
      <main>
        {/* Header Hero */}
        <section className="bg-aloe-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-6">
              Catálogo Completo <span className="text-forever-yellow">Forever</span>
            </h1>
            <p className="text-xl text-aloe-100 font-medium leading-relaxed mb-8">
              Conheça a seleção completa de produtos para a saúde, bem-estar e controle de peso, elaborados com a mais pura Aloe Vera do planeta.
            </p>
            <a 
              href={createWhatsAppLink(generalMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-forever-yellow hover:bg-[#e0b000] text-aloe-900 rounded-2xl font-extrabold uppercase tracking-widest transition-transform hover:-translate-y-1 shadow-xl shadow-forever-yellow/20"
            >
              <Download className="w-5 h-5" />
              Solicitar Tabela PDF via WhatsApp
            </a>
          </div>
        </section>

        {/* Categories & Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            {catalogItems.map((category, catIdx) => (
              <motion.div 
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-20 last:mb-0"
              >
                <div className="flex items-start md:items-center gap-4 mb-8">
                  <div className="w-12 h-12 shrink-0 bg-aloe-50 rounded-2xl flex items-center justify-center text-aloe-600 border border-aloe-100">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold font-heading text-aloe-900">{category.category}</h2>
                    <p className="text-gray-600 font-medium mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.products.map((prod, prodIdx) => {
                    const buyMsg = `Olá, Especialista. Encontrei no catálogo virtual e quero saber valores e como comprar: ${prod.name}`;
                    return (
                      <div key={prodIdx} className="bg-gray-50 border-2 border-transparent hover:border-aloe-200 rounded-2xl p-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-aloe-900/5 group flex flex-col justify-between">
                        <div>
                           {prod.image && (
                             <div className="w-full h-48 bg-white rounded-xl mb-5 p-4 flex items-center justify-center border border-gray-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                               <img src={prod.image} alt={prod.name} className="max-h-full object-contain drop-shadow-md" />
                             </div>
                           )}
                           <div className="flex justify-between items-start mb-3">
                             <h3 className="text-xl font-bold text-gray-900">{prod.name}</h3>
                             {prod.tag && (
                               <span className="bg-forever-yellow/20 text-forever-yellow-dark text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide whitespace-nowrap ml-2">
                                 {prod.tag}
                               </span>
                             )}
                           </div>
                           <p className="text-sm text-gray-600 leading-relaxed mb-6">
                             {prod.desc}
                           </p>
                        </div>
                        <a 
                          href={createWhatsAppLink(buyMsg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto flex items-center justify-between text-aloe-600 font-bold group/btn"
                        >
                          <span className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Consultar Valor e Pedir
                          </span>
                          <ChevronRight className="w-5 h-5 bg-aloe-100 rounded-full p-0.5 group-hover/btn:translate-x-1 group-hover/btn:bg-aloe-600 group-hover/btn:text-white transition-all" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Banner for Delivery */}
        <section className="bg-forever-yellow py-12">
          <div className="container mx-auto px-6 text-center text-aloe-900">
            <h3 className="text-2xl font-extrabold font-heading mb-2">Entregas Rápidas e Garantidas</h3>
            <p className="font-medium opacity-90 max-w-2xl mx-auto">
              Ao fechar o pedido pelo WhatsApp Oficial, você tem a garantia de produtos que partem diretamente dos centros de distribuição autorizados da Forever Living Brasil para sua residência.
            </p>
          </div>
        </section>

        <LeadCapture />
      </main>

      <Footer />
    </div>
  );
}
