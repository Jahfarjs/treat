import { Card } from "@/components/ui/card";
import { Users, Award, Heart, Star } from "lucide-react";
import teamImage from "@assets/generated_images/professional_catering_team_photo.webp";

export default function AboutSection() {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Professional chefs and event coordinators with years of experience",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Premium ingredients and impeccable presentation in every dish",
    },
    {
      icon: Heart,
      title: "Passionate Service",
      description:
        "Dedicated to making your event truly special and memorable",
    },
    {
      icon: Star,
      title: "Proven Track Record",
      description:
        "Trusted by hundreds of clients for their most important occasions",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-about-title"
          >
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in creating extraordinary culinary experiences
            and unforgettable events
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src={teamImage}
                alt="Treat Caters & Events professional team"
                className="w-full h-full object-cover"
                data-testid="img-team"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-foreground">
              Excellence in Every Detail
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At Treat Caters & Events, we believe that exceptional food and
              flawless execution are the foundation of memorable occasions. With
              over 15 years of experience, our passionate team has perfected the
              art of catering and event management.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From intimate gatherings to grand celebrations, we bring expertise,
              creativity, and unwavering attention to detail to every event. Our
              commitment is simple: to exceed your expectations and create
              moments you'll cherish forever.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's a wedding, corporate function, birthday celebration,
              or cultural event, we handle every aspect with professionalism and
              care. Our comprehensive services include menu customization,
              venue decoration, complete event planning, and seamless execution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
