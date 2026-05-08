# Projeto: Ecossistema de Leads Forever Living (foreveraloeveragel.com.br)

## Propósito do Site
Este ecossistema foi projetado de ponta a ponta para **Geração de Leads Qualificados e Vendas Consultivas** de produtos da marca Forever Living, além do recrutamento de novos parceiros (FBO - Forever Business Owner).

Toda a infraestrutura do site foi desenhada com foco na conversão via WhatsApp, retirando fricções de e-commerces tradicionais e fortalecendo o contato direto com um Especialista Autorizado.

## Estrutura de Páginas
O ecossistema é formado pelas seguintes frentes de conversão:
- **`/` (Landing Page):** Página principal (Home) com foco em vendas diretas e autoridade. Destaca as categorias de produtos e direciona para o WhatsApp ou para a seção de cadastro.
- **`/seja-fbo` (Seja FBO):** Landing page dedicada exclusivamente à captação de leads para o modelo de negócios da Forever Living, apresentando as margens, oportunidades e ganhos unilevel.
- **`/catalogo` (Catálogo):** Mostruário digital da linha completa (Aloe Vera, Suplementação, Emagrecimento, etc.) onde o usuário precisa chamar no WhatsApp para solicitar preços ou PDF oficial.
- **`/blog` e `/blog/:slug`:** Hub de conteúdo voltado para SEO (Tráfego Orgânico e SGE), educando o lead com artigos aprofundados para posteriormente convertê-lo.

---

## 1. Mapeamento de Palavras-Chave (Keyword Clustering 2026)

### A. Intenção Transacional (Fundo de Funil - Landing Pages)
Estas keywords devem ser aplicadas em campanhas de Google Ads (Search) e estrategicamente na Home e no Catálogo.
- `comprar aloe vera gel forever`
- `comprar suco de babosa forever living`
- `distribuidor oficial forever living whatsapp`
- `preço forever arctic sea`
- `representante forever living brasil`
- `comprar kit clean 9 forever`
- `seja um distribuidor forever living` (Para a página FBO)
- `cadastro fbo forever living` (Para a página FBO)

### B. Intenção Informacional e LSI (Conteúdo - Blog)
Keywords projetadas para SGE (Search Generative Experience) do Google e buscas de cauda longa (Long-tail).
- `benefícios do suco de babosa em jejum`
- `para que serve o forever aloe vera gel`
- `diferença entre aloe vera e babosa normal`
- `como funciona o negócio da forever living`
- `quanto ganha um FBO forever living`
- `melhor ômega 3 do mercado` (LSI para Arctic Sea)
- `como desintoxicar o corpo em 9 dias` (LSI para C9)

---

## 2. SEO On-Page Aplicado (Meta Titles e Descriptions)
As seguintes tags já foram configuradas no projeto via `react-helmet-async` de acordo com as normas de SEO 2026 (Copywriting + Limites de Caracteres):

### 🏠 Landing Page (Home)
- **Meta Title:** `Especialista Forever Living | Aloe Vera Gel e Produtos Originais` (64 chars)
- **Meta Description:** `Compre Aloe Vera Gel e produtos Forever Living. Atendimento consultivo e suporte direto via WhatsApp com Especialista. Entregas em todo o Brasil.` (147 chars)

### 💼 Página "Seja um FBO"
- **Meta Title:** `Seja um FBO Forever Living | Revenda Aloe Vera e Construa Renda` (63 chars)
- **Meta Description:** `Torne-se um Forever Business Owner (FBO). Lucre com descontos de fábrica, produtos de alta demanda e crie seu negócio global de saúde e bem-estar.` (151 chars)

### 📖 Página de Produtos/Catálogo
- **Meta Title:** `Catálogo Forever Living 2026/2027 | Receba o PDF via WhatsApp` (61 chars)
- **Meta Description:** `Navegue pelas linhas de Nutrição, Gerenciamento de Peso e Aloe Vera da Forever Living. Solicite a tabela de preços oficial em PDF agora.` (140 chars)

---

## 3. Estrutura de Favicon Atualizada (Padrão 2026)
A estrutura moderna implementada no `<head>` do `index.html` elimina redundâncias legadas:

```html
<!-- Favicon 2026 Modern Structure -->
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#1a3f12">
```

Arquivos necessários hospedados na pasta `public/`:
1. `favicon.ico` (Fallback 32x32px para navegadores legados)
2. `icon.svg` (Vetor escalável para light/dark mode e UI HD)
3. `apple-touch-icon.png` (PNG 180x180px para atalhos iOS)
4. `icon-192.png` e `icon-512.png` (Usados dentro do `manifest.json` para Android e PWA)

---

## 4. Instruções e Rastreamentos (Gestão de Marketing)

### Rastreamentos e Tag de Conversão (GTM)
O site ainda deve receber um contêiner do Google Tag Manager (GTM). Recomendamos:
1. **Disparadores de Cliques de WhatsApp:** Criar uma tag no GTM que identifique todos os cliques contendo *`href*="wa.me"`* ou *`href*="api.whatsapp.com"`*.
2. **Eventos (DataLayer):** Mapear envios do "LeadCapture" do rodapé como `generate_lead` nativo do GA4.
3. Não sobrecarregar a Home com scripts bloqueantes; faça o carregamento do GTM de forma assíncrona.

### Manutenção do SEO de Conteúdo (SGE)
As futuras respostas do Google geradas por IA exigem conteúdo estruturado. Regras para o time:
- O Blog não deve ter textos "inchados". Responda a pergunta do usuário nas primeiras 2 frases e depois aprofunde o tópico.
- Use as palavras-chave LSI de forma semântica (como termos relacionados, não repetindo a keyword exata infinitamente).
- Ao citar saúde, garanta que os gatilhos E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness) do Google sejam respeitados ligando os artigos ao WhatsApp do *Especialista*.
