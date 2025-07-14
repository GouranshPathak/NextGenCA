import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Calculator,
  Building,
  PiggyBank,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// ✅ Add slugify utility
const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "GST Registration & Filing",
      description: "Complete GST registration, monthly/quarterly filing, and compliance management.",
      features: ["GST Registration", "Monthly Returns", "Input Tax Credit", "Compliance Support"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Calculator,
      title: "Income Tax Returns",
      description: "Expert ITR filing for individuals, businesses, and companies with maximum tax savings.",
      features: ["Individual ITR", "Business ITR", "Tax Planning", "Refund Processing"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      title: "TDS Filing & Compliance",
      description: "Accurate TDS calculation, filing, and certificate generation for all transactions.",
      features: ["TDS Calculation", "Quarterly Filing", "TDS Certificates", "Compliance Audit"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Building,
      title: "Business Registration",
      description: "End-to-end business setup including company incorporation and licensing.",
      features: ["LLP Registration", "Private Limited", "Partnership", "License Support"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: PiggyBank,
      title: "Financial Consulting",
      description: "Strategic financial advice, planning, and business growth consultation.",
      features: ["Financial Planning", "Investment Advice", "Business Strategy", "Risk Assessment"],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Users,
      title: "Audit & Assurance",
      description: "Comprehensive audit services ensuring compliance and financial transparency.",
      features: ["Internal Audit", "Statutory Audit", "Tax Audit", "Compliance Review"],
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto">
            Comprehensive Tax & Business Solutions
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From GST registration to business incorporation, we provide end-to-end 
            CA services tailored to your needs with expert guidance at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-6 h-6 ${service.color}`} />
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ✅ Corrected Link usage with slugified title */}
                  <Link to={`/services#${slugify(service.title)}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-professional rounded-2xl p-8 md:p-12 text-white">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Streamline Your Tax Compliance?
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Get personalized consultation from our expert CAs and choose the perfect 
              service package for your business needs.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
