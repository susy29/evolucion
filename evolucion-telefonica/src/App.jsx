import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Companies from './pages/Companies'
import SalesPoints from './pages/SalesPoints'
import Support from './pages/Support'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/soluciones" element={<Solutions />} />
          <Route path="/companias" element={<Companies />} />
          <Route path="/puntos-de-venta" element={<SalesPoints />} />
          <Route path="/soporte" element={<Support />} />
          <Route path="/preguntas-frecuentes" element={<FAQ />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
