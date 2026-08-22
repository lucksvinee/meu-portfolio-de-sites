import Link from "next/link";

const whatsappUrl = "https://wa.me/5535999999999?text=Ol%C3%A1%20Lucas%2C%20quero%20um%20site%20para%20engenharia.";

export default function EngenhariaPage() {
  return (
    <main className="niche-page">
      <nav className="site-nav" aria-label="Navegacao da pagina de nicho">
        <Link className="logo" href="/">lucas<span>_</span></Link>
        <Link className="nav-cta" href="/">Voltar para home <span>↗</span></Link>
      </nav>

      <section className="section-shell niche-hero">
        <p className="eyebrow">Nicho · Engenharia</p>
        <h1>Autoridade tecnica que gera novos orcamentos.</h1>
        <p>
          Estruturacao de portfolio, servicos e diferenciais para transformar
          visitas em oportunidades comerciais qualificadas.
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

      <section className="section-shell niche-points" aria-label="Diferenciais para engenharia">
        <article className="niche-point">
          <h2>Portifolio orientado a negocio</h2>
          <p>Projetos e escopo apresentados para reforcar capacidade de entrega.</p>
        </article>
        <article className="niche-point">
          <h2>Leitura rapida de servicos</h2>
          <p>Arquitetura de informacao para decisores entenderem oferta em minutos.</p>
        </article>
        <article className="niche-point">
          <h2>Contato qualificado</h2>
          <p>Formulario com campos estrategicos para receber briefs mais completos.</p>
        </article>
      </section>
    </main>
  );
}
