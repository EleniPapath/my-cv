import PageShell from './PageShell.jsx'
import useLanguage from '../useLanguage.js'

function Home() {
  const { t } = useLanguage()

  return (
    <PageShell
      active="home"
      title={t('home.title')}
      subtitle={t('home.subtitle')}
    >
      <section className="home-intro">
        <div>
          <p className="eyebrow">{t('home.eyebrow')}</p>
          <p className="intro-copy">{t('home.intro')}</p>
          <a className="text-link" href="?page=projects">{t('home.projectsLink')} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="home-profile">
          <span className="home-avatar-frame">
            <img
              src={`${import.meta.env.BASE_URL}avatar.jpg`}
              alt={t('common.avatar')}
            />
          </span>
          <aside className="home-note">
            <span className="note-number">06</span>
            <p>{t('home.internship')}</p>
            <a href="?page=contact">{t('home.contact')} <span aria-hidden="true">↗</span></a>
          </aside>
        </div>
      </section>

      <section className="home-highlights" aria-label={t('home.highlights')}>
        <a href="?page=education">
          <span className="highlight-label">{t('home.education')}</span>
          <strong>{t('home.degree')}</strong>
          <span>{t('home.university')}</span>
        </a>
        <a href="?page=skills">
          <span className="highlight-label">{t('home.technologies')}</span>
          <strong>C/C++ · Python · Java · React</strong>
          <span>{t('home.techSummary')}</span>
        </a>
        <a href="?page=projects">
          <span className="highlight-label">{t('home.academicProjects')}</span>
          <strong>{t('home.projectCount')}</strong>
          <span>{t('home.projectsSummary')}</span>
        </a>
      </section>
    </PageShell>
  )
}

export default Home