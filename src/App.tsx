import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <BrowserRouter>
      {/* O Header fica FORA do Routes para aparecer em todas as páginas */}
      <Header />
      
      <Routes>
        {/* Quando a URL for "/", renderize o componente Home */}
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        {/* No futuro, adicionaremos a rota de detalhes aqui */}
      </Routes>
    </BrowserRouter>
  )
}

export default App