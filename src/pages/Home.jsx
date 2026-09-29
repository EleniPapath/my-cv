import PageShell from './PageShell.jsx'

function Home() {
  return (
    <PageShell
      active="home"
      title="Ελένη Παπαθανασίου"
      subtitle="Φοιτήτρια Πληροφορικής και Τηλεπικοινωνιών · ΕΚΠΑ"
    >
      <section className="home-intro">
        <div>
          <p className="eyebrow">Αναζητώ πρακτική άσκηση</p>
          <p className="intro-copy">
            Ασχολούμαι με την ανάπτυξη λογισμικού μέσα από ακαδημαϊκά projects
            σε λειτουργικά συστήματα, αλγορίθμους, βάσεις δεδομένων και
            software design. Θέλω να εξελίξω τις γνώσεις μου σε μια ομάδα
            ανάπτυξης και να αποκτήσω επαγγελματική εμπειρία.
          </p>
          <a className="text-link" href="?page=projects">Δες επιλεγμένα έργα <span aria-hidden="true">↗</span></a>
        </div>
        <aside className="home-note">
          <span className="note-number">06</span>
          <p>μήνες πρακτικής άσκησης στο πλαίσιο των σπουδών μου</p>
          <a href="?page=contact">Επικοινωνία <span aria-hidden="true">↗</span></a>
        </aside>
      </section>

      <section className="home-highlights" aria-label="Βασικές πληροφορίες">
        <a href="?page=education">
          <span className="highlight-label">Σπουδές</span>
          <strong>Πληροφορική &amp; Τηλεπικοινωνίες</strong>
          <span>Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών</span>
        </a>
        <a href="?page=skills">
          <span className="highlight-label">Τεχνολογίες</span>
          <strong>C/C++ · Python · Java · React</strong>
          <span>Αλγόριθμοι, web και software systems</span>
        </a>
        <a href="?page=projects">
          <span className="highlight-label">Ακαδημαϊκά έργα</span>
          <strong>11 projects</strong>
          <span>Από συστήματα και compilers έως machine learning</span>
        </a>
      </section>
    </PageShell>
  )
}

export default Home