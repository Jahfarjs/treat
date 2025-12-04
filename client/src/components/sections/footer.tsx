import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Youtube, MapPin, Heart } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
    { name: "Testimonials", id: "testimonials" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <img
              src="/logo.png"
              alt="Treat Caters & Events"
              className="h-28 w-auto mb-4"
              data-testid="text-footer-brand"
            />
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Creating unforgettable moments through exceptional catering and
              event management services since 2009.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@treat_kitchen/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-youtube"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
              <a
                href="tel:+917356200789"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-phone"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:treatcater@gmail.com"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-email"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.id}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+917356200789"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 73562 00789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:treatcater@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  treatcater@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                Valluvally, N Paravur, Cochin
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Stay Updated
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive updates about our services and special offers
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-newsletter">Subscribe</Button>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Treat Caters & Events. All rights
            reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for
            creating memorable moments
          </p>
        </div>
      </div>
    </footer>
  );
}
