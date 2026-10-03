import PageShell from './PageShell.jsx'
import useLanguage from '../useLanguage.js'

function Education() {
  const { t } = useLanguage()

  return (
    <PageShell active="education" title={t('education.title')} subtitle={t('education.subtitle')}>
      <section className="timeline-entry">
        <div className="timeline-meta">
          <span>{t('education.date')}</span>
          <span>{t('education.location')}</span>
        </div>
        <h2>{t('education.department')}</h2>
        <p className="institution">{t('education.university')}</p>
        <div className="detail-block">
          <h3>{t('education.courses')}</h3>
          <p>{t('education.courseList')}</p>
        </div>
        <div className="detail-block">
          <h3>{t('education.projects')}</h3>
          <p>{t('education.projectSummary')}</p>
          <a className="text-link" href="https://github.com/sdi2200135" target="_blank" rel="noreferrer">GitHub · sdi2200135 <span aria-hidden="true">↗</span></a>
        </div>
        <p className="qualification">{t('education.qualification')} <strong>EQF 6</strong></p>
      </section>
    </PageShell>
  )
}

export default Education