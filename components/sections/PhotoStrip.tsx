'use client'

const photos = [
  { src: '/images/halloween-group-photo.jpg', alt: 'Teacher and students in Halloween costumes' },
  { src: '/images/halloween-spider-game.jpg', alt: 'Halloween spider web game' },
  { src: '/images/halloween-teacher-puzzle.jpg', alt: 'Teacher and student doing a puzzle' },
  { src: '/images/halloween-blindfold-game.jpg', alt: 'Blindfold matching game' },
  { src: '/images/halloween-trick-or-treat.jpg', alt: 'Trick-or-treating in costume' },
  { src: '/images/exercise-park.jpg', alt: 'Children at the park' },
  { src: '/images/Harry.png', alt: 'Young student' },
  { src: '/images/field-trip.PNG', alt: 'Class field trip' },
  { src: '/images/Hikari.jpg', alt: 'Hikari' },
  { src: '/images/pe.PNG', alt: 'PE class' },
  { src: '/images/firetruck.PNG', alt: 'Fire station visit' },
  { src: '/images/rosa.JPG', alt: 'Student in library' },
  { src: '/images/azusa.JPG', alt: 'Azusa' },
  { src: '/images/potatoe.PNG', alt: 'Gardening activity' },
  { src: '/images/Harry-two.JPG', alt: 'Young student' },
  { src: '/images/brandon.PNG', alt: 'Mr. Brandon' },
  { src: '/images/Satoko.jpg', alt: 'Mrs. Satoko' },
  { src: '/images/Remon.jpg', alt: 'Mr. Remon' },
]

export default function PhotoStrip() {
  return (
    <div className="relative overflow-hidden rounded-[16px] border border-cream-dark bg-white py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-max gap-3 animate-scroll-strip">
        {[...photos, ...photos].map((photo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            className="h-[140px] w-[200px] flex-shrink-0 rounded-[10px] object-cover"
          />
        ))}
      </div>
    </div>
  )
}
