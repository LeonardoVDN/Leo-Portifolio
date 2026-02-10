import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  )
}

export default App
