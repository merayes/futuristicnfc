import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({ className }) => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`${className} backdrop-blur-lg bg-light-gray/90 border-b border-deep-black/10`}
    >
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
          NFC Albüm
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden text-deep-black p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4">
          <Link to="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-gradient-start' 
                  : 'text-deep-black/80 hover:text-gradient-start'
              }`}
            >
              Ana Sayfa
            </motion.button>
          </Link>
          <Link to="/create">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                isActive('/create') 
                  ? 'text-gradient-start' 
                  : 'text-deep-black/80 hover:text-gradient-start'
              }`}
            >
              Albüm Oluştur
            </motion.button>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-white font-bold px-6 py-2 rounded-full hover:shadow-lg hover:shadow-gradient-start/20 transition-all duration-300"
          >
            Giriş Yap
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-light-gray/95 backdrop-blur-lg overflow-hidden"
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className={`w-full px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isActive('/') 
                    ? 'text-gradient-start' 
                    : 'text-deep-black/80 hover:text-gradient-start'
                }`}
              >
                Ana Sayfa
              </motion.button>
            </Link>
            <Link to="/create" onClick={() => setIsMenuOpen(false)}>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className={`w-full px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  isActive('/create') 
                    ? 'text-gradient-start' 
                    : 'text-deep-black/80 hover:text-gradient-start'
                }`}
              >
                Albüm Oluştur
              </motion.button>
            </Link>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-white font-bold px-6 py-2 rounded-full hover:shadow-lg hover:shadow-gradient-start/20 transition-all duration-300"
            >
              Giriş Yap
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
