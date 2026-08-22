import Link from "next/link";

const whatsappUrl = "https://wa.me/5535999999999?text=Ol%C3%A1%20Lucas%2C%20quero%20um%20site%20para%20nutricionista.";

export default function NutricionistaPage() {
  return (
    <main className="niche-page">
      <nav className="site-nav" aria-label="Navegacao da pagina de nicho">
        <Link className="logo" href="/">lucas<span>_</span></Link>
        <Link className="nav-cta" href="/">Voltar para home <span>↗</span></Link>
      </nav>

      <section className="section-shell niche-hero">
        <p className="eyebrow">Nicho · Nutricionista</p>
        <h1>Site que transforma visitas em agendamentos.</h1>
        <p>
          Estrutura pensada para apresentar especialidades, mostrar autoridade e
          facilitar o primeiro contato com pacientes.
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

      <section className="section-shell niche-points" aria-label="Diferenciais para nutricionista">
        <article className="niche-point">
          <h2>Agendamento sem atrito</h2>
          <p>CTA direto para WhatsApp e formularios objetivos para reduzir abandono.</p>
        </article>
        <article className="niche-point">
          <h2>Especialidades claras</h2>
          <p>Organizacao de servicos para o visitante entender rapidamente seu foco clinico.</p>
        </article>
        <article className="niche-point">
          <h2>Prova social</h2>
          <p>Espaco para depoimentos e resultados, reforcando confianca e conversao.</p>
        </article>
      </section>
    </main>
  );
}
