import site from "../site.config.js"

export default function ProductsServices() {
  return (
    <section className="wrap grid grid-2" id="products" aria-label="Products and Services">
      <div className="card">
        <span className="eyebrow">Products</span>
        <h2>Parts we’re oddly proud of</h2>

        <article id="product-1">
          <h3>{site.PRODUCT_1_NAME} <span className="tag">CNC-milled</span></h3>
          <p>
            Engineered to a tolerance so tight it files a complaint with reality itself.
            Our {site.PRODUCT_1_NAME} is milled from {site.MATERIAL_1}, deburred with the sigh of a perfectionist,
            and finished until mirrors feel insecure. Side effects include improved airflow,
            better vibes, and distant applause from your quality inspector.
          </p>
          <a href={site.PRODUCT_LINK_1}>View details →</a>
        </article>

        <article id="product-2">
          <h3>{site.PRODUCT_2_NAME} <span className="tag">5-Axis</span></h3>
          <p>
            Machined on more axes than a geometry teacher’s midlife crisis. This part
            features chamfers that could slice through time and bores that whisper “IS0-2768”
            in their sleep. Ships aligned at the molecular level*.
            <em>*Not legally binding, but suspiciously close.</em>
          </p>
          <a href={site.PRODUCT_LINK_2}>View details →</a>
        </article>

        <article id="product-3">
          <h3>{site.PRODUCT_3_NAME} <span className="tag">Exotic Alloy</span></h3>
          <p>
            Born from the unholy union of {site.EXOTIC_MATERIAL} and bravado.
            Surface finish: smoother than your sales pitch. Hardness: yes.
            Weight: basically negative due to sheer confidence.
          </p>
          <a href={site.PRODUCT_LINK_3}>View details →</a>
        </article>
      </div>

      <div className="card" id="services">
        <span className="eyebrow">Services</span>
        <h2>How we make the chips fly</h2>

        <article id="service-1">
          <h3>{site.SERVICE_1_NAME} <span className="tag">Prototype to Production</span></h3>
          <p>
            Bring us a napkin sketch, a STEP file, or a prophecy. We’ll DFM it,
            quote it, and machine it before your coffee cools. Comes standard with
            lovingly obsessive tolerance stacking and unsolicited chamfer optimization.
          </p>
          <a href={site.SERVICE_LINK_1}>Tell me more →</a>
        </article>

        <article id="service-2">
          <h3>{site.SERVICE_2_NAME} <span className="tag">5-Axis Wizardry</span></h3>
          <p>
            We rotate, tilt, interpolate, and occasionally levitate your geometry
            until gravity apologizes. Toolpaths so elegant CAM software sends thank-you notes.
            Fixturing invented on the spot. Vibes: immaculate.
          </p>
          <a href={site.SERVICE_LINK_2}>Tell me more →</a>
        </article>

        <article id="service-3">
          <h3>{site.SERVICE_3_NAME} <span className="tag">Materials Mayhem</span></h3>
          <p>
            Aluminum? Child’s play. Titanium? Tuesday. Inconel? That’s our cardio.
            Wood, plastics, foam, meteorite—as long as it holds still, we’ll machine it
            into something your competitors will frame on their wall.
          </p>
          <a href={site.SERVICE_LINK_3}>Tell me more →</a>
        </article>
      </div>
    </section>
  )
}