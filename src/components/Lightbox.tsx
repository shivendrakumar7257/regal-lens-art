import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const current = images[index];
  if (!current) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/98 backdrop-blur-xl animate-fade-in-slow">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        onClick={onPrev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-gold/40 text-gold transition-all hover:bg-gold hover:text-primary-foreground md:left-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={onNext}
        aria-label="Next"
        className="absolute right-4 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-gold/40 text-gold transition-all hover:bg-gold hover:text-primary-foreground md:right-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex max-h-[85vh] max-w-[90vw] flex-col items-center gap-4">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-[80vh] max-w-full object-contain shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] animate-fade-in-slow"
        />
        <p className="font-display text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
          {index + 1} / {images.length} — {current.alt}
        </p>
      </div>
    </div>
  );
}