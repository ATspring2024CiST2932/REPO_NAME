import site from "../site.config.js"

export default function FeaturedLinks() {
  return (
    <section className="wrap grid grid-3" aria-label="Featured links">
      <article className="card">
        <span className="eyebrow">Popular</span>
        <h3>Shop {site.PRODUCT_CATEGORY_1}</h3>
        <ul className="clean">
          <li><a href={site.PRODUCT_LINK_1}>→ {site.PRODUCT_1_NAME}</a></li>
          <li><a href={site.PRODUCT_LINK_2}>→ {site.PRODUCT_2_NAME}</a></li>
          <li><a href={site.PRODUCT_LINK_3}>→ {site.PRODUCT_3_NAME}</a></li>
        </ul>
      </article>
      <article className="card">
        <span className="eyebrow">Services</span>
        <h3>What we do</h3>
        <ul className="clean">
          <li><a href={site.SERVICE_LINK_1}>→ {site.SERVICE_1_NAME}</a></li>
          <li><a href={site.SERVICE_LINK_2}>→ {site.SERVICE_2_NAME}</a></li>
          <li><a href={site.SERVICE_LINK_3}>→ {site.SERVICE_3_NAME}</a></li>
        </ul>
      </article>
      <article className="card">
        <span className="eyebrow">Contact</span>
        <h3>Need a rush part?</h3>
        <p>Same-day quotes. Night-shift capable. <a href="#contact">Ping the shop</a>.</p>
        <div className="tag">ITAR-ready</div> <div className="tag">NDA-friendly</div> <div className="tag">Small-run pros</div>
      </article>
    </section>
  )
}