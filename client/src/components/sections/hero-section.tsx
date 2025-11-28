import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/hero_elegant_catered_event.webp";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          data-testid="text-hero-title"
        >
          Treat Caters & Events
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-8 max-w-3xl mx-auto"
          data-testid="text-hero-tagline"
        >
          Creating Unforgettable Moments
        </p>
        <p className="text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
          Experience premium catering and exceptional event management for
          weddings, corporate gatherings, birthdays, and cultural celebrations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={onCtaClick}
            className="bg-primary text-primary-foreground border border-primary-border px-8 py-6 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all"
            data-testid="button-hero-contact"
          >
            Plan Your Event
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onCtaClick}
            className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded-lg"
            data-testid="button-hero-learn-more"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div
              className="text-4xl sm:text-5xl font-bold text-white mb-2"
              data-testid="text-stat-events"
            >
              500+
            </div>
            <div className="text-white/80 text-sm sm:text-base">
              Events Completed
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-4xl sm:text-5xl font-bold text-white mb-2"
              data-testid="text-stat-clients"
            >
              15+
            </div>
            <div className="text-white/80 text-sm sm:text-base">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-4xl sm:text-5xl font-bold text-white mb-2"
              data-testid="text-stat-satisfaction"
            >
              100%
            </div>
            <div className="text-white/80 text-sm sm:text-base">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </div>
  );
}
