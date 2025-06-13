import NFCCard from '../components/NFCCard'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-light-gray overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-8 pt-20 sm:pt-32 px-4 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 sm:space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            DİJİTAL ANILARINIZI <br className="hidden sm:block" />
            CANLANDIRIN
          </h1>
          <p className="text-deep-black/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
            Fotoğraflarınızı ve ses kayıtlarınızı NFC teknolojisi ile güçlendirilmiş 
            büyülü bir dijital albüme dönüştürün. Doğum günleri, yıldönümleri ve 
            özel anlar için mükemmel bir hediye.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-8 w-full"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-deep-black/10 group hover:border-purple-400 transition-all duration-300 cursor-pointer"
          >
            <div className="text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 text-purple-400">📸</div>
            <h3 className="text-xl font-semibold mb-3 text-deep-black group-hover:text-purple-400 transition-colors duration-300">Fotoğraf Yükle</h3>
            <p className="text-deep-black/70 group-hover:text-deep-black/90 transition-colors duration-300">
              Albümünüze fotoğraflar ekleyin ve NFC kartlarınıza yükleyin.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-deep-black/10 group hover:border-pink-500 transition-all duration-300 cursor-pointer"
          >
            <div className="text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 text-pink-500">🎵</div>
            <h3 className="text-xl font-semibold mb-3 text-deep-black group-hover:text-pink-500 transition-colors duration-300">Ses Kaydı Ekle</h3>
            <p className="text-deep-black/70 group-hover:text-deep-black/90 transition-colors duration-300">
              Anılarınıza ses kayıtları ekleyin ve dinleyicilerinizle paylaşın.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-deep-black/10 group hover:border-red-500 transition-all duration-300 cursor-pointer"
          >
            <div className="text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 text-red-500">🎁</div>
            <h3 className="text-xl font-semibold mb-3 text-deep-black group-hover:text-red-500 transition-colors duration-300">NFC Kart Al</h3>
            <p className="text-deep-black/70 group-hover:text-deep-black/90 transition-colors duration-300">
              NFC kartlarınızı alın ve içeriklerinizi yükleyin.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-12 w-full flex justify-center"
        >
          <NFCCard />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 sm:mt-8 mb-8 sm:mb-12"
        >
          <Link to="/create">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300"
            >
              Albüm Oluşturmaya Başla
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Home 