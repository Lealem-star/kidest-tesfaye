export interface GalleryImage {
  id: string
  src: string
  alt: string
  height: 'short' | 'medium' | 'tall'
}

export const galleryData: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallary-1.jpg',
    alt: 'Us together',
    height: 'tall',
  },
  {
    id: '2',
    src: '/images/kidest.png',
    alt: 'My beautiful Kidest',
    height: 'medium',
  },
  {
    id: '3',
    src: '/images/gallery-9.png',
    alt: 'Forever us',
    height: 'short',
  },
]
