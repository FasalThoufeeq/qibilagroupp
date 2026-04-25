import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="bg-[#0B1F3A] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000" 
            alt="Wedding Setup Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            About QIBILA GROUP
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl font-light"
          >
            We Create Memorable Moments. Transforming your dreams into beautifully orchestrated realities across Kerala, Tamil Nadu, and the UAE.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">Who We Are</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  QIBILA GROUP is your premier partner for all-inclusive catering and event management. With years of expertise in the hospitality and event industry, we specialize in curating seamless experiences that leave a lasting impression.
                </p>
                <p className="mb-6">
                  From grand weddings and corporate galas to intimate gatherings and customized travel itineraries, we offer a comprehensive suite of services under one roof. Our dedicated team of professionals ensures that every detail, from the floral arrangements to the final farewell, is executed flawlessly.
                </p>
                <p>
                  Operating primarily across <strong>Kerala</strong> and <strong>Tamil Nadu</strong>, with an expanding footprint in the <strong>UAE</strong>, we bring local expertise and international standards to every event we manage.
                </p>
              </div>

              <div className="mt-12 bg-[#F5F5F5] p-6 rounded-lg border-l-4 border-[#C9A54C]">
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Our Core Services Summary</h3>
                <p className="text-gray-600">
                  Catering • Stage & Venue Decoration • Photography & Videography • Bridal Makeup • Logistics & Transportation • Complete Event Budgeting & Management • Travel, Tour & Pilgrimage Packages.
                </p>
              </div>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#F5F5F5] p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and sought-after event management and catering brand, renowned for transforming ordinary occasions into extraordinary, lifelong memories globally.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#0B1F3A] p-10 text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold text-[#C9A54C] mb-4">Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To deliver unparalleled service quality, innovative concepts, and exceptional culinary experiences. We strive to relieve our clients of all planning stress, allowing them to truly celebrate their special moments with joy and peace of mind.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
