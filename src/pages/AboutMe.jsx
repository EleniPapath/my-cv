import PageShell from './PageShell.jsx'
import useLanguage from '../useLanguage.js'

function AboutMe() {
  const { t } = useLanguage()

  return (
    <PageShell active="about-me" title={t('about.title')} subtitle={t('about.subtitle')}>
      <section className="prose-section">
        <p className="lead-copy">{t('about.intro')}</p>
        <p>{t('about.paragraph1')}</p>
        <p>{t('about.paragraph2')}</p>
      </section>
      <div className="fact-strip">
        <span><strong>{t('about.base')}</strong> {t('about.location')}</span>
        <span><strong>{t('about.universityLabel')}</strong> {t('about.university')}</span>
        <span><strong>{t('about.studyLevel')}</strong> EQF 6</span>
      </div>
    </PageShell>
  )
}

export default AboutMe