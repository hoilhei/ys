import { useState } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

export default function ActivityGallery({ photoDirectory, departmentName }: {
  photoDirectory: string;
  departmentName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [unavailablePhotos, setUnavailablePhotos] = useState<number[]>([]);
  const photoCount = 3;
  const moveSlide = (direction: number) => {
    setActiveIndex(index => (index + direction + photoCount) % photoCount);
  };

  return (
    <section
      aria-label={`${departmentName} 활동 사진`}
      aria-roledescription="슬라이드"
      className="min-w-0 text-left"
      onKeyDown={event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          moveSlide(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
    >
      <h3 className="font-serif text-xl md:text-2xl font-medium text-brand-brown mb-6 flex items-center gap-2">
        <ImageIcon className="w-5 h-5 text-brand-gold" aria-hidden="true" />
        <span>함께하는 모습</span>
      </h3>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-gold/15 bg-brand-cream/60">
        <div role="group" aria-roledescription="사진" aria-label={`${activeIndex + 1} / ${photoCount}`} className="h-full">
          {unavailablePhotos.includes(activeIndex) ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-14 text-center text-brand-sage">
              <ImageIcon className="h-10 w-10 opacity-50" aria-hidden="true" />
              <span className="text-sm font-medium">{departmentName} 활동 사진 준비 중</span>
            </div>
          ) : (
            <img
              key={activeIndex}
              src={`${import.meta.env.BASE_URL}images/${photoDirectory}/${activeIndex + 1}.jpg`}
              alt={`${departmentName} 활동 사진 ${activeIndex + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
              onError={() => setUnavailablePhotos(photos => [...photos, activeIndex])}
            />
          )}
        </div>
        <button
          type="button"
          aria-label="이전 활동 사진"
          onClick={() => moveSlide(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-brand-brown shadow-md transition-colors hover:bg-brand-sage hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="다음 활동 사진"
          onClick={() => moveSlide(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-brand-brown shadow-md transition-colors hover:bg-brand-sage hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
        <span aria-live="polite" aria-atomic="true" className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-brown/75 px-3 py-1 text-xs font-medium text-white">
          {activeIndex + 1} / {photoCount}
        </span>
      </div>
    </section>
  );
}
