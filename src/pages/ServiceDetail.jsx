import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, PlayCircle, CheckCircle2 } from 'lucide-react';
import servicesData from '../data/services.json';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-24">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">Service Not Found</h2>
        <button onClick={() => navigate('/')} className="text-[#C9A54C] hover:underline flex items-center">
          <ArrowLeft className="mr-2 w-4 h-4" /> Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0B1F3A]/70 mix-blend-multiply z-10" />
          <img 
            src={service.images[0]} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#C9A54C] font-semibold uppercase tracking-widest text-sm mb-4 block">Our Service</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{service.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/#services" className="inline-flex items-center text-gray-500 hover:text-[#0B1F3A] mb-12 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium uppercase tracking-wider text-sm">Back to Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.description} We are committed to providing the highest quality {service.title.toLowerCase()} tailored to your specific needs. Experience elegance, professionalism, and impeccable service with Qibila Group.
              </p>
              
              <div className="bg-[#F5F5F5] p-8 border-l-4 border-[#0B1F3A] mt-8">
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Book This Service</h3>
                <p className="text-gray-600 mb-6">Let us handle the details while you enjoy the moment. Contact us today for a custom quote.</p>
                <Link to="/contact" className="inline-block bg-[#0B1F3A] text-white px-6 py-3 uppercase tracking-widest text-sm font-medium hover:bg-[#C9A54C] transition-colors shadow-md hover:shadow-lg">
                  Get a Quote
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="relative rounded-lg overflow-hidden group cursor-pointer shadow-xl">
                <img 
                  src={service.images[1]} 
                  alt={`${service.title} gallery`} 
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
