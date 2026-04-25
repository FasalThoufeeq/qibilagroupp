import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/fasaltq681@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: "New inquiry from QIBILA GROUP website",
            _template: "table"
        })
      });

      if (response.ok) {
        alert('Thank you for your message. We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Oops! Something went wrong, please try again later.');
      }
    } catch (error) {
      alert('Oops! Something went wrong, please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 bg-[#F5F5F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Ready to plan your next big event? Contact Qibila Group today to discuss your requirements and receive a customized quote.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col text-center items-center">
              <div className="w-14 h-14 bg-[#0B1F3A]/5 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#C9A54C]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Phone</h3>
              <p className="text-gray-600 mb-1">+91 9207178987</p>
              <p className="text-gray-600 mb-1">+91 7559974791</p>
              <p className="text-gray-600 mb-1">+971 565671177 (UAE)</p>
              <p className="text-gray-600">+971 556255437</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col text-center items-center">
              <div className="w-14 h-14 bg-[#0B1F3A]/5 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#C9A54C]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Email</h3>
              <p className="text-gray-600">rashidiqibila@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col text-center items-center">
              <div className="w-14 h-14 bg-[#0B1F3A]/5 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#C9A54C]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Website</h3>
              <p className="text-gray-600">www.qibilagroup.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col text-center items-center">
              <div className="w-14 h-14 bg-[#0B1F3A]/5 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#C9A54C]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Locations</h3>
              <p className="text-gray-600">Kerala, India</p>
              <p className="text-gray-600">Tamil Nadu, India</p>
              <p className="text-gray-600">United Arab Emirates</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white p-8 lg:p-12 rounded-lg shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-[#0B1F3A] mb-8">Send Us A Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C9A54C] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C9A54C] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Event Type / Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C9A54C] focus:border-transparent outline-none transition-all"
                  placeholder="e.g. Wedding Catering Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C9A54C] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your event details, date, location, and specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#0B1F3A] hover:bg-[#1a365d] transition-colors duration-300 rounded-sm uppercase tracking-widest w-full md:w-auto shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                <Send className="ml-2 -mr-1 w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
