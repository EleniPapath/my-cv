import PageShell from './PageShell.jsx'

const projects = [
  ['SysV IPC Dialogue System', 'C · Shared Memory · System V Semaphores', 'Σύστημα διαλόγου με επικοινωνία διεργασιών μέσω κοινόχρηστης μνήμης και σημαφόρων.', 'https://github.com/sdi2200135/SysV-IPC-Dialogue-System'],
  ['xv6 MLFQ Scheduler', 'C · xv6-riscv · getpinfo() · ps', 'Υλοποίηση scheduler πολλαπλών ουρών ανάδρασης και εργαλείων παρακολούθησης διεργασιών.', 'https://github.com/sdi2200135/xv6-MLFQ-Scheduler'],
  ['FileSync System FSS', 'C · inotify · fork/exec · Named Pipes', 'Παρακολούθηση αλλαγών αρχείων και συγχρονισμός μέσω διεργασιών και named pipes.', 'https://github.com/sdi2200135/FileSync-System-FSS'],
  ['NFS Network File System', 'C · TCP Sockets · Client/Server', 'Υλοποίηση συστήματος αρχείων δικτύου με αρχιτεκτονική πελάτη–διακομιστή.', 'https://github.com/sdi2200135/NFS-Network-File-System'],
  ['Recursive Descent Parser and IR Compiler', 'Java · JFlex · CUP', 'Parser αναδρομικής κατάβασης και μεταγλωττιστής με ενδιάμεση αναπαράσταση.', 'https://github.com/sdi2200135/Recursive-Descent-Parser-and-IR-Compiler'],
  ['MiniJava Static Analyzer', 'Java · JTB · JavaCC · Visitor Pattern', 'Στατική ανάλυση προγράμματος MiniJava με χρήση του Visitor Pattern.', 'https://github.com/sdi2200135/MiniJava-Static-Analyzer'],
  ['Protein Homolog Search', 'Python · Machine Learning', 'Αναζήτηση ομόλογων πρωτεϊνών με τεχνικές machine learning.', 'https://github.com/sdi2200135/Protein-Homolog-Search'],
  ['Neural-LSH', 'Python · k-NN Graphs · MLP', 'Προσέγγιση αναζήτησης γειτόνων που συνδυάζει γράφους k-NN και MLP.', 'https://github.com/sdi2200135/Neural-LSH-Python'],
  ['Vector Search Algorithms', 'C++ · Python · Approximate Nearest Neighbor', 'Υλοποίηση και μελέτη αλγορίθμων approximate nearest neighbor search.', 'https://github.com/sdi2200135/Vector-Search-Algorithms'],
  ['Website PetHealth', 'React · JavaScript · HTML · CSS · JSON Server', 'Web εφαρμογή για την υγεία κατοικιδίων με React και JSON Server.', 'https://github.com/sdi2200135/Website-PetHealth'],
  ['Software Systems Analysis and Design', 'UML · StarUML · Python', 'Ανάλυση και σχεδίαση συστήματος με μοντελοποίηση UML.', 'https://github.com/sdi2200135/Software-Systems-Analysis-and-Design'],
]

function Projects() {
  return (
    <PageShell active="projects" title="Επιλεγμένα έργα" subtitle="Ακαδημαϊκές εργασίες σε συστήματα, λογισμικό και αναζήτηση.">
      <div className="project-list">
        {projects.map(([name, technologies, description, link], index) => (
          <article className="project-row" key={name}>
            <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2><a href={link}>{name}</a></h2>
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