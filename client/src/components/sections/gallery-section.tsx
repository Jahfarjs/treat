import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import weddingBuffet from "@assets/generated_images/wedding_buffet_elegant_display.webp";
import corporateEvent from "@assets/generated_images/corporate_event_catering_setup.webp";
import birthdayDessert from "@assets/generated_images/birthday_celebration_dessert_table.webp";
import appetizers from "@assets/generated_images/gourmet_appetizers_close-up.webp";
import thali from "@assets/generated_images/traditional_south_indian_thali.webp";
import gardenEvent from "@assets/generated_images/garden_event_elegant_setup.webp";
import fineDining from "@assets/generated_images/fine_dining_plated_course.webp";
import culturalEvent from "@assets/generated_images/cultural_celebration_vibrant_decorations.webp";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: weddingBuffet,
      alt: "Elegant wedding buffet with traditional dishes",
      category: "Weddings",
    },
    {
      src: corporateEvent,
      alt: "Corporate event catering setup",
      category: "Corporate",
    },
    {
      src: birthdayDessert,
      alt: "Birthday celebration dessert table",
      category: "Birthdays",
    },
    {
      src: appetizers,
      alt: "Gourmet appetizers presentation",
      category: "Food",
    },
    {
      src: thali,
      alt: "Traditional South Indian feast",
      category: "Cultural",
    },
    {
      src: gardenEvent,
      alt: "Outdoor garden event setup",
      category: "Events",
    },
    {
      src: fineDining,
      alt: "Fine dining plated course",
      category: "Food",
    },
    {
      src: culturalEvent,
      alt: "Cultural celebration decorations",
      category: "Cultural",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-gallery-title"
          >
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our culinary artistry and beautifully executed events
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedImage(index)}
              data-testid={`img-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              size="icon"
              variant="outline"
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
              data-testid="button-close-lightbox"
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="max-w-6xl max-h-[90vh]">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-white text-center mt-4 text-lg">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
