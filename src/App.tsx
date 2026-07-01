import Nav from './components/Nav'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Storia from './components/Storia'
import Riconoscimenti from './components/Riconoscimenti'
import MateriaPrima from './components/MateriaPrima'
import Esperienze from './components/Esperienze'
import Atmosfera from './components/Atmosfera'
import Galleria from './components/Galleria'
import Contatti from './components/Contatti'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Storia />
        <Riconoscimenti />
        <MateriaPrima />
        <Esperienze />
        <Atmosfera />
        <Galleria />
        <Contatti />
      </main>
      <Footer />
    </>
  )
}

export default App
