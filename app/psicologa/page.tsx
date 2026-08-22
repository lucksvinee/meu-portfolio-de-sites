import Link from "next/link";

const whatsappUrl = "https://wa.me/5535999999999?text=Ol%C3%A1%20Lucas%2C%20quero%20um%20site%20para%20psicologa.";

export default function PsicologaPage() {
  return (
    <main className="niche-page">
      <nav className="site-nav" aria-label="Navegacao da pagina de nicho">
        <Link className="logo" href="/">lucas<span>_</span></Link>
        <Link className="nav-cta" href="/">Voltar para home <span>↗</span></Link>
      </nav>

      <section className="section-shell niche-hero">
        <p className="eyebrow">Nicho · Psicologa</p>
        <h1>Presenca digital acolhedora e profissional.</h1>
        <p>
          Uma pagina que comunica abordagem terapeutica com clareza, gera
          seguranca e convida ao primeiro contato.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Solicitar orcamento <span>↗</span>
          </a>
          <Link className="text-link" href="/">
            Voltar ao portfolio <span>←</span>
          </Link>
        </div>
      </section>

      <section className="section-shell niche-points" aria-label="Diferenciais para psicologa">
        <article className="niche-point">
          <h2>Mensagem empatica</h2>
          <p>Textos e estrutura que acolhem sem perder objetividade.</p>
        </article>
        <article className="niche-point">
          <h2>Fluxo de contato simples</h2>
          <p>Dois cliques para chegar ao WhatsApp ou formulario, sem distrações.</p>
        </article>
        <article className="niche-point">
          <h2>Autoridade com sensibilidade</h2>
          <p>Espaco para formacao, linhas de atendimento e orientacoes de forma clara.</p>
        </article>
      </section>
    </main>
  );
}
