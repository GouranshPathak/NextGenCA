import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Calendar, Target, Eye, Heart, CheckCircle } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "CA Rajesh Sharma",
      role: "Founder & Managing Partner",
      experience: "15+ Years",
      specialization: "Tax Planning & GST",
      description: "Leading expert in corporate taxation with extensive experience in GST compliance and business advisory.",
      initials: "RS"
    },
    {
      name: "CA Priya Mehta",
      role: "Senior Partner",
      experience: "12+ Years", 
      specialization: "Audit & Assurance",
      description: "Specialized in statutory audits, internal controls, and financial reporting for various industries.",
      initials: "PM"
    },
    {
      name: "CA Amit Patel",
      role: "Partner",
      experience: "10+ Years",
      specialization: "Business Registration",
      description: "Expert in company incorporation, compliance management, and startup advisory services.",
      initials: "AP"
    }
  ];

  const milestones = [
    { year: "2009", event: "Founded NextGen CA Firm" },
    { year: "2012", event: "Expanded to Business Advisory" },
    { year: "2015", event: "Digital Transformation Initiative" },
    { year: "2018", event: "500+ Clients Milestone" },
    { year: "2021", event: "Launched Online Services" },
    { year: "2024", event: "AI-Powered Tax Solutions" }
  ];

  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description: "We ensure 100% accuracy in all tax filings and compliance matters."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We tailor solutions to your specific needs."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional service quality in every engagement."
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Building long-term relationships based on transparency and integrity."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-professional-blue-light to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              About NextGen CA Firm
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Your Trusted <span className="text-primary">Tax Partners</span> Since 2009
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              With over 15 years of experience, NextGen CA Firm has been providing 
              comprehensive tax consultancy and business advisory services to help 
              businesses thrive in an ever-changing regulatory landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-card border-0">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted CA firm, empowering businesses with 
                  innovative tax solutions and strategic financial guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card border-0">
              <CardHeader>
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Simplifying tax compliance and business processes through 
                  expert guidance, technology, and personalized service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card border-0">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, excellence, client focus, and continuous innovation 
                  form the foundation of everything we do.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values shape our approach to serving clients and building lasting relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={value.title} className="text-center space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-16 h-16 bg-gradient-professional rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of chartered accountants brings decades of 
              combined expertise to serve your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={founder.name} className="text-center shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-24 h-24 bg-gradient-professional rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                    {founder.initials}
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{founder.name}</CardTitle>
                    <Badge variant="secondary">{founder.role}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground">Experience</p>
                      <p className="text-foreground">{founder.experience}</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Specialization</p>
                      <p className="text-foreground">{founder.specialization}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {founder.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small CA practice to a leading tax consultancy firm, 
              here's how we've grown over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={milestone.year} className="text-center shadow-card border-0">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-primary">{milestone.year}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-professional text-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose NextGen CA Firm?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We combine traditional expertise with modern technology to deliver 
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "15+ Years of Experience",
              "500+ Satisfied Clients", 
              "100% Compliance Rate",
              "Digital-First Approach",
              "24/7 Customer Support",
              "Affordable Pricing"
            ].map((feature, index) => (
              <div key={feature} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;