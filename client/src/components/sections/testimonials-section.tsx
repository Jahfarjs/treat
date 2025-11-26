import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      initials: "PS",
      event: "Wedding Reception",
      rating: 5,
      text: "Treat Caters made our wedding absolutely perfect! The food was exceptional, presentation was stunning, and their team was so professional. Our guests are still talking about the amazing dishes!",
    },
    {
      name: "Rajesh Kumar",
      initials: "RK",
      event: "Corporate Annual Meeting",
      rating: 5,
      text: "We've used Treat Caters for multiple corporate events and they never disappoint. Punctual, professional, and the food quality is consistently excellent. Highly recommend for business functions!",
    },
    {
      name: "Anjali Reddy",
      initials: "AR",
      event: "60th Birthday Celebration",
      rating: 5,
      text: "From planning to execution, everything was flawless! They understood exactly what we wanted and delivered beyond our expectations. The themed decorations and custom menu were incredible.",
    },
    {
      name: "Suresh Patel",
      initials: "SP",
      event: "Cultural Festival",
      rating: 5,
      text: "Authentic traditional cuisine prepared with love and care. They respected all our cultural requirements and made our festival celebration truly special. Outstanding service!",
    },
    {
      name: "Meera Iyer",
      initials: "MI",
      event: "Engagement Party",
      rating: 5,
      text: "The attention to detail was remarkable! Every dish was perfectly prepared and beautifully presented. The team was courteous and ensured everything ran smoothly. Thank you!",
    },
    {
      name: "Vikram Singh",
      initials: "VS",
      event: "Product Launch Event",
      rating: 5,
      text: "Professional, creative, and absolutely delicious! Treat Caters helped us impress our clients with both the food and the overall event management. Will definitely work with them again!",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-testimonials-title"
          >
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied clients who trusted us with their special
            moments
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-primary text-primary"
                  data-testid={`star-rating-${i}`}
                />
              ))}
            </div>
            <span className="text-foreground font-semibold text-lg ml-2">
              5.0 Average Rating
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300 relative"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
