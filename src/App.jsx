import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp, faHouse } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Idioma from './pages/Idioma';
import Gramatica from './components/Gramatica'
import Vocabulario from './components/Vocabulario'
import Verbos from './components/Verbos'

library.add(faChevronDown, faChevronUp, faHouse)

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/idioma/:id" element={<Idioma />} >
              <Route path="gramatica" element={<Gramatica />} />
              <Route path="vocabulario" element={<Vocabulario />} />
              <Route path="verbos" element={<Verbos />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
