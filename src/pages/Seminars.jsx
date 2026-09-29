import PageShell from './PageShell.jsx'

const courses = [
  ['Data Science and Applied Machine Learning with Python', 'Mathesis'],
  ['HTML Essentials', 'Cisco Networking Academy'],
  ['JavaScript Essentials 1', 'Cisco Networking Academy'],
  ['JavaScript Essentials 2', 'Cisco Networking Academy'],
]

function Seminars() {
  return (
    <PageShell active="seminars" title="Σεμινάρια & επιμόρφωση" subtitle="Μαθήματα και πιστοποιήσεις παράλληλα με τις σπουδές μου.">
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