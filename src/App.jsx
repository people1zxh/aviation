import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import HistorySection from './components/HistorySection'
import MilitarySection from './components/MilitarySection'
import BrandsSection from './components/BrandsSection'
import TrainingSection from './components/TrainingSection'
import CareerSection from './components/CareerSection'
import JourneySection from './components/JourneySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HistorySection />
        <MilitarySection />
        <BrandsSection />
        <TrainingSection />
        <CareerSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

