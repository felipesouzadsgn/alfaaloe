import { motion } from "motion/react";
import { CheckCircle2, Award, HeartHandshake } from "lucide-react";

export default function AboutFBO() {
  return (
    <section className="py-24 bg-aloe-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-2/5"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-aloe-500 rounded-full blur-[60px] opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                alt="Especialista Forever Living"
                className="rounded-t-full rounded-b-3xl object-cover w-full h-full relative z-10 border-4 border-white shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-3/5"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-aloe-900 mb-6">
              Sua Saúde Guiada por quem Conhece.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Como <strong>Forever Business Owner (FBO)</strong>, meu
              compromisso não é apenas entregar um produto, mas oferecer uma
              consultoria de saúde integrativa. A Forever Living possui as
              maiores plantações de Aloe Vera do mundo e certificados de pureza
              internacionais (IASC).
            </p>

            <div className="space-y-4 max-w-md">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-aloe-500 shrink-0 mt-1" />
                <p className="text-gray-700">
                  <strong>Produtos Originais e Lacrados:</strong> Garantia
                  direta da fábrica, sem intermediários não autorizados.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-aloe-500 shrink-0 mt-1" />
                <p className="text-gray-700">
                  <strong>Orientação Consultiva:</strong> Entenda como utilizar
                  o Aloe Vera e suplementos de forma potencializada.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-aloe-500 shrink-0 mt-1" />
                <p className="text-gray-700">
                  <strong>Acompanhamento Personalizado:</strong> Suporte
                  contínuo via WhatsApp para suas dúvidas e novos pedidos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
