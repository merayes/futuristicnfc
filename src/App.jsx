import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateAlbum from './pages/CreateAlbum'

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 overflow-hidden font-['Outfit']">
        <Navbar className="fixed top-0 left-0 right-0 z-50" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateAlbum />} />
        </Routes>
      </div>
    </Router>
  )
}
