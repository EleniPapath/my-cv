import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Education from './pages/Education.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Seminars from './pages/Seminars.jsx'
import Skills from './pages/Skills.jsx'

const pages = {
  'about-me': AboutMe,
  education: Education,
  projects: Projects,
  seminars: Seminars,
  skills: Skills,
  contact: Contact,
}

function App() {
  const pageName = new URLSearchParams(window.location.search).get('page')
  const Page = pages[pageName] ?? Home

  return <Page />
}

export default App
