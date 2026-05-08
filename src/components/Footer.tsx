export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10 text-gray-400 py-12 text-sm text-center">
      <div className="container mx-auto px-6">
        <p className="mb-4 text-gray-300 font-medium">Este site é gerido por um Distribuidor Independente (FBO) da Forever Living Products.</p>
        <p className="max-w-3xl mx-auto mb-8 text-xs opacity-70">
          As declarações contidas neste site não foram avaliadas por órgãos regulares de saúde locais de forma a diagnosticar, mitigar, tratar, curar ou prevenir qualquer doença. Para orientações médicas, consulte um profissional de saúde qualificado. A exibição do selo FBO garante a aderência às Diretrizes Oficiais Corporativas de vendas diretas.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-8 uppercase tracking-widest text-xs font-bold font-heading text-gray-500">
          <a href="#" className="hover:text-aloe-400 transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-aloe-400 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-aloe-400 transition-colors">Política de Privacidade</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Especialista Forever. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
