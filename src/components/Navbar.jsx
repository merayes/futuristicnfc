import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ className }) => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`${className} backdrop-blur-lg bg-black/40 border-b border-white/5`}
    >
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          NFC Albüm
        </Link>
        
        <div className="flex gap-4">
          <Link to="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-purple-400' 
                  : 'text-white/80 hover:text-white'
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
                  ? 'text-purple-400' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Albüm Oluştur
            </motion.button>
          </Link>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            Giriş Yap
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
