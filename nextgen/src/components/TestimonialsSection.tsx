import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "TechStart Solutions",
      role: "Founder & CEO",
      rating: 5,
      content: "NextGen CA has been instrumental in our company's tax compliance journey. Their expertise in GST filing and business registration saved us months of hassle. Highly recommend their professional services!",
      image: "RS"
    },
    {
      name: "Priya Patel",
      company: "Green Earth Enterprises",
      role: "Finance Manager",
      rating: 5,
      content: "Excellent service for ITR filing! The team guided us through complex tax scenarios and helped maximize our savings. Their attention to detail and timely delivery is commendable.",
      image: "PP"
    },
    {
      name: "Amit Kumar",
      company: "Kumar Industries",
      role: "Managing Director",
      rating: 5,
      content: "Professional, reliable, and always available when needed. NextGen CA handled our complete business setup including company incorporation and compliance. Truly a trusted partner!",
      image: "AK"
    },
    {
      name: "Sneha Gupta",
      company: "Digital Marketing Hub",
      role: "Co-Founder",
      rating: 5,
      content: "From GST registration to monthly filing, everything was seamless. The team's proactive approach and clear communication made tax compliance stress-free for our growing business.",
      image: "SG"
    },
    {
      name: "Vikram Singh",
      company: "Singh & Associates",
      role: "Partner",
      rating: 5,
      content: "Outstanding financial consulting services! Their strategic advice helped us optimize our tax structure and improve cash flow. NextGen CA understands business needs perfectly.",
      image: "VS"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Client Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto">
            What Our Clients Say About Us
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what business owners and 
            entrepreneurs say about our CA services and expertise.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-elegant border-0">
                    <CardContent className="p-8 md:p-12">
                      <div className="space-y-6">
                        {/* Quote Icon */}
                        <Quote className="w-8 h-8 text-primary/20" />
                        
                        {/* Rating */}
                        <div className="flex items-center space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                        
                        {/* Testimonial Content */}
                        <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                          "{testimonial.content}"
                        </blockquote>
                        
                        {/* Client Info */}
                        <div className="flex items-center space-x-4 pt-6 border-t border-border">
                          <div className="w-12 h-12 bg-gradient-professional rounded-full flex items-center justify-center text-white font-semibold">
                            {testimonial.image}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-soft border-border hover:bg-muted"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-soft border-border hover:bg-muted"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-110"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">2000+</div>
            <div className="text-sm text-muted-foreground">ITR Filed</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">100%</div>
            <div className="text-sm text-muted-foreground">Compliance Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;