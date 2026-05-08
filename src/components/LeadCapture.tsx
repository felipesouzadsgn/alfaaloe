import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Phone } from "lucide-react";
import { createWhatsAppLink } from "../lib/utils";
import { trackFormSubmit } from "../lib/tracking";

export default function LeadCapture() {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "", interest: "produtos" });

  const msg = formData.interest === "produtos" 
    ? `Olá, Especialista! Me chamo ${formData.name}. Meu e-mail é ${formData.email} e WhatsApp ${formData.whatsapp}. Gostaria de receber os catálogos dos produtos de Aloe Vera e suplementos.`
    : `Olá, Especialista! Me chamo ${formData.name}. Meu e-mail é ${formData.email} e WhatsApp ${formData.whatsapp}. Tenho interesse na plataforma de negócios (FBO) da Forever Living.`;

  const whatsappUrl = createWhatsAppLink(msg);

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-x-0 bottom-0 h-64 bg-aloe-50 -z-10"></div>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-white border border-gray-100"
        >
          <div className="lg:w-5/12 bg-aloe-900 p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute right-0 top-0 w-64 h-64 bg-forever-yellow opacity-10 rounded-full blur-[60px] -mr-10 -mt-10 pointer-events-none"></div>
             
             <div>
               <Phone className="w-12 h-12 mb-6 text-forever-yellow" />
               <h3 className="text-3xl font-extrabold font-heading mb-4 leading-tight">Fale com seu Especialista</h3>
               <p className="text-aloe-50 font-medium mb-8 opacity-90 leading-relaxed">
                 Preencha os dados e seja redirecionado imediatamente para o WhatsApp. Terei o prazer em apresentar as melhores opções.
               </p>
             </div>
             
             <div className="text-sm font-semibold text-forever-yellow border-t border-aloe-600/50 pt-6 mt-8">
               Disponível para orientações de consumo de Aloe Vera e mentoria para negócios no Brasil.
             </div>
          </div>

          <div className="lg:w-7/12 p-8 lg:p-14">
            <form action="https://formsubmit.co/alfaaloe.flp@gmail.com" method="POST" className="space-y-6" onSubmit={() => trackFormSubmit('lead_capture_home', formData)}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={whatsappUrl} />
              <input type="hidden" name="_subject" value="Novo Lead - Forever Living" />
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: João da Silva"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-aloe-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Seu E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ex: joao@email.com"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-aloe-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Seu WhatsApp</label>
                  <input 
                    type="tel" 
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-aloe-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-3">O que você procura?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className={`cursor-pointer rounded-xl border-2 px-4 py-4 flex items-center transition-all ${formData.interest === 'produtos' ? 'border-aloe-600 bg-aloe-50 text-aloe-900 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200 text-gray-600'}`}>
                    <input 
                      type="radio" 
                      name="interest" 
                      value="produtos"
                      checked={formData.interest === 'produtos'}
                      onChange={() => setFormData({ ...formData, interest: 'produtos' })}
                      className="hidden"
                    />
                    <div className="flex flex-col">
                      <span className="font-extrabold text-sm uppercase tracking-wide">Comprar Produtos</span>
                      <span className="text-xs font-medium text-gray-500 mt-1">Sucos de Aloe Vera e Cuidados</span>
                    </div>
                  </label>
                  
                  <label className={`cursor-pointer rounded-xl border-2 px-4 py-4 flex items-center transition-all ${formData.interest === 'negocio' ? 'border-aloe-600 bg-aloe-50 text-aloe-900 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200 text-gray-600'}`}>
                    <input 
                      type="radio" 
                      name="interest" 
                      value="negocio"
                      checked={formData.interest === 'negocio'}
                      onChange={() => setFormData({ ...formData, interest: 'negocio' })}
                      className="hidden"
                    />
                    <div className="flex flex-col">
                      <span className="font-extrabold text-sm uppercase tracking-wide">Iniciar Negócio</span>
                      <span className="text-xs font-medium text-gray-500 mt-1">Quero ser um FBO Autorizado</span>
                    </div>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 flex items-center justify-center gap-2 bg-forever-yellow hover:bg-[#e0b000] text-aloe-900 py-5 rounded-xl font-extrabold uppercase tracking-wider transition-transform active:scale-[0.98] shadow-lg shadow-forever-yellow/30"
              >
                Prosseguir para o WhatsApp
                <Send className="w-5 h-5 ml-1" />
              </button>
            </form>
            <p className="text-xs text-center text-gray-400 font-medium mt-6 uppercase tracking-wider">Seus dados não serão compartilhados com terceiros.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
