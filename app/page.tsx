import React from 'react';
import Link from 'next/link';

// Link do WhatsApp atualizado com o seu número real
const whatsappUrl = "https://wa.me/5535997706463?text=Ol%C3%A1%20Lucas%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento.";

export default function PortfolioPage() {
  const projetos = [
    {
      id: 1,
      titulo: "Lex Integra",
      nicho: "Advocacia",
      desc: "Design premium e institucional para captação de clientes corporativos, seguindo as diretrizes da OAB.",
      imagem: "/thumb-advocacia.png",
      link: "https://site-advocacia-psi-hazel.vercel.app/" 
    },
    {
      id: 2,
      titulo: "Alimentação Consciente",
      nicho: "Nutrição",
      desc: "Plataforma leve e acolhedora focada em reeducação alimentar e agendamento de consultas.",
      imagem: "/thumb-nutricionista.png",
      link: "https://site-nutricionista-psi.vercel.app/"
    },
    {
      id: 3,
      titulo: "Camila Psicologia",
      nicho: "Psicologia Clínica",
      desc: "Espaço digital seguro e intimista, desenhado para transmitir escuta ativa e converter pacientes online.",
      imagem: "/thumb-psicologa.png",
      link: "/projetos/psicologia"
    },
    {
      id: 4,
      titulo: "Estrutura Ativa",
      nicho: "Engenharia",
      desc: "Landing page focada em solidez, destacando aprovação de projetos e regularização de obras.",
      imagem: "/thumb-engenharia.png",
      link: "/projetos/engenharia"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A192F] text-slate-200 font-sans selection:bg-[#14B8A6] selection:text-white">
      
      {/* NAVEGAÇÃO */}
      <nav className="w-full px-8 py-6 flex justify-between items-center max-w-7xl mx-auto border-b border-slate-800/50">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-[#14B8A6] transition-colors">
          lucas<span className="text-[#14B8A6]">_</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#sobre" className="hover:text-[#14B8A6] transition-colors">
            Sobre mim
          </a>
          <a 
            href="https://www.linkedin.com/in/lucas-vinicios-inacio/" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#14B8A6] transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://instagram.com/seu-perfil" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#14B8A6] transition-colors"
          >
            Instagram
          </a>
        </div>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noreferrer"
          className="text-sm font-semibold bg-[#14B8A6]/10 text-[#14B8A6] px-5 py-2 rounded-full hover:bg-[#14B8A6] hover:text-[#0A192F] transition-all"
        >
          Vamos conversar ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-7xl mx-auto px-8 pt-20 pb-16">
        <p className="text-[#14B8A6] text-sm font-bold tracking-widest uppercase mb-4">
          Projetos Selecionados
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Trabalho que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-teal-200">fala por si.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Alguns projetos demonstrativos criados para mostrar como estratégia, 
          tecnologia e design trabalham juntos para alavancar negócios locais e profissionais liberais.
        </p>
      </header>

      {/* GRID DE PROJETOS */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projetos.map((projeto) => (
            <article 
              key={projeto.id} 
              className="group bg-[#112240] rounded-2xl overflow-hidden border border-slate-800 hover:border-[#14B8A6]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#14B8A6]/10"
            >
              <div className="relative h-72 w-full overflow-hidden bg-slate-800">
                <img 
                  src={projeto.imagem} 
                  alt={`Preview do site ${projeto.titulo}`} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 bg-[#0A192F] border border-slate-700 text-xs font-bold text-slate-300 px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                  {projeto.nicho}
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#14B8A6] transition-colors">
                  {projeto.titulo}
                </h2>
                <p className="text-slate-400 mb-8 line-clamp-2">
                  {projeto.desc}
                </p>
                
                <a 
                  href={projeto.link}
                  className="inline-flex items-center text-sm font-semibold text-[#14B8A6] hover:text-white transition-colors"
                >
                  Ver projeto completo
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SEÇÃO SOBRE MIM */}
      <section id="sobre" className="max-w-7xl mx-auto px-8 py-32 mt-20 border-t border-slate-800/50">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-white tracking-tight">
              Muito mais do que <span className="text-[#14B8A6]">apenas código.</span>
            </h2>
            <div className="w-20 h-1 bg-[#14B8A6] rounded-full"></div>
            
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg pt-4">
              <p>
                Sou Lucas Vinícios Inácio, desenvolvedor web diretamente de Cambuquira, no Sul de Minas. Minha missão é transformar a maneira como empresas e profissionais liberais se apresentam na internet.
              </p>
              <p>
                Com uma visão analítica apurada pelo meu trabalho no setor público e sólida formação em Análise e Desenvolvimento de Sistemas, eu entendi cedo que a internet está cheia de sites que não funcionam. Meu foco não é entregar "páginas bonitinhas", mas sim ferramentas de negócios. 
              </p>
              <p>
                Construo landing pages e sites institucionais de altíssima performance usando o que há de mais moderno no mercado (React e Next.js). Sei alinhar a estética necessária com as regras rígidas do seu conselho (como OAB, CRP, CRN ou CREA), criando um posicionamento digital que gera autoridade e converte visitantes em clientes reais.
              </p>
            </div>

            <div className="pt-6">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#14B8A6] text-[#0A192F] font-bold px-8 py-4 rounded-full hover:bg-teal-400 transition-colors"
              >
                Vamos projetar sua página
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#14B8A6]/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#112240] border border-slate-700/50 p-10 rounded-3xl shadow-2xl">
              <div className="flex gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              </div>
              <div className="space-y-4 font-mono text-sm text-[#14B8A6]/80">
                <p><span className="text-pink-500">const</span> developer = {'{'}</p>
                <p className="pl-6">name: <span className="text-yellow-300">'Lucas Vinícios'</span>,</p>
                <p className="pl-6">role: <span className="text-yellow-300">'Frontend Eng. & Web Builder'</span>,</p>
                <p className="pl-6">location: <span className="text-yellow-300">'Cambuquira - MG'</span>,</p>
                <p className="pl-6">focus: <span className="text-yellow-300">'High-Conversion Pages'</span>,</p>
                <p className="pl-6">stack: [<span className="text-yellow-300">'Next.js'</span>, <span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'Tailwind'</span>]</p>
                <p>{'}'};</p>
                <br/>
                <p className="text-slate-500">// Transformando ideias em resultados tangíveis.</p>
                <p><span className="text-pink-500">export default</span> developer;</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full text-center py-8 text-slate-500 text-sm border-t border-slate-800/50 mt-12">
        <p>© 2026 - Desenvolvido por   Lucas Inacio. Todos os direitos reservados.</p>
      </footer>

    </main>
  );
}