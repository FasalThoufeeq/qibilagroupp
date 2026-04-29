import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Building2 className="w-8 h-8 text-[#C9A54C]" />
              <span className="text-xl font-bold tracking-wider text-white">
                QIBILA GROUP
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We Create Memorable Moments. Premium catering and all-inclusive event management services in Kerala, Tamil Nadu, and UAE.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/919207178987" target="_blank" rel="noopener noreferrer" className="text-[#C9A54C] hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#C9A54C] font-semibold tracking-wider uppercase mb-6 text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#C9A54C] font-semibold tracking-wider uppercase mb-6 text-sm">Top Services</h3>
            <ul className="space-y-4">
              <li><Link to="/service/food-catering" className="text-gray-400 hover:text-white transition-colors text-sm">Food & Catering</Link></li>
              <li><Link to="/service/stage-decoration" className="text-gray-400 hover:text-white transition-colors text-sm">Stage Decoration</Link></li>
              <li><Link to="/service/visual-photography" className="text-gray-400 hover:text-white transition-colors text-sm">Visual & Photography</Link></li>
              <li><Link to="/service/luxury-cars" className="text-gray-400 hover:text-white transition-colors text-sm">Luxury Cars</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#C9A54C] font-semibold tracking-wider uppercase mb-6 text-sm">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C9A54C] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm mb-1">+91 9207178987</span>
                  <span className="text-gray-400 text-sm mb-1">+91 7907037045</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A54C] shrink-0" />
                <span className="text-gray-400 text-sm">rashidiqibila@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#C9A54C] shrink-0" />
                <span className="text-gray-400 text-sm">www.qibilagroup.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} QIBILA GROUP. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
