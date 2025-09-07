import site from "../site.config.js"

export default function Contact() {
  return (
    <section className="wrap card" id="contact" aria-label="Contact">
      <span className="eyebrow">Contact</span>
      <h2>Let’s build something aggressively precise</h2>
      <p>
        Email <a href={`mailto:${site.CONTACT_EMAIL}`}>{site.CONTACT_EMAIL}</a> or drop a note below.
        Attach drawings (STEP, IGES, DXF, PDF) and we’ll respond faster than a 30,000 RPM spindle.
      </p>
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
        <label>
          <span className="sr-only">Name</span>
          <input name="name" placeholder="Your name" required />
        </label>
        <label>
          <span className="sr-only">Email</span>
          <input name="email" type="email" placeholder="you@company.com" required />
        </label>
        <label>
          <span className="sr-only">Message</span>
          <textarea name="message" rows="5" placeholder="Tell us about your part, qty, material, and target date…" required />
        </label>
        <button className="btn primary" type="submit">Request a Quote</button>
      </form>
      <p className="muted" style={{ marginTop: '.5rem' }}>
        Or call <a href={`tel:${site.CONTACT_PHONE}`}>{site.CONTACT_PHONE}</a> • Shop hours: {site.SHOP_HOURS}
      </p>
    </section>
  )
}