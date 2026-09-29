import PageShell from './PageShell.jsx'

function Contact() {
  return (
    <PageShell active="contact" title="Επικοινωνία" subtitle="Για ευκαιρίες πρακτικής άσκησης και συνεργασίας.">
      <section className="contact-layout">
        <p className="lead-copy">Θα χαρώ να συζητήσουμε για θέσεις πρακτικής άσκησης, projects ή πιθανές συνεργασίες.</p>
        <div className="contact-links">
          <a href="mailto:papathelen@gmail.com">
            <span>Email</span><strong>papathelen@gmail.com</strong><span aria-hidden="true">↗</span>
          </a>
          <a href="tel:+306955582490">
            <span>Τηλέφωνο</span><strong>+30 695 558 2490</strong><span aria-hidden="true">↗</span>
          </a>
          <a href="https://github.com/sdi2200135" target="_blank" rel="noreferrer">
            <span>GitHub</span><strong>github.com/sdi2200135</strong><span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </PageShell>
  )
}

export default Contact