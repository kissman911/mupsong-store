'use client'

import { useState } from 'react'

export function ProductGallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-800 text-gray-400">
        <span className="text-lg">Product Image {activeIndex + 1}</span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex h-20 w-20 items-center justify-center rounded-md bg-gray-800 text-xs text-gray-400 transition-all ${
              index === activeIndex
                ? 'ring-2 ring-blue-500'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
