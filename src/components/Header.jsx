import site from "../site.config.js"

export default function Header() {
  return (
    <header aria-label="Site header">
      <div className="wrap">
        <nav className="nav">
          <a className="brand" href="#top" aria-label={`${site.COMPANY_NAME} home`}>
            <img
              src="/logo.svg"
              alt={`${site.COMPANY_NAME} logo`}
              className="logo"
            />
            <div className="name">{site.COMPANY_NAME}</div>
          </a>
          <div className="links" role="navigation" aria-label="Primary">
            <a className="btn" href="#services">Services</a>
            <a className="btn" href="#products">Products</a>
            <a className="btn" href="#gallery">Pictures</a>
            <a className="btn primary contact-fab" href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}