import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Utensils,
  Briefcase,
  Cake,
  PartyPopper,
  Menu,
  CalendarCheck,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Utensils,
      title: "Wedding Catering",
      description:
        "Create the perfect culinary experience for your special day with our customized wedding menus, elegant presentation, and attentive service.",
      features: [
        "Custom Menu Design",
        "Buffet & Plated Service",
        "Cake & Desserts",
      ],
      popular: true,
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "Impress your clients and colleagues with professional catering for conferences, meetings, product launches, and corporate celebrations.",
      features: [
        "Business Lunches",
        "Conference Catering",
        "Product Launches",
      ],
      popular: false,
    },
    {
      icon: Cake,
      title: "Birthday Parties",
      description:
        "Make birthdays unforgettable with themed decorations, delicious food, and complete party planning services for all ages.",
      features: [
        "Themed Decorations",
        "Kids & Adult Parties",
        "Custom Cakes",
      ],
      popular: false,
    },
    {
      icon: PartyPopper,
      title: "Cultural Celebrations",
      description:
        "Honor traditions with authentic cuisine and decorations for festivals, religious ceremonies, and cultural gatherings.",
      features: [
        "Traditional Menus",
        "Cultural Decorations",
        "Custom Rituals",
      ],
      popular: false,
    },
    {
      icon: Menu,
      title: "Custom Menus",
      description:
        "Work with our chefs to create personalized menus featuring your favorite cuisines, dietary preferences, and presentation styles.",
      features: [
        "Any Cuisine Type",
        "Dietary Accommodations",
        "Tasting Sessions",
      ],
      popular: true,
    },
    {
      icon: CalendarCheck,
      title: "Full Event Planning",
      description:
        "Let us handle everything from venue selection to final cleanup. Relax and enjoy your event while we manage all the details.",
      features: [
        "Venue Coordination",
        "Decor & Setup",
        "Complete Management",
      ],
      popular: false,
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-services-title"
          >
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive catering and event management solutions tailored to
            your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300 relative overflow-hidden"
              data-testid={`card-service-${index}`}
            >
              {service.popular && (
                <Badge
                  className="absolute top-4 right-4 bg-primary text-primary-foreground"
                  data-testid={`badge-popular-${index}`}
                >
                  Popular
                </Badge>
              )}
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don't see exactly what you're looking for?
          </p>
          <p className="text-foreground font-medium">
            Contact us for custom packages tailored to your specific needs and
            budget
          </p>
        </div>
      </div>
    </div>
  );
}
