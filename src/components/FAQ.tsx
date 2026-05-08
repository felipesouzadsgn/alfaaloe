import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "../lib/utils";
import { trackWhatsAppClick } from "../lib/tracking";

const faqs = [
  {
    question: "Os produtos da Forever Living são naturais?",
    answer: "Sim, a Forever Living é a maior plantadora e processadora global de Aloe Vera e prioriza o poder da natureza. Nossos principais produtos utilizam o gel 100% puro do interior da folha da babosa, livre de conservantes artificiais agressivos, estabilizado através de um processo exclusivo que garante todos os nutrientes."
  },
  {
    question: "Como faço para comprar os produtos com segurança?",
    answer: "Você pode solicitar o catálogo ou realizar seus pedidos diretamente comigo, seu Especialista e Distribuidor Oficial Autorizado. Basta clicar em qualquer botão de WhatsApp na página, me enviar uma mensagem, e eu auxiliarei na escolha correta e realizarei o envio seguro para sua casa pela logística oficial da montadora."
  },
  {
    question: "Por que a Aloe Vera da Forever é diferente?",
    answer: "Nós controlamos todo o processo, 'da planta, para o produto, para você'. Utilizamos apenas a parte mais interna da folha de Aloe Barbadensis Miller (a espécie mais potente). Nossas bebidas de Aloe Vera possuem a prestigiada certificação IASC, sendo garantidos com até 99,7% de pureza do gel interior da folha."
  },
  {
    question: "Como funciona a oportunidade de negócio (FBO)?",
    answer: "Ao se tornar um Forever Business Owner (FBO), você passa a adquirir produtos com margens de desconto escalonáveis (variando de 5% a 48%) direto da fábrica. Além do lucro em revenda, você passa a ser bonificado sobre o volume de negócios movimentado pela equipe de revendedores e clientes que você construir, tudo sem limites geográficos."
  },
  {
    question: "Existem taxas mensais ou anuidades no negócio?",
    answer: "Não! O Plano de Marketing da Forever Living não exige pagamento de mensalidades, anuidades ou renovações. Além disso, o nível que você alcança em nosso plano de carreira é permanente, ou seja, você jamais sofrerá rebaixamento do seu percentual de desconto se reduzir temporariamente seu volume de vendas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappMsg = "Olá Especialista, li a seção de perguntas mas ainda tenho algumas dúvidas. Poderia me ajudar?";

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-aloe-600 uppercase mb-3">Tire suas Dúvidas</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-heading text-aloe-900 mb-6">
            Perguntas Frequentes
          </h3>
          <p className="text-gray-600 text-lg">
            Abaixo estão as dúvidas mais comuns sobre nossos produtos de Aloe Vera e o modelo de negócios da Forever Living.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border text-left border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between bg-white hover:bg-gray-50 focus:outline-none transition-colors"
              >
                <h4 className="text-lg md:text-xl font-bold font-heading text-aloe-900 pr-8 text-left">
                  {faq.question}
                </h4>
                <div 
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-forever-yellow rotate-180' : 'bg-aloe-50 text-aloe-600'}`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-6 text-gray-600 leading-relaxed font-medium border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 font-medium mb-6">Não encontrou a resposta que procurava?</p>
          <a
            href={createWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => trackWhatsAppClick(e, 'faq_cta')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-aloe-900 text-white rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-lg shadow-aloe-900/20"
          >
            <MessageCircle className="w-5 h-5" />
            Pergunte ao Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
