// React Router imports removed for Astro migration
import { ArrowLeft, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadCapture from "../components/LeadCapture";
import { createWhatsAppLink } from "../lib/utils";
import { trackWhatsAppClick } from "../lib/tracking";
import { blogPosts } from "../lib/blog-data";

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">

        <Header />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold text-aloe-900 mb-6">Artigo não encontrado.</h1>
          <a href="/" className="text-aloe-600 font-bold hover:underline">Voltar para a página inicial</a>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = post.icon;

  return (
    <div className="min-h-screen bg-[#f8fcf9]">

      <Header />
      
      <main>
        {/* Post Hero */}
        <div className="bg-aloe-900 border-b-8 border-forever-yellow relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
             <div className="absolute inset-0 bg-gradient-to-t from-aloe-900 via-aloe-900/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10 max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <a href="/blog" className="inline-flex items-center text-white hover:text-white font-bold text-sm uppercase tracking-widest bg-white/10 hover:bg-white/20 border border-white/30 px-5 py-2.5 rounded-full transition-all w-fit backdrop-blur-md shadow-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </a>
              
              <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-lg bg-black/20 backdrop-blur-md border border-white/10 text-forever-yellow font-bold text-sm tracking-widest uppercase shadow-sm">
                <Icon className="w-4 h-4" />
                {post.category}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-[1.1] mb-8">
              {post.title}
            </h1>
            
            <p className="text-xl text-aloe-50 font-medium leading-relaxed max-w-2xl opacity-90">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Post Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:font-extrabold prose-headings:text-aloe-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-aloe-900 prose-a:text-aloe-600">
              {post.content.map((block, idx) => {
                if (block.type === "paragraph") {
                  return <p key={idx} className="mb-6" dangerouslySetInnerHTML={{ __html: block.text }}></p>;
                }
                
                if (block.type === "heading") {
                  return <h2 key={idx} className="text-3xl mt-12 mb-6">{block.text}</h2>;
                }
                
                if (block.type === "cta-product") {
                  return (
                    <div key={idx} className="my-12 p-8 bg-aloe-50 border-2 border-aloe-100 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 shadow-lg shadow-aloe-900/5">
                      <div className="md:w-2/3">
                        <h4 className="text-xl font-bold text-aloe-900 mb-3 font-heading uppercase tracking-wide">Ficou Interessado?</h4>
                        <p className="text-gray-700 m-0 font-medium">{block.text}</p>
                      </div>
                      <div className="md:w-1/3 w-full text-right">
                        <a 
                          href={createWhatsAppLink(block.msg || "")} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => trackWhatsAppClick(e, `blog_post_cta_${post.slug}`)}
                          className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-6 py-4 bg-aloe-900 text-white hover:bg-aloe-800 rounded-xl font-bold shadow-md transition-transform hover:-translate-y-1"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Consultar Agora
                        </a>
                      </div>
                    </div>
                  );
                }

                if (block.type === "cta-business") {
                  return (
                    <div key={idx} className="my-12 p-8 bg-forever-yellow border-2 border-[#e0b000] rounded-[2rem] flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-forever-yellow/20">
                      <div className="md:w-2/3">
                        <h4 className="text-2xl font-extrabold text-aloe-900 mb-3 font-heading uppercase tracking-wide">Seja um Diferencial</h4>
                        <p className="text-aloe-900/80 m-0 font-bold">{block.text}</p>
                      </div>
                      <div className="md:w-1/3 w-full">
                        <a 
                          href="/seja-fbo" 
                          className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 bg-aloe-900 text-white hover:bg-black rounded-xl font-bold shadow-md transition-transform hover:-translate-y-1"
                        >
                          <Send className="w-5 h-5" />
                          Quero ser FBO
                        </a>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </article>
          </div>
        </section>

        {/* Floating Divider */}
        <div className="container mx-auto px-6 py-12">
            <div className="border-t-2 border-gray-100 max-w-4xl mx-auto flex justify-center -mt-3">
              <div className="bg-[#f8fcf9] px-6 text-aloe-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
        </div>

        <LeadCapture />
      </main>

      <Footer />
    </div>
  );
}
