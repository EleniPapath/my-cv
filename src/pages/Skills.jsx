import PageShell from './PageShell.jsx'
import useLanguage from '../useLanguage.js'

function Skills() {
  const { t } = useLanguage()
  const skillGroups = [
    [t('skills.programming'), 'C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL'],
    ['Web', 'HTML', 'CSS', 'React'],
    ['Compilers', 'JFlex', 'CUP', 'JavaCC'],
    [t('skills.tools'), 'VS Code', 'Figma', 'GCC / Make', 'Git', 'GitHub', 'PostgreSQL', 'MySQL', 'Linux / Unix', 'StarUML', 'MATLAB'],
    [t('skills.collaboration'), ...t('skills.softSkills')],
  ]

  return (
    <PageShell active="skills" title={t('skills.title')} subtitle={t('skills.subtitle')}>
      <section className="skill-groups">
        {skillGroups.map(([group, ...skills]) => (
          <div className="skill-row" key={group}>
            <h2>{group}</h2>
            <ul className="skill-list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="skill-extras">
        <div>
          <h2>{t('skills.languages')}</h2>
          <p><strong>{t('skills.greek')}</strong> · {t('skills.native')}</p>
          <p><strong>{t('skills.english')}</strong> · {t('skills.englishLevel')}</p>
        </div>
      </section>
    </PageShell>
  )
}

export default Skills