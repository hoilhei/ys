import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon, X, ZoomIn } from 'lucide-react';
import { motion } from 'motion/react';

export default function ActivityGallery({ photoPaths, departmentName, viewOriginal }: {
  photoPaths: string[];
  departmentName: string;
  viewOriginal?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [unavailablePhotos, setUnavailablePhotos] = useState<number[]>([]);
  const originalDialog = useRef<HTMLDialogElement>(null);
  const photoWasDragged = useRef(false);
  const photoCount = photoPaths.length;
  const canSlide = photoCount > 1;
  const photoPath = photoPaths[activeIndex];
  const photoSrc = photoPath ? `${import.meta.env.BASE_URL}images/${photoPath}` : undefined;
  const photoAlt = `${departmentName} 활동 사진 ${activeIndex + 1}`;
  const photoAvailable = photoSrc && !unavailablePhotos.includes(activeIndex);
  const moveSlide = (direction: number) => {
    setActiveIndex(index => (index + direction + photoCount) % photoCount);
  };
  const photo = (
    <img
      key={activeIndex}
      src={photoSrc}
      alt={photoAlt}
      className="h-full w-full object-cover"
      draggable={false}
      loading="lazy"
      onError={() => setUnavailablePhotos(photos => [...photos, activeIndex])}
    />
  );

  return (
    <section
      aria-label={`${departmentName} 활동 사진`}
      aria-roledescription={canSlide ? '슬라이드' : undefined}
      className="min-w-0 text-left"
      onKeyDown={event => {
        if (!originalDialog.current?.open && canSlide && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
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
        <motion.div
          role="group"
          aria-roledescription="사진"
          aria-label={photoPath ? `${activeIndex + 1} / ${photoCount}` : undefined}
          className={canSlide ? 'h-full cursor-grab active:cursor-grabbing [touch-action:pan-y_pinch-zoom]!' : 'h-full'}
          drag={canSlide ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          dragSnapToOrigin
          dragMomentum={false}
          onPointerDownCapture={event => {
            if (event.isPrimary && event.button === 0) photoWasDragged.current = false;
          }}
          onDragStart={() => { photoWasDragged.current = true; }}
          onDragEnd={(event, { offset }) => {
            if (event.type === 'pointercancel' || Math.abs(offset.x) < 40 || Math.abs(offset.x) <= Math.abs(offset.y)) return;
            moveSlide(offset.x < 0 ? 1 : -1);
          }}
        >
          {!photoAvailable ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-14 text-center text-brand-sage">
              <ImageIcon className="h-10 w-10 opacity-50" aria-hidden="true" />
              <span className="text-sm font-medium">{departmentName} 활동 사진 준비 중</span>
            </div>
          ) : viewOriginal ? (
            <button
              type="button"
              aria-label={`${photoAlt} 원본 보기`}
              aria-haspopup="dialog"
              onClick={event => {
                if (event.detail > 0 && photoWasDragged.current) return;
                event.currentTarget.focus({ preventScroll: true });
                originalDialog.current?.showModal();
              }}
              className="block h-full w-full [cursor:inherit] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white"
            >
              {photo}
              <span aria-hidden="true" className="absolute right-3 top-3 rounded-full bg-black/65 p-2 text-white">
                <ZoomIn className="h-5 w-5" />
              </span>
            </button>
          ) : photo}
        </motion.div>
        {canSlide && (
          <>
            <button
              type="button"
              aria-label="이전 활동 사진"
              onClick={() => moveSlide(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/45 text-brand-brown shadow-md transition-colors hover:bg-brand-sage hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage cursor-pointer lg:pointer-fine:bg-white/95"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="다음 활동 사진"
              onClick={() => moveSlide(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/45 text-brand-brown shadow-md transition-colors hover:bg-brand-sage hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage cursor-pointer lg:pointer-fine:bg-white/95"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <span aria-live="polite" aria-atomic="true" className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-brown/75 px-3 py-1 text-xs font-medium text-white">
              {activeIndex + 1} / {photoCount}
            </span>
          </>
        )}
      </div>
      {viewOriginal && photoAvailable && (
        <dialog
          ref={originalDialog}
          aria-label={`${photoAlt} 원본`}
          onClick={event => {
            if (event.target === event.currentTarget) event.currentTarget.close();
          }}
          className="fixed inset-0 m-auto h-fit w-fit max-h-none max-w-none overflow-hidden rounded-2xl border border-brand-gold/15 bg-transparent p-0 backdrop:bg-black/80"
        >
          <button
            type="button"
            aria-label="사진 팝업 닫기"
            onClick={() => originalDialog.current?.close()}
            className="absolute right-3 top-3 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white text-brand-brown hover:bg-brand-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <img
            src={photoSrc}
            alt={photoAlt}
            className="block h-auto max-h-[calc(100dvh-2rem)] w-auto max-w-[calc(100dvw-2rem)] object-contain"
            loading="lazy"
          />
        </dialog>
      )}
    </section>
  );
}
