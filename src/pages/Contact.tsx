import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      requirements: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-10 page-hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-8"
          >
            Book a <span className="font-serif italic">call.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to take the next step? Let's schedule a call to discuss how we can help your business grow and succeed online.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Peter"
                  className="input-dark"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Parker"
                  className="input-dark"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="peter@parker.com"
                className="input-dark"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mobile Number</label>
              <Input
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="input-dark"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tell us about your requirements?</label>
              <Textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="What do you want your business to excel in?"
                className="input-dark min-h-[150px]"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Book a call
            </button>
          </motion.form>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <img 
            src="/osQ9s6AS8wfSeIRcAwf0xivot3Q.png" 
            alt="Contact visual" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
