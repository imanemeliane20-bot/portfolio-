import Contact  from "./elements/Contact"
import Experiences from "./elements/Experiences"
import Footer from "./elements/Footer"
import Hero from "./elements/Hero"
import Projects from "./elements/Projects"
import Services from "./elements/Services"
import './index.css'
import Nav from "./Nav"
function App() {
  return (
    <div>
      <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
    </div>
  )
}

export default App;