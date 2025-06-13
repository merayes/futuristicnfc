import { motion } from "framer-motion";

const NFCCard = () => {
  return (
    <motion.div
      className="w-full max-w-[340px] h-[200px] rounded-2xl shadow-2xl bg-white flex flex-col justify-between p-4 sm:p-6 relative overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {/* Üst kısım */}
      <div className="flex justify-between items-start">
        <div>
          <div className="text-deep-black text-base sm:text-lg font-semibold">Classic Black</div>
          <div className="text-deep-black/60 text-xs sm:text-sm mt-1">Elegant & Professional</div>
        </div>
        {/* NFC sinyal ikonu */}
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-gradient-start sm:w-6 sm:h-6">
          <g>
            <rect width="24" height="24" fill="none" />
            <path d="M19 7C20.1046 8.10457 20.1046 9.89543 19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 9C16.5523 9.55228 16.5523 10.4477 16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </g>
        </svg>
      </div>

      {/* Alt kısım */}
      <div className="flex justify-between items-end w-full mt-4 sm:mt-8">
        <div className="flex flex-col gap-1">
          <span className="text-deep-black/60 text-[10px] sm:text-xs">contact@example.com</span>
          <span className="text-deep-black/40 text-[10px] sm:text-xs">www.example.com</span>
        </div>
        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end inline-block"></span>
      </div>
    </motion.div>
  )
}

export default NFCCard
