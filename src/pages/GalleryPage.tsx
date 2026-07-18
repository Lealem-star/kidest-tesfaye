import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaSearchPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { galleryData, type GalleryImage } from '../data/gallery'
import SectionTitle from '../components/ui/SectionTitle'
import PageNav from '../components/layout/PageNav'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % galleryData.length : null,
    )
  }, [])

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryData.length) % galleryData.length : null,
    )
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, goNext, goPrev])

  return (
    <div>
      <SectionTitle title="Our Memories" subtitle="Every picture tells our story" />

      <div className="masonry-grid mb-12">
        {galleryData.map((image: GalleryImage, index: number) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="masonry-item group relative cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => setLightboxIndex(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center rounded-2xl">
              <FaSearchPlus className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl" />
            </div>
          </motion.div>
        ))}
      </div>

      {galleryData.length > 1 && (
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1 }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="pb-12"
        >
          {galleryData.map((image: GalleryImage, index: number) => (
            <SwiperSlide
              key={image.id}
              className="w-64! md:w-80! cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl cursor-pointer z-10"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              <FaTimes />
            </motion.button>

            <motion.button
              className="absolute left-4 md:left-8 text-white/80 hover:text-white text-xl cursor-pointer z-10 glass-card rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </motion.button>

            <motion.button
              className="absolute right-4 md:right-8 text-white/80 hover:text-white text-xl cursor-pointer z-10 glass-card rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); goNext() }}
              aria-label="Next image"
            >
              <FaChevronRight />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="glass-card rounded-3xl p-2 md:p-3 max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryData[lightboxIndex].src}
                alt={galleryData[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              />
              <p className="text-center text-dark/60 text-sm mt-3">
                {galleryData[lightboxIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PageNav currentPath="/gallery" />
    </div>
  )
}
