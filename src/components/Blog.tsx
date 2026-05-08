import { motion } from "motion/react";
import { ArrowRight, BookOpen } from "lucide-react";
// Link removed for Astro migration
import { blogPosts } from "../lib/blog-data";

export default function Blog() {
  const homePosts = blogPosts.slice(0, 3);
  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-aloe-600 uppercase mb-3">Conteúdo Especializado</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold font-heading text-aloe-900 mb-6">
            Jornal da Saúde e Bem-Estar
          </h3>
          <p className="text-gray-600 text-lg">
            Dicas, tendências e informações valiosas sobre o poder da babosa e oportunidades de carreira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {homePosts.map((post, idx) => {
            const Icon = post.icon;
            return (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-aloe-900/10 overflow-hidden transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-aloe-900 flex items-center gap-2 uppercase tracking-wide border border-white/50">
                    <Icon className="w-4 h-4 text-forever-yellow-dark" />
                    {post.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold font-heading text-aloe-900 mb-3 leading-tight group-hover:text-aloe-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>

                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-aloe-600 hover:text-aloe-800 uppercase tracking-wide group/btn border-t border-gray-100 pt-4"
                  >
                    Ler Artigo Completo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-50 border-2 border-gray-200 text-aloe-900 hover:border-aloe-600 hover:bg-aloe-50 rounded-xl font-bold transition-all shadow-sm"
          >
            <BookOpen className="w-5 h-5" />
            Ver Todos os Artigos
          </a>
        </div>
      </div>
    </section>
  );
}

