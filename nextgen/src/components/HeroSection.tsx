import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          source: "hero-section", // optional source tracking
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSuccessMessage("Consultation booked successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
      });
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-professional-blue-light to-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional business environment"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in self-center text-center lg:text-left">
            {/* ... (unchanged content) ... */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border mx-auto lg:mx-0">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">
                  Trusted by 500+ Businesses
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground block">Your Trusted</span>
                <span className="bg-gradient-professional bg-clip-text text-foreground block">
                  Tax Partner
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white leading-relaxed max-w-lg mx-auto lg:mx-0">
                Expert CA services for GST registration, ITR filing, business compliance, 
                and financial consulting. Streamline your taxes with NextGen CA Firm.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-popover" />
                <div>
                  <p className="text-sm font-semibold text-white">15+ Years</p>
                  <p className="text-xs text-white">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-popover" />
                <div>
                  <p className="text-sm font-semibold text-white">500+</p>
                  <p className="text-xs text-white">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-white" />
                <div>
                  <p className="text-sm font-semibold text-white">100%</p>
                  <p className="text-xs text-white">Compliant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:ml-auto animate-slide-in self-center w-full max-w-md mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-elegant border">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    Get Expert Advice
                  </h3>
                  <p className="text-muted-foreground">
                    Schedule a free consultation with our CA experts
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Service</option>
                    <option value="gst">GST Registration & Filing</option>
                    <option value="itr">Income Tax Returns</option>
                    <option value="tds">TDS Filing</option>
                    <option value="business">Business Registration</option>
                    <option value="consulting">Financial Consulting</option>
                  </select>

                  <Button type="submit" variant="professional" className="w-full gap-2" disabled={loading}>
                    <Calendar className="w-4 h-4" />
                    {loading ? "Booking..." : "Book Free Consultation"}
                  </Button>
                </form>

                {successMessage && <p className="text-green-600 text-sm text-center">{successMessage}</p>}
                {errorMessage && <p className="text-red-600 text-sm text-center">{errorMessage}</p>}

                <p className="text-xs text-muted-foreground text-center">
                  No spam. We respect your privacy and will only contact you regarding your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
