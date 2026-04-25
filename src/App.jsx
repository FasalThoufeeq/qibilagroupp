import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AnimatePresence } from 'framer-motion';

// Lazy loading pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#C9A54C] border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
