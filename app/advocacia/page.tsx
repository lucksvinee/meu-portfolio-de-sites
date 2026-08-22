import Link from "next/link";

const whatsappUrl = "https://wa.me/5535999999999?text=Ol%C3%A1%20Lucas%2C%20quero%20um%20site%20para%20advocacia.";

export default function AdvocaciaPage() {
  return (
    <main className="niche-page">
      <nav className="site-nav" aria-label="Navegacao da pagina de nicho">
        <Link className="logo" href="/">lucas<span>_</span></Link>
        <Link className="nav-cta" href="/">Voltar para home <span>↗</span></Link>
      </nav>

      <section className="section-shell niche-hero">
        <p className="eyebrow">Nicho · Advocacia</p>
        <h1>Confianca e clareza para captar novos casos.</h1>
        <p>
          Pagina institucional com tom profissional, especialidades bem
          definidas e caminhos de contato objetivos.
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

      <section className="section-shell niche-points" aria-label="Diferenciais para advocacia">
        <article className="niche-point">
          <h2>Especialidades em destaque</h2>
          <p>Organizacao por area de atuacao para facilitar entendimento imediato.</p>
        </article>
        <article className="niche-point">
          <h2>Linguagem objetiva</h2>
          <p>Comunicacao clara para reduzir duvidas e melhorar a triagem inicial.</p>
        </article>
        <article className="niche-point">
          <h2>Contato com contexto</h2>
          <p>Formulario e CTA pensados para receber demandas mais qualificadas.</p>
        </article>
      </section>
    </main>
  );
}
