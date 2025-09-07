import site from "../site.config.js"

export default function Header() {
  return (
    <header aria-label="Site header">
      <div className="wrap">
        <nav className="nav">
          <a className="brand" href="#top" aria-label={`${site.COMPANY_NAME} home`}>
            <svg viewBox="0 0 64 64" role="img" aria-label="CNC gear logo">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop stopColor={getComputedStyle(document.documentElement).getPropertyValue('--accent')} />
                  <stop offset="1" stopColor={getComputedStyle(document.documentElement).getPropertyValue('--accent-2')} />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="26" fill="none" stroke="url(#g)" strokeWidth="3"/>
              <path d="M20 34h24M24 26h16" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"/>
            </svg>
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