import PageShell from './PageShell.jsx'
import useLanguage from '../useLanguage.js'

const courses = [
  ['Data Science and Applied Machine Learning with Python', 'Mathesis'],
  ['HTML Essentials', 'Cisco Networking Academy'],
  ['JavaScript Essentials 1', 'Cisco Networking Academy'],
  ['JavaScript Essentials 2', 'Cisco Networking Academy'],
]

function Seminars() {
  const { t } = useLanguage()

  return (
    <PageShell active="seminars" title={t('seminars.title')} subtitle={t('seminars.subtitle')}>
      <div className="course-list">
        {courses.map(([course, provider], index) => (
          <article className="course-row" key={course}>
            <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{course}</h2>
              <p>{provider}</p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}

export default Seminars