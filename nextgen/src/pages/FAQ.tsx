import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import BookAppointment from "@/components/BookAppointment";
import Contact from "./Contact";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "General Services",
      questions: [
        {
          question: "What services does NextGen CA Firm provide?",
          answer: "We provide comprehensive tax and financial services including GST registration & filing, Income Tax Returns (ITR), TDS filing, business registration (LLP, Pvt Ltd), financial consulting, and business advisory services."
        },
        {
          question: "How can I book an appointment?",
          answer: "You can book an appointment through our website's booking section, call us directly, or send us a WhatsApp message. We offer flexible scheduling to accommodate your needs."
        },
        {
          question: "What are your operating hours?",
          answer: "We are open Monday to Saturday from 10:00 AM to 7:00 PM. Sunday appointments are available on request for urgent matters."
        }
      ]
    },
    {
      category: "GST Services",
      questions: [
        {
          question: "Who needs GST registration?",
          answer: "Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for special category states) must register for GST. Voluntary registration is also available for smaller businesses."
        },
        {
          question: "How long does GST registration take?",
          answer: "GST registration typically takes 3-7 working days after submission of complete documents. We ensure quick processing by maintaining accuracy in documentation."
        },
        {
          question: "What documents are required for GST registration?",
          answer: "Required documents include PAN card, Aadhaar card, business registration certificate, bank account details, photographs, and rental agreement/property documents of business premises."
        }
      ]
    },
    {
      category: "Income Tax",
      questions: [
        {
          question: "When is the deadline for filing Income Tax Returns?",
          answer: "The deadline for individuals is July 31st, and for businesses (requiring audit) is September 30th. However, dates may vary each year, and we recommend filing early."
        },
        {
          question: "Can I file ITR if I have no income?",
          answer: "Yes, you can file a nil return if you have no taxable income. This is beneficial for maintaining tax compliance and can be useful for visa applications or loan approvals."
        },
        {
          question: "What is the penalty for late filing of ITR?",
          answer: "Late filing penalty ranges from ₹1,000 to ₹10,000 depending on your income level and delay period. We help minimize penalties through proper planning."
        }
      ]
    },
    {
      category: "Business Registration",
      questions: [
        {
          question: "What's the difference between LLP and Private Limited Company?",
          answer: "LLP offers flexibility in management and lower compliance requirements, while Pvt Ltd provides better credibility for fundraising and has more structured governance. We can help you choose based on your business needs."
        },
        {
          question: "How long does company registration take?",
          answer: "Private Limited Company registration takes 10-15 days, while LLP registration takes 7-10 days, subject to document verification and government processing."
        },
        {
          question: "What is the minimum capital required for company registration?",
          answer: "There's no minimum capital requirement for Private Limited Company registration. You can start with a nominal amount and increase capital as your business grows."
        }
      ]
    },
    {
      category: "Fees & Payments",
      questions: [
        {
          question: "How do you charge for your services?",
          answer: "Our fees are transparent and competitive. We charge fixed fees for standard services like ITR filing and GST registration, while complex matters are charged hourly. All fees are discussed upfront."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment options for larger projects. We accept cash, cheque, bank transfer, and digital payments for your convenience."
        },
        {
          question: "Is there any hidden cost in your services?",
          answer: "No, we believe in complete transparency. All costs including government fees, our professional charges, and any third-party expenses are clearly mentioned in our quotation."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="bg-gradient-professional text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <HelpCircle className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and tax regulations
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={questionIndex} className="overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
                      >
                        <CardContent className="p-0">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-foreground pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                        </CardContent>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 animate-fade-in">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of experienced chartered accountants is here to help you with any specific questions about your tax and business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
            <button className="bg-gradient-professional text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
              Contact Us
            </button>
            </Link>
            <Link to="/book-appointment">
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              Book Consultation
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;