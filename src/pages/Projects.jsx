import PageShell from './PageShell.jsx'

const projects = [
  ['SysV IPC Dialogue System', 'C · Shared Memory · System V Semaphores', 'Σύστημα διαλόγου με επικοινωνία διεργασιών μέσω κοινόχρηστης μνήμης και σημαφόρων.'],
  ['xv6 MLFQ Scheduler', 'C · xv6-riscv · getpinfo() · ps', 'Υλοποίηση scheduler πολλαπλών ουρών ανάδρασης και εργαλείων παρακολούθησης διεργασιών.'],
  ['FileSync System FSS', 'C · inotify · fork/exec · Named Pipes', 'Παρακολούθηση αλλαγών αρχείων και συγχρονισμός μέσω διεργασιών και named pipes.'],
  ['NFS Network File System', 'C · TCP Sockets · Client/Server', 'Υλοποίηση συστήματος αρχείων δικτύου με αρχιτεκτονική πελάτη–διακομιστή.'],
  ['Recursive Descent Parser and IR Compiler', 'Java · JFlex · CUP', 'Parser αναδρομικής κατάβασης και μεταγλωττιστής με ενδιάμεση αναπαράσταση.'],
  ['MiniJava Static Analyzer', 'Java · JTB · JavaCC · Visitor Pattern', 'Στατική ανάλυση προγράμματος MiniJava με χρήση του Visitor Pattern.'],
  ['Protein Homolog Search', 'Python · Machine Learning', 'Αναζήτηση ομόλογων πρωτεϊνών με τεχνικές machine learning.'],
  ['Neural-LSH', 'Python · k-NN Graphs · MLP', 'Προσέγγιση αναζήτησης γειτόνων που συνδυάζει γράφους k-NN και MLP.'],
  ['Vector Search Algorithms', 'C++ · Python · Approximate Nearest Neighbor', 'Υλοποίηση και μελέτη αλγορίθμων approximate nearest neighbor search.'],
  ['PetHealth', 'React · JavaScript · HTML · CSS · JSON Server', 'Web εφαρμογή για την υγεία κατοικιδίων με React και JSON Server.'],
  ['Software Systems Analysis and Design', 'UML · StarUML · Python', 'Ανάλυση και σχεδίαση συστήματος με μοντελοποίηση UML.'],
]

function Projects() {
  return (
    <PageShell active="projects" title="Επιλεγμένα έργα" subtitle="Ακαδημαϊκές εργασίες σε συστήματα, λογισμικό και αναζήτηση.">
      <div className="project-list">
        {projects.map(([name, technologies, description], index) => (
          <article className="project-row" key={name}>
            <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{name}</h2>
              <p>{description}</p>
              <span className="project-tech">{technologies}</span>
            </div>
          </article>
        ))}
      </div>
      <a className="text-link project-github" href="https://github.com/sdi2200135" target="_blank" rel="noreferrer">Όλα τα repositories στο GitHub <span aria-hidden="true">↗</span></a>
    </PageShell>
  )
}

export default Projects