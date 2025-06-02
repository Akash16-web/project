import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { X } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import SectionTitle from './ui/SectionTitle';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const currentImage = selectedImage !== null
    ? galleryImages.find((img) => img.id === selectedImage)
    : null;

  return (
    <section id="gallery" className="py-20 bg-[#F4C2C2]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Gallery"
          subtitle="Take a visual journey through our cafe's ambiance and culinary creations"
        />

        {/* Carousel with Video as First Slide */}
        <div ref={sliderRef} className="keen-slider overflow-hidden">

          {/* YouTube Video Slide */}
          <div className="keen-slider__slide">
            <div className="relative w-full h-[257px] aspect-video rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Xv3KDPhpCtA?si=K6QMV0dgbP8MZC3g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Image Slides */}
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="keen-slider__slide rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && currentImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <div className="max-w-4xl max-h-[80vh]">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
