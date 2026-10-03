const navigation = [
  ['about-me', 'Σχετικά'],
  ['education', 'Σπουδές'],
  ['projects', 'Έργα'],
  ['skills', 'Δεξιότητες'],
  ['seminars', 'Σεμινάρια'],
  ['contact', 'Επικοινωνία'],
]

function PageShell({ active, title, subtitle, children }) {
  return (
    <>
      <header className="site-header">
        <a className="site-brand" href="./" aria-label="Αρχική σελίδα">
          <span className="brand-mark">
            <img
              src={`${import.meta.env.BASE_URL}avatar.jpg`}
              alt=""
              onError={(event) => { event.currentTarget.hidden = true }}
            />
            <span>ΕΠ</span>
          </span>
          <span>Ελένη Παπαθανασίου</span>
        </a>
        <nav className="site-nav" aria-label="Κύρια πλοήγηση">
          {navigation.map(([page, label]) => (
            <a
              key={page}
              href={`?page=${page}`}
              aria-current={active === page ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <div className={active === 'home' ? 'page-heading page-heading-home' : 'page-heading'}>
          <p className="eyebrow">Portfolio · 2026</p>
          {active === 'home' ? (
            <div className="home-title-row">
              <h1>{title}</h1>
              <span className="home-title-avatar-frame">
                <img
                  src={`${import.meta.env.BASE_URL}avatar.jpg`}
                  alt="Φωτογραφία της Ελένης"
                />
              </span>
            </div>
          ) : (
            <h1>{title}</h1>
          )}
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
        {children}
      </main>

      <footer className="site-footer">
        <span>Ελένη Παπαθανασίου</span>
        <a href="mailto:papathelen@gmail.com">papathelen@gmail.com</a>
      </footer>
    </>
  )
}

export default PageShell