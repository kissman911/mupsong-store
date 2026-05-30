'use client'

import { useState } from 'react'
import Image from 'next/image'

export function ProductGallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-800 text-gray-400">
        <span className="text-lg">No image</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
        <Image
          src={images[activeIndex]}
          alt={`Product view ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex flex-wrap gap-3">
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1}`}
            className={`relative h-20 w-20 overflow-hidden rounded-md bg-white transition-all ${
              index === activeIndex
                ? 'ring-2 ring-blue-500'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="80px"
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
