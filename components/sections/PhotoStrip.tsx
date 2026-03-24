'use client'

export default function PhotoStrip() {
  return (
    <div className="relative overflow-hidden rounded-[16px] border border-cream-dark bg-white py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-max gap-3 animate-scroll-strip">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="h-[140px] w-[200px] flex-shrink-0 rounded-[10px] border border-grey-border bg-grey"
          />
        ))}
      </div>
    </div>
  )
}
