import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full hover:-translate-y-2"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B1F3A]/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#C9A54C] transition-colors">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
          {service.description}
        </p>
        
        <Link 
          to={`/service/${service.id}`}
          className="inline-flex items-center justify-center text-[#0B1F3A] font-semibold hover:text-[#C9A54C] transition-colors group/link mt-auto w-full"
        >
          <span className="mr-2 uppercase tracking-wider text-xs">View Details</span>
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
