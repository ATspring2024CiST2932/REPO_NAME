import site from "../site.config.js"

export default function Hero() {
  return (
    <section className="hero wrap">
      <img
        className="hero-logo"
        src={`${import.meta.env.BASE_URL}pcg-logo-full.png`}
        alt="Precision CNC Georgia"
      />
      <span className="eyebrow">Precision • Prototypes • Production</span>
      <h1>{site.COMPANY_NAME} — {site.ONE_SENTENCE_VALUE_PROP}</h1>
      <p>
        We machine the improbable. From {site.MATERIAL_1} to {site.MATERIAL_2}, single parts to full runs,
        we blend ruthless tolerances with friendly turnaround. Bring your CAD, napkin sketch,
        or cryptic dreams—we’ll make it cuttable.
      </p>
      <div className="cta">
        <a className="btn primary" href="#contact">Get a Quote</a>
        <a className="btn" href="#products">Browse Products</a>
        <a className="btn" href="#services">See Services</a>
      </div>

      <figure className="hero-art" aria-hidden="true">
        <svg width="520" height="520" viewBox="0 0 520 520">
          <defs>
            <linearGradient id="g2" x1="0" x2="1">
              <stop stopColor="var(--accent)" />
              <stop offset="1" stopColor="var(--accent-2)" />
            </linearGradient>
          </defs>
        <g fill="none" stroke="url(#g2)" opacity=".8">
            <circle cx="260" cy="260" r="240" strokeWidth="2"/>
            <circle cx="260" cy="260" r="180" strokeWidth="2"/>
            <circle cx="260" cy="260" r="120" strokeWidth="2"/>
            <path d="M80 260h360M260 80v360" strokeWidth="2"/>
          </g>
          <text x="50%" y="50%" fill="url(#g2)" textAnchor="middle" dy=".35em" fontSize="28" fontWeight="700">
            {site.COMPANY_NAME}
          </text>
        </svg>
      </figure>
    </section>
  )
}