import site from "../site.config.js"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="wrap">
        <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', alignItems:'center', justifyContent:'space-between' }}>
          <small>© {year} {site.COMPANY_NAME}. Chips happen. Clean as we go.</small>
          <nav className="links">
            <a href={site.PRIVACY_LINK}>Privacy</a>
            <a href={site.TERMS_LINK}>Terms</a>
            <a href={site.INSTAGRAM_OR_LINK}>Instagram</a>
            <a href={site.LINKEDIN_OR_LINK}>LinkedIn</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}