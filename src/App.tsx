import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  )
}
