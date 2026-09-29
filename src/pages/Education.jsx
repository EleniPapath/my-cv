import PageShell from './PageShell.jsx'

function Education() {
  return (
    <PageShell active="education" title="Σπουδές" subtitle="Ακαδημαϊκή πορεία και αντικείμενα που έχω εξερευνήσει.">
      <section className="timeline-entry">
        <div className="timeline-meta">
          <span>Οκτώβριος 2022 – σήμερα</span>
          <span>Αθήνα, Ελλάδα</span>
        </div>
        <h2>Τμήμα Πληροφορικής και Τηλεπικοινωνιών</h2>
        <p className="institution">Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών</p>
        <div className="detail-block">
          <h3>Σχετικά μαθήματα</h3>
          <p>Λειτουργικά Συστήματα, Δομές Δεδομένων, Αλγόριθμοι, Βάσεις Δεδομένων, Σχεδίαση Λογισμικού και Αντικειμενοστραφής Προγραμματισμός.</p>
        </div>
        <div className="detail-block">
          <h3>Ακαδημαϊκά έργα</h3>
          <p>Εργασίες σε συστήματα, δίκτυα, μεταγλωττιστές, αναζήτηση και machine learning.</p>
          <a className="text-link" href="https://github.com/sdi2200135" target="_blank" rel="noreferrer">GitHub · sdi2200135 <span aria-hidden="true">↗</span></a>
        </div>
        <p className="qualification">Επίπεδο Ευρωπαϊκού Πλαισίου Προσόντων: <strong>EQF 6</strong></p>
      </section>
    </PageShell>
  )
}

export default Education