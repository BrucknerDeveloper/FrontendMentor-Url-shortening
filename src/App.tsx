import { useState } from 'react'
import {Route, Routes}  from "react-router-dom"

//components
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Features from "./components/Features/Features"
import Pricing from "./components/Pricing/Pricing"
import Resources from "./components/Resources/Resources"
import CallToAction from "./components/CallToAction/CallToAction"
import Footer from "./components/Footer/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
