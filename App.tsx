
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import PlanYourVisit from './pages/PlanYourVisit.tsx';
import Sundays from './pages/Sundays.tsx';
import About from './pages/About.tsx';
import NextSteps from './pages/NextSteps.tsx';
import Contact from './pages/Contact.tsx';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NotFound = () => (
  <section className="py-32 md:py-48 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 font-heading tracking-tighter">Page not found.</h1>
      <p className="text-xl text-gray-500 mb-10 font-medium">Sorry, we couldn't find that page. It may have moved, or the address may be slightly off.</p>
      <Link to="/" className="inline-block px-10 py-5 bg-brand-500 text-white rounded-2xl font-black hover:bg-brand-600 transition-all duration-300">Back to Home</Link>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plan-your-visit" element={<PlanYourVisit />} />
            <Route path="/sundays" element={<Sundays />} />
            <Route path="/about" element={<About />} />
            <Route path="/next-steps" element={<NextSteps />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
