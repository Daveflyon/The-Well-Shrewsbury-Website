
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
