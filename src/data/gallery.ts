export interface GalleryImage {
  id: string
  src: string
  alt: string
  height: 'short' | 'medium' | 'tall'
}

export const galleryData: GalleryImage[] = [
  { id: '1', src: '/images/gallery-1.jpg', alt: 'Us together', height: 'tall' },
  { id: '2', src: '/images/gallery-2.svg', alt: 'Your smile', height: 'medium' },
  { id: '3', src: '/images/gallery-3.svg', alt: 'Beautiful moment', height: 'short' },
  { id: '4', src: '/images/gallery-4.svg', alt: 'Our adventure', height: 'medium' },
  { id: '5', src: '/images/gallery-5.svg', alt: 'Sunset together', height: 'tall' },
  { id: '6', src: '/images/gallery-6.svg', alt: 'Sweet memory', height: 'short' },
  { id: '7', src: '/images/gallery-7.svg', alt: 'Laughing together', height: 'medium' },
  { id: '8', src: '/images/gallery-8.svg', alt: 'Forever us', height: 'tall' },
  { id: '9', src: '/images/gallery-9.png', alt: 'My favorite', height: 'short' },
]
