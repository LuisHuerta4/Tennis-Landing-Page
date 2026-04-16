import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Collection from './components/Collection'
import Technology from './components/Technology'
import Ticker from './components/Ticker'
import Footer from './components/Footer'
import RacketScene from './components/RacketScene'
import ScrollAnimationManager from './components/ScrollAnimationManager'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import { loadStore } from './lib/loadStore'

loadStore.onReady = null // reset on hot reload

function App() {
  const [modelReady, setModelReady] = useState(false)
  const [heroCanPlay, setHeroCanPlay] = useState(false)

  loadStore.onReady = () => setModelReady(true)

  return (
    <main className="relative bg-bg text-text min-h-screen overflow-x-hidden">
      <LoadingScreen
        ready={modelReady}
        onComplete={() => setHeroCanPlay(true)}
      />
      <RacketScene />
      <ScrollAnimationManager />
      <Navbar />
      <Hero canPlay={heroCanPlay} />
      <Features />
      <Ticker />
      <Technology />
      <Collection />
      <Footer />
    </main>
  )
}

export default App