import NFCCard from '../components/NFCCard'
import Background from '../components/Background'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8 pt-32 px-4 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              DİJİTAL ANILARINIZI <br />
              CANLANDIRIN
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Fotoğraflarınızı ve ses kayıtlarınızı NFC teknolojisi ile güçlendirilmiş 
            büyülü bir dijital albüme dönüştürün. Doğum günleri, yıldönümleri ve 
            özel anlar için mükemmel bir hediye.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        >
          <div className="bg-black/20 backdrop-blur-lg p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors duration-300">
            <div className="text-purple-400 text-2xl mb-4">📸</div>
            <h3 className="text-white text-xl font-semibold mb-2">Fotoğraf Yükle</h3>
            <p className="text-gray-400">En değerli anılarınızı paylaşın</p>
          </div>
          <div className="bg-black/20 backdrop-blur-lg p-6 rounded-xl border border-white/5 hover:border-pink-500/30 transition-colors duration-300">
            <div className="text-pink-400 text-2xl mb-4">🎵</div>
            <h3 className="text-white text-xl font-semibold mb-2">Ses Kaydı Ekle</h3>
            <p className="text-gray-400">Kişisel ses mesajlarınızı ekleyin</p>
          </div>
          <div className="bg-black/20 backdrop-blur-lg p-6 rounded-xl border border-white/5 hover:border-red-500/30 transition-colors duration-300">
            <div className="text-red-400 text-2xl mb-4">🎁</div>
            <h3 className="text-white text-xl font-semibold mb-2">NFC Kart Alın</h3>
            <p className="text-gray-400">Kişiselleştirilmiş dijital albümünüzü alın</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <NFCCard />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <Link to="/create">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-lg">
              Albümünüzü Oluşturun
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 