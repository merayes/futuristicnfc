import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CreateAlbum from './pages/CreateAlbum'

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-light-gray text-deep-black overflow-hidden font-['Outfit'] flex flex-col">
        <Navbar className="fixed top-0 left-0 right-0 z-50" />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateAlbum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
