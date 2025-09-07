import site from "../site.config.js"

export default function Gallery() {
  const imgs = site.GALLERY
  return (
    <section className="wrap card" id="gallery" aria-label="Pictures">
      <span className="eyebrow">Pictures</span>
      <h2>Shop glam shots & shiny parts</h2>
      <p className="muted">Swap these with real photos. Use 1600×1200+ for best results.</p>
      <div className="gallery" role="list">
        {imgs.map((im, i) => (
          <img key={i} role="listitem" src={im.src} alt={im.alt} />
        ))}
      </div>
    </section>
  )
}