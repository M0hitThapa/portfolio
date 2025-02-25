import Navbar from "./Sections/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Projects from "./Sections/Projects"
import WorkExperience from "./Sections/Experience"
import Footer from "./Sections/Footer"
import ContactForm from "./Sections/Contact"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      
      <Projects />
      <WorkExperience />
      <ContactForm />
      
     
      
      <Footer />
    </div>
  )
}

export default App