import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Instagram, Youtube, Globe, MapPin, Phone } from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-[#8B7355]" />
          </div>
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            Let's Work Together
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Have a project in mind? I'm always excited to collaborate on new creative ventures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gray-300 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:hello@jordanrivers.com" className="hover:text-[#8B7355] transition-colors duration-300">
                      hello@jordanrivers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gray-300 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a href="tel:+13105551234" className="hover:text-[#8B7355] transition-colors duration-300">
                      +1 (310) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gray-300 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#8B7355]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p>Los Angeles, CA</p>
                    <p className="text-sm text-gray-500">Available for remote work</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-[#8B7355] hover:text-[#8B7355] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-[#8B7355] hover:text-[#8B7355] transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-[#8B7355] hover:text-[#8B7355] transition-all duration-300"
                  aria-label="Website"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 transition-all duration-300 outline-none focus:border-[#8B7355] bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 transition-all duration-300 outline-none focus:border-[#8B7355] bg-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm text-gray-600">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 transition-all duration-300 outline-none focus:border-[#8B7355] bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-gray-600">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 transition-all duration-300 outline-none resize-none focus:border-[#8B7355] bg-white"
                />
              </div>
              
              <button
                type="submit"
                className="group relative px-12 py-4 border border-black text-black overflow-hidden transition-all duration-500 hover:text-white"
              >
                <span className="relative z-10 uppercase tracking-widest text-sm">Send Message</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
