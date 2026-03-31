import Hero from './components/Hero'
import Features from './components/Features'
import Collection from './components/Collection'
import Footer from './components/Footer'
import RacketScene from './components/RacketScene'
import ScrollAnimationManager from './components/ScrollAnimationManager'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <RacketScene />
      <ScrollAnimationManager />
      <Navbar />
      <Hero />
      <Features />
      <Collection />
      <Footer />
    </main>
  )
}

export default App