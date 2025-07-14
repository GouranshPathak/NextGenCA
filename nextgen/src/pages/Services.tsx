import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import GetStartedForm  from "@/components/GetStartedForm";
import BookAppointment from "@/components/BookAppointment";
import {
  FileText,
  Calculator,
  Building,
  PiggyBank,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Download,
  Clock,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      icon: FileText,
      title: "GST Registration & Filing",
      shortDesc: "Complete GST solutions for your business",
      checklistFile: "gst.pdf",
      fullDesc:
        "Comprehensive GST services including registration, monthly/quarterly filing, input tax credit optimization, and compliance management. We ensure your business stays compliant with all GST regulations.",
      features: [
        "GST Registration for new businesses",
        "Monthly & Quarterly GST returns",
        "Input Tax Credit optimization",
        "GST compliance audit",
        "Annual GST return filing",
        "GST refund processing",
      ],
      pricing: "Starting from ₹2,999/month",
      timeline: "2-3 business days",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      documents: ["PAN Card", "Aadhaar Card", "Bank Statement", "Address Proof", "Business Registration"],
    },
    {
      icon: Calculator,
      title: "Income Tax Returns (ITR)",
      shortDesc: "Expert ITR filing with maximum tax savings",
      checklistFile: "itr.pdf",
      fullDesc:
        "Professional ITR filing services for individuals, businesses, and companies. Our tax experts ensure maximum deductions and savings while maintaining full compliance with income tax regulations.",
      features: [
        "Individual ITR filing (Salary, Business)",
        "Company ITR filing",
        "Tax planning and optimization",
        "Advance tax calculation",
        "TDS refund processing",
        "Tax notice handling",
      ],
      pricing: "Starting from ₹999",
      timeline: "1-2 business days",
      color: "text-green-600",
      bgColor: "bg-green-50",
      documents: ["Form 16/16A", "Bank Statements", "Investment Proofs", "Property Documents", "Other Income Proofs"],
    },
    {
      icon: Shield,
      title: "TDS Filing & Compliance",
      shortDesc: "Accurate TDS management and filing",
      checklistFile: "tds.pdf",
      fullDesc:
        "Complete TDS compliance services including calculation, quarterly filing, certificate generation, and reconciliation. We ensure accurate TDS management for all your business transactions.",
      features: [
        "TDS calculation and deduction",
        "Quarterly TDS return filing",
        "TDS certificate generation",
        "TDS reconciliation",
        "Lower deduction certificates",
        "TDS refund assistance",
      ],
      pricing: "Starting from ₹1,999/quarter",
      timeline: "1-2 business days",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      documents: ["Payment Details", "PAN of Deductees", "Transaction Records", "Previous TDS Returns", "Bank Statements"],
    },
    {
      icon: Building,
      title: "Business Registration",
      shortDesc: "Complete business setup and incorporation",
      checklistFile: "business.pdf",
      fullDesc:
        "End-to-end business registration services including company incorporation, partnership formation, LLP registration, and all necessary licensing support for your new venture.",
      features: [
        "Private Limited Company registration",
        "LLP registration",
        "Partnership firm registration",
        "Sole proprietorship setup",
        "Business license assistance",
        "Trademark registration",
      ],
      pricing: "Starting from ₹8,999",
      timeline: "7-15 business days",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      documents: ["Identity Proof", "Address Proof", "Passport Photos", "MOA & AOA", "NOC from Property Owner"],
    },
    {
      icon: PiggyBank,
      title: "Financial Consulting",
      shortDesc: "Strategic financial planning and advice",
      checklistFile: "consulting.pdf",
      fullDesc:
        "Professional financial consulting services including business planning, investment advice, financial analysis, and strategic guidance to help your business grow and prosper.",
      features: [
        "Business financial planning",
        "Investment advisory",
        "Cash flow management",
        "Financial analysis & reporting",
        "Risk assessment",
        "Growth strategy consulting",
      ],
      pricing: "Starting from ₹5,999",
      timeline: "Ongoing support",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      documents: ["Financial Statements", "Bank Statements", "Business Plan", "Tax Returns", "Investment Details"],
    },
    {
      icon: Users,
      title: "Audit & Assurance",
      shortDesc: "Comprehensive audit and compliance services",
      checklistFile: "audit.pdf",
      fullDesc:
        "Professional audit services ensuring compliance, transparency, and financial integrity. We provide internal audits, statutory audits, tax audits, and compliance reviews.",
      features: [
        "Statutory audit for companies",
        "Internal audit services",
        "Tax audit under Income Tax",
        "GST audit and verification",
        "Compliance audit",
        "Due diligence services",
      ],
      pricing: "Starting from ₹15,999",
      timeline: "2-4 weeks",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      documents: ["Books of Accounts", "Financial Statements", "Tax Returns", "Bank Statements", "Legal Documents"],
    },
  ];

  const slugify = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-professional-blue-light to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Comprehensive <span className="text-primary">CA Services</span> for Your Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From GST registration to business incorporation, we provide end-to-end tax consultancy and business advisory services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/book-appointment">
                  <Button size="lg" variant="professional" className="gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Free Consultation
                  </Button>
                </Link>
              <a href="tel:+919876543210">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={service.title} id={slugify(service.title)} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="space-y-4">
                      <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className={`w-8 h-8 ${service.color}`} />
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                        <p className="text-lg text-muted-foreground">{service.shortDesc}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{service.fullDesc}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Pricing</p>
                        <p className="text-lg font-semibold text-primary">{service.pricing}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Timeline</p>
                        <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {service.timeline}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {/* Get Started Button with Dialog */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="professional"
                            className="gap-2"
                            onClick={() => setSelectedService(service.title)}
                          >
                            <Calendar className="w-4 h-4" />
                            Get Started
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          {selectedService && <GetStartedForm serviceName={selectedService} />}
                        </DialogContent>
                      </Dialog>

                      {service.checklistFile ? (
                        <a
                          href={`/checklists/${service.checklistFile}`}
                          download
                          className="inline-flex items-center justify-center gap-2 border rounded-md px-4 py-2 text-sm font-medium bg-white text-primary border-border hover:bg-accent transition"
                        >
                          <Download className="w-4 h-4" />
                          Download Checklist
                        </a>
                      ) : (
                        <Button variant="outline" className="gap-2" disabled>
                          <Download className="w-4 h-4" />
                          Checklist Unavailable
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className={`${!isEven ? "lg:order-1" : ""}`}>
                    <Card className="shadow-elegant border-0">
                      <CardHeader>
                        <CardTitle className="text-xl">What's Included</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="space-y-3 pt-4 border-t border-border">
                          <h4 className="font-semibold text-foreground">Required Documents:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.documents.map((doc) => (
                              <Badge key={doc} variant="secondary" className="text-xs">
                                {doc}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-gradient-professional text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Get personalized consultation from our expert CAs and choose the perfect
              service package for your business needs. No hidden charges, transparent pricing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
