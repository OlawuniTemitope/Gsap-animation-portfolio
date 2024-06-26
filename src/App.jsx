import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
 import Navbar from "./components/NavBar"
import Model from "./components/Model"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer" 

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black h-full">
      <Navbar/>
      <Hero />
      <Highlights/>
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
