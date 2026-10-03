import PageShell from './PageShell.jsx'
import useLanguage from '../useLanguage.js'

const projects = [
  ['SysV IPC Dialogue System', 'C · Shared Memory · System V Semaphores', 'https://github.com/sdi2200135/SysV-IPC-Dialogue-System'],
  ['xv6 MLFQ Scheduler', 'C · xv6-riscv · getpinfo() · ps', 'https://github.com/sdi2200135/xv6-MLFQ-Scheduler'],
  ['FileSync System FSS', 'C · inotify · fork/exec · Named Pipes', 'https://github.com/sdi2200135/FileSync-System-FSS'],
  ['NFS Network File System', 'C · TCP Sockets · Client/Server', 'https://github.com/sdi2200135/NFS-Network-File-System'],
  ['Recursive Descent Parser and IR Compiler', 'Java · JFlex · CUP', 'https://github.com/sdi2200135/Recursive-Descent-Parser-and-IR-Compiler'],
  ['MiniJava Static Analyzer', 'Java · JTB · JavaCC · Visitor Pattern', 'https://github.com/sdi2200135/MiniJava-Static-Analyzer'],
  ['Protein Homolog Search', 'Python · Machine Learning', 'https://github.com/sdi2200135/Protein-Homolog-Search'],
  ['Neural-LSH', 'Python · k-NN Graphs · MLP', 'https://github.com/sdi2200135/Neural-LSH-Python'],
  ['Vector Search Algorithms', 'C++ · Python · Approximate Nearest Neighbor', 'https://github.com/sdi2200135/Vector-Search-Algorithms'],
  ['Website PetHealth', 'React · JavaScript · HTML · CSS · JSON Server', 'https://github.com/sdi2200135/Website-PetHealth'],
  ['Software Systems Analysis and Design', 'UML · StarUML · Python', 'https://github.com/sdi2200135/Software-Systems-Analysis-and-Design'],
]

function Projects() {
  const { t } = useLanguage()

  return (
    <PageShell active="projects" title={t('projects.title')} subtitle={t('projects.subtitle')}>
      <div className="project-list">
        {projects.map(([name, technologies, link], index) => (
          <article className="project-row" key={name}>
            <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2><a href={link}>{name}</a></h2>
              <p>{t('projects.descriptions')[index]}</p>
              <span className="project-tech">{technologies}</span>
            </div>
          </article>
        ))}
      </div>
      <a className="text-link project-github" href="https://github.com/sdi2200135" target="_blank" rel="noreferrer">{t('projects.allRepositories')} <span aria-hidden="true">↗</span></a>
    </PageShell>
  )
}

export default Projects