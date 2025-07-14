import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookAppointment from "./BookAppointment";
import { Phone, Mail, MapPin, Calendar, MessageCircle, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
  { name: "GST Registration & Filing", href: "/services#gst-registration-filing" },
  { name: "Income Tax Returns", href: "/services#income-tax-returns" },
  { name: "TDS Filing & Compliance", href: "/services#tds-filing-compliance" },
  { name: "Business Registration", href: "/services#business-registration" },
];


  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">NextGen CA</h3>
                <p className="text-sm opacity-80">Tax Consultancy</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted partner for comprehensive tax consultancy services. 
              Expert guidance for GST, ITR, and business compliance.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/your-page"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 opacity-80" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 opacity-80" />
                <span>info@nextgenca.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 opacity-80 mt-0.5" />
                <span>
                  123 Business Center,<br />
                  Financial District,<br />
                  Mumbai - 400001
                </span>
              </div>
            </div>
            
            {/* Quick Action Buttons */}
            <div className="space-y-2 pt-2">
              <Link to="/book-appointment">
              <Button variant="hero" size="sm" className="w-full gap-2">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Button>
              </Link>
              <a href="https://wa.me/919876543210">
              <Button variant="outline" size="sm" className="w-full gap-2 mt-2 border-white/20 text-blue-500 hover:bg-white hover:text-green-600">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2024 NextGen CA Firm. All rights reserved.
            </p>
            <p className="text-sm opacity-80">
              Office Hours: Mon-Sat 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;