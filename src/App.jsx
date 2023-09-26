import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import ContactMe from './components/ContactMe'


function App() {

  return (
 
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      <Header/>
    <section id='hero' className='snap-start'>
      <Hero/>
    </section>

    <section id='about' className='snap-center ' >
      <About />
    </section>

    {/* <section className='snap-center'>
      <WorkExprience/>
    </section> */}
  
    <section id='skills' className='snap-start'>
      <Skills/>
    </section>
  
    <section id='projects' className='snap-start'>
      <Project/>
    </section>

    <section className='snap-start'>
      <ContactMe />
    </section>
    </div>

  )
}

export default App