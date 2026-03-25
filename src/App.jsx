import Hero from './components/Hero'
import Features from './components/Features'
import Collection from './components/Collection'
import Footer from './components/Footer'
import RacketScene from './components/RacketScene'

function App() {
  return (
    <main className="relative bg-black text-white min-h-screen">
      <RacketScene />
      <Hero />
      <Features />
      <Collection />
      <Footer />
    </main>
  )
}

export default App
