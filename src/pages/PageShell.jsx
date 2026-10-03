import useLanguage from '../useLanguage.js'

const navigation = [
  ['about-me', 'nav.about'],
  ['education', 'nav.education'],
  ['projects', 'nav.projects'],
  ['skills', 'nav.skills'],
  ['seminars', 'nav.seminars'],
  ['contact', 'nav.contact'],
]

function PageShell({ active, title, subtitle, children }) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <>
      <header className="site-header">
        <a className="site-brand" href="./" aria-label={t('common.home')}>
          <span className="brand-mark">
            <img
              src={`${import.meta.env.BASE_URL}avatar.jpg`}
              alt=""
              onError={(event) => { event.currentTarget.hidden = true }}
            />
            <span>{t('common.brandInitials')}</span>
          </span>
          <span>{t('common.brandName')}</span>
        </a>
        <nav className="site-nav" aria-label={t('common.navigation')}>
          {navigation.map(([page, labelKey]) => (
            <a
              key={page}
              href={`?page=${page}`}
              aria-current={active === page ? 'page' : undefined}
            >
              {t(labelKey)}
            </a>
          ))}
          <details className="language-menu">
            <summary aria-label={t('common.languageMenu')} title={t('common.languageMenu')}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18" />
              </svg>
            </summary>
            <div className="language-options">
              <button type="button" aria-current={language === 'el' ? 'true' : undefined} onClick={(event) => {
                setLanguage('el')
                event.currentTarget.closest('details').open = false
              }}>
                {t('common.greekLanguage')}
              </button>
              <button type="button" aria-current={language === 'en' ? 'true' : undefined} onClick={(event) => {
                setLanguage('en')
                event.currentTarget.closest('details').open = false
              }}>
                {t('common.englishLanguage')}
              </button>
            </div>
          </details>
        </nav>
      </header>

      <main className="site-main">
        <div className="page-heading">
          <p className="eyebrow">{t('common.portfolio')}</p>
          <h1>{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
        {children}
      </main>

      <footer className="site-footer">
        <span>{t('home.title')}</span>
        <a href="mailto:papathelen@gmail.com">{t('common.footerEmail')}</a>
      </footer>
    </>
  )
}

export default PageShell