import { motion } from 'framer-motion'
import { useState } from 'react'
import { PhotoIcon, MicrophoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

const CreateAlbum = () => {
  const [photos, setPhotos] = useState([])
  const [recordings, setRecordings] = useState([])
  const [isRecording, setIsRecording] = useState(false)

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files)
    setPhotos([...photos, ...files])
  }

  const handleRemovePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index))
  }

  const handleRemoveRecording = (index) => {
    setRecordings(recordings.filter((_, i) => i !== index))
  }

  const startRecording = () => {
    setIsRecording(true)
    // Ses kaydı başlatma mantığı buraya gelecek
  }

  const stopRecording = () => {
    setIsRecording(false)
    // Ses kaydını durdurma ve kaydetme mantığı buraya gelecek
    setRecordings([...recordings, { name: 'Yeni Kayıt', duration: '0:30' }])
  }

  return (
    <div className="min-h-screen bg-light-gray py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
            Yeni Albüm Oluştur
          </h1>
          <p className="text-deep-black/80">
            Fotoğraflarınızı ve ses kayıtlarınızı ekleyerek kişisel NFC albümünüzü oluşturun.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fotoğraf Yükleme Bölümü */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-deep-black/10"
          >
            <h2 className="text-xl font-semibold mb-4 text-deep-black">Fotoğraflar</h2>
            <div className="space-y-4">
              <label className="block">
                <div className="border-2 border-dashed border-deep-black/20 rounded-xl p-6 text-center cursor-pointer hover:border-gradient-start transition-colors duration-300">
                  <PhotoIcon className="w-12 h-12 mx-auto mb-2 text-gradient-start" />
                  <span className="text-deep-black/80">Fotoğraf seçmek için tıklayın</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
              </label>
              <div className="grid grid-cols-2 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Uploaded ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => handleRemovePhoto(index)}
                      className="absolute top-2 right-2 bg-white/90 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <XMarkIcon className="w-5 h-5 text-deep-black" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Ses Kaydı Bölümü */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-deep-black/10"
          >
            <h2 className="text-xl font-semibold mb-4 text-deep-black">Ses Kayıtları</h2>
            <div className="space-y-4">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`w-full py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 ${
                  isRecording
                    ? 'bg-gradient-to-r from-gradient-end to-gradient-start text-white'
                    : 'bg-gradient-to-r from-gradient-start to-gradient-middle text-white'
                }`}
              >
                <MicrophoneIcon className="w-6 h-6" />
                <span>{isRecording ? 'Kaydı Durdur' : 'Kayda Başla'}</span>
              </button>
              <div className="space-y-2">
                {recordings.map((recording, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-deep-black/5 rounded-lg group"
                  >
                    <div>
                      <p className="font-medium text-deep-black">{recording.name}</p>
                      <p className="text-sm text-deep-black/60">{recording.duration}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveRecording(index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <XMarkIcon className="w-5 h-5 text-deep-black" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-white font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-gradient-start/20 transition-all duration-300"
          >
            Albümü Kaydet
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default CreateAlbum 