import PageShell from './PageShell.jsx'

const skillGroups = [
  ['Προγραμματισμός', 'C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL'],
  ['Web', 'HTML', 'CSS', 'React'],
  ['Compilers', 'JFlex', 'CUP', 'JavaCC'],
  ['Εργαλεία', 'VS Code', 'Figma', 'GCC / Make', 'Git', 'GitHub', 'PostgreSQL', 'MySQL', 'Linux / Unix', 'StarUML', 'MATLAB'],
  ['Συνεργασία', 'Προσοχή στη λεπτομέρεια', 'Οργάνωση', 'Μεθοδική επίλυση προβλημάτων', 'Επικοινωνία', 'Ομαδικότητα', 'Προσαρμοστικότητα', 'Γρήγορη μάθηση']
]

function Skills() {
  return (
    <PageShell active="skills" title="Δεξιότητες" subtitle="Τεχνολογίες και τρόποι συνεργασίας που έχω αναπτύξει.">
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
          <h2>Γλώσσες</h2>
          <p><strong>Ελληνικά</strong> · Μητρική γλώσσα</p>
          <p><strong>Αγγλικά</strong> · B2 (κατανόηση, ομιλία και γραφή)</p>
        </div>
      </section>
    </PageShell>
  )
}

export default Skills