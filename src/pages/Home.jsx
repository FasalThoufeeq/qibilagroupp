import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Shield, Users } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/services.json';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0B1F3A]/70 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Building" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Building Businesses.<br/>
            <span className="text-[#C9A54C]">Creating Impact.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light"
          >
            A premier corporate conglomerate driving innovation and excellence across technology, real estate, and strategic consulting.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a 
              href="#businesses" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#0B1F3A] bg-[#C9A54C] hover:bg-white transition-colors duration-300 rounded-sm uppercase tracking-widest shadow-lg hover:shadow-xl"
            >
              Explore Our Businesses
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        >
          <span className="text-white/70 text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-full h-1/2 bg-[#C9A54C]"
            />
          </div>
        </motion.div>
      </section>
      {/* About Preview Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.span variants={itemVariants} className="text-[#C9A54C] font-semibold uppercase tracking-widest text-sm mb-4 block">Welcome to Qibila Group</motion.span>
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6 leading-tight">
                Crafting Your <br/>Perfect Occasion.
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-8">
                As a proud division of QIBILA GROUP, Qibila Group specializes in premium catering and comprehensive event management. From majestic weddings and corporate galas to intimate gatherings, we handle every detail with precision and passion to ensure your special day is truly unforgettable.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link to="/about" className="inline-flex items-center text-[#0B1F3A] font-bold hover:text-[#C9A54C] transition-colors uppercase tracking-widest text-sm border-b-2 border-[#0B1F3A] hover:border-[#C9A54C] pb-1">
                  Read More About Us
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#C9A54C] transform translate-x-4 translate-y-4 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000" 
                alt="Elegant Event Setup" 
                className="w-full h-[500px] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C9A54C] font-semibold uppercase tracking-widest text-sm mb-4 block"
            >
              What We Do
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#0B1F3A]"
            >
              Our Premium Services
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">Why Choose Qibila Group</h2>
            <p className="text-gray-600 text-lg">We turn your dreams into reality with our unmatched expertise, dedication, and comprehensive solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Years of Experience", desc: "A proven track record of orchestrating flawless, high-profile events." },
              { icon: CheckCircle2, title: "Quality Service", desc: "Uncompromising standards in catering, decor, and hospitality." },
              { icon: Users, title: "All-in-one Solutions", desc: "From travel to stage setup, we handle every aspect of your event." },
              { icon: Shield, title: "Trusted Brand", desc: "A reputable division of QIBILA GROUP, ensuring peace of mind." }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F5F5] p-8 hover:bg-[#0B1F3A] group transition-colors duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  <feature.icon className="w-12 h-12 text-[#C9A54C]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] group-hover:text-white mb-3 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
