import { motion } from 'framer-motion'
import { useState } from 'react'
import { PhotoIcon, MicrophoneIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'

export default function CreateAlbum() {
  const [step, setStep] = useState(1)
  const [photos, setPhotos] = useState([])
  const [audioFiles, setAudioFiles] = useState([])

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files)
    setPhotos([...photos, ...files])
  }

  const handleAudioUpload = (e) => {
    const files = Array.from(e.target.files)
    setAudioFiles([...audioFiles, ...files])
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Create Your Digital Album</h1>
          <p className="text-gray-400 text-sm sm:text-base">Follow these simple steps to create your personalized NFC album</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8 sm:mb-12">
          {[1, 2, 3].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`flex-1 text-center ${
                stepNumber === step
                  ? 'text-yellow-400'
                  : stepNumber < step
                  ? 'text-green-400'
                  : 'text-gray-600'
              }`}
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full flex items-center justify-center border-2 text-sm sm:text-base ${
                  stepNumber === step
                    ? 'border-yellow-400'
                    : stepNumber < step
                    ? 'border-green-400'
                    : 'border-gray-600'
                }`}
              >
                {stepNumber}
              </div>
              <p className="mt-2 text-xs sm:text-sm">
                {stepNumber === 1
                  ? 'Upload Content'
                  : stepNumber === 2
                  ? 'Customize'
                  : 'Review & Pay'}
              </p>
            </div>
          ))}
        </div>

        {/* Step 1: Upload Content */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 sm:space-y-8"
          >
            <div className="bg-black/30 backdrop-blur-lg p-4 sm:p-8 rounded-xl border border-white/10">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Upload Your Photos</h2>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 sm:p-8 text-center">
                <PhotoIcon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-gray-400 mb-2 sm:mb-4" />
                <p className="text-gray-400 text-sm sm:text-base mb-4">Drag and drop your photos here, or click to browse</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label
                  htmlFor="photo-upload"
                  className="bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-full cursor-pointer hover:bg-yellow-500 transition-colors text-sm sm:text-base"
                >
                  Select Photos
                </label>
              </div>
              {photos.length > 0 && (
                <div className="mt-4">
                  <p className="text-white text-sm sm:text-base mb-2">{photos.length} photos selected</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
                    {photos.map((photo, index) => (
                      <div key={index} className="relative aspect-square">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-black/30 backdrop-blur-lg p-4 sm:p-8 rounded-xl border border-white/10">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Add Voice Messages</h2>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 sm:p-8 text-center">
                <MicrophoneIcon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-gray-400 mb-2 sm:mb-4" />
                <p className="text-gray-400 text-sm sm:text-base mb-4">Record or upload your voice messages</p>
                <input
                  type="file"
                  multiple
                  accept="audio/*"
                  onChange={handleAudioUpload}
                  className="hidden"
                  id="audio-upload"
                />
                <label
                  htmlFor="audio-upload"
                  className="bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-full cursor-pointer hover:bg-yellow-500 transition-colors text-sm sm:text-base"
                >
                  Upload Audio
                </label>
              </div>
              {audioFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-white text-sm sm:text-base mb-2">{audioFiles.length} audio files selected</p>
                  <div className="space-y-2">
                    {audioFiles.map((audio, index) => (
                      <div key={index} className="flex items-center gap-2 sm:gap-4 bg-black/20 p-2 sm:p-3 rounded-lg">
                        <MicrophoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                        <span className="text-white text-sm sm:text-base truncate">{audio.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors text-sm sm:text-base"
              >
                Continue to Customization
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Customize */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 sm:space-y-8"
          >
            <div className="bg-black/30 backdrop-blur-lg p-4 sm:p-8 rounded-xl border border-white/10">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Choose Your Style</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-white text-sm sm:text-base mb-2">Theme Color</label>
                  <select className="w-full bg-black/50 border border-gray-600 rounded-lg p-2 sm:p-3 text-white text-sm sm:text-base">
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="green">Green</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm sm:text-base mb-2">Layout Style</label>
                  <select className="w-full bg-black/50 border border-gray-600 rounded-lg p-2 sm:p-3 text-white text-sm sm:text-base">
                    <option value="grid">Grid</option>
                    <option value="masonry">Masonry</option>
                    <option value="carousel">Carousel</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-600 hover:border-gray-500 transition-colors text-sm sm:text-base"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors text-sm sm:text-base"
              >
                Continue to Review
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Review & Pay */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 sm:space-y-8"
          >
            <div className="bg-black/30 backdrop-blur-lg p-4 sm:p-8 rounded-xl border border-white/10">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Review Your Order</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between text-white text-sm sm:text-base">
                  <span>Photos</span>
                  <span>{photos.length} items</span>
                </div>
                <div className="flex justify-between text-white text-sm sm:text-base">
                  <span>Voice Messages</span>
                  <span>{audioFiles.length} items</span>
                </div>
                <div className="border-t border-gray-600 my-3 sm:my-4"></div>
                <div className="flex justify-between text-white font-semibold text-sm sm:text-base">
                  <span>Total</span>
                  <span>$49.99</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-600 hover:border-gray-500 transition-colors text-sm sm:text-base"
              >
                Back
              </button>
              <button
                className="bg-yellow-400 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors text-sm sm:text-base"
              >
                Proceed to Payment
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 