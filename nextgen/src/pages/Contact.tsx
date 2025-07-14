import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BookAppointment from "@/components/BookAppointment";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Calendar,
  Globe,
  Linkedin,
  Facebook
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://next-gen-ca.vercel.app/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Appointment Confirmed!",
          description: "Thank you for contacting us. A confirmation email has been sent.",
        });

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Submission Failed",
          description: errorData.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  // ... rest of the component remains unchanged


  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: "Call Now",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@nextgenca.com", "support@nextgenca.com"],
      action: "Send Email",
      color: "text-green-600",
      bgColor: "bg-green-50",
      link: "mailto:info@nextgenca.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+91 98765 43210", "Quick support available"],
      action: "Chat Now",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      link: "https://wa.me/919876543210",
      target: "_blank"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Business Center", "Financial District, Mumbai - 400001"],
      action: "Get Directions",
      color: "text-red-600",
      bgColor: "bg-red-50",
      link: "https://www.google.com/maps?q=123+Business+Center,+Mumbai",
      target: "_blank"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const services = [
    "GST Registration & Filing",
    "Income Tax Returns (ITR)",
    "TDS Filing & Compliance",
    "Business Registration",
    "Financial Consulting",
    "Audit & Assurance",
    "Other Services"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-professional-blue-light to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Get In <span className="text-primary">Touch</span> With Our Experts
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Have questions about our services? Need expert tax advice? 
              We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              return (
                <Card key={info.title} className="text-center shadow-card border-0 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="space-y-4">
                    <div className={`w-16 h-16 ${info.bgColor} rounded-2xl flex items-center justify-center mx-auto`}>
                      <IconComponent className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-1">
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild >
                      <a
                        href={info.link} target={info.target || "_self"}
                        rel={info.target === "_blank" ? "noopener noreferrer" : undefined}
                      >
                        {info.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-muted/30">
        <div className="con tainer mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <Button type="submit" variant="professional" size="lg" className="w-full gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-6">
              {/* Office Hours */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {officeHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                   <Link to="/book-appointment">
                   <Button variant="outline" className="w-full gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                   </Button>
                  </Link>
                  <a href="https://wa.me/919876543210">
                    <Button variant="outline" className="w-full gap-2">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Support
                    </Button>
                  </a>
                  <a href="https://meet.google.com/"> 
                  <Button variant="outline" className="w-full gap-2">
                    <Globe className="w-4 h-4" />
                    Virtual Meeting
                  </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors cursor-pointer">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    </div>
                    <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors cursor-pointer">
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors cursor-pointer"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors cursor-pointer">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-gradient-professional text-white border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Emergency Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90 mb-3">
                    For urgent tax matters and deadline issues, call our emergency helpline:
                  </p>
                  <p className="text-lg font-semibold">+91 98765 43210</p>
                  <p className="text-xs opacity-80 mt-2">Available 24/7 for existing clients</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Mumbai's financial district for your convenience.
            </p>
          </div>
          
          <div className="bg-muted rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-12 h-12 text-primary mx-auto" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">NextGen CA Firm</h3>
                <p className="text-muted-foreground">123 Business Center, Financial District</p>
                <p className="text-muted-foreground">Mumbai - 400001, Maharashtra</p>
              </div>
              <a href="https://www.google.com/maps?q=123+Business+Center,+Mumbai">
              <Button variant="professional" className="gap-2">
                <MapPin className="w-4 h-4" />
                Get Directions
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;