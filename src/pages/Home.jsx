const categories = [
  ['About Me', 'about-me', 'about'],
  ['Education', 'education', 'education'],
  ['Projects', 'projects', 'projects'],
  ['Seminars', 'seminars', 'seminars'],
  ['Skills', 'skills', 'skills'],
  ['Contact', 'contact', 'contact'],
]

function Home() {
  return (
    <>
      <header>
        <h1>Ελένη Παπαθανασίου</h1>
        <p>Φοιτήτρια Πληροφορικής &amp; Τηλεπικοινωνιών — ΕΚΠΑ</p>
      </header>

      <main>
        <section className="category-board" aria-label="Portfolio categories">
          {categories.map(([label, page, color]) => (
            <a
              key={page}
              href={`?page=${page}`}
              className={`category-button category-button--${color}`}
            >
              {label}
            </a>
          ))}
        </section>
      </main>

      <footer>© 2026 Ελένη Παπαθανασίου</footer>
    </>
  )
}

export default Home