import React, { useEffect } from 'react';
import { Router, Route, Switch, useLocation } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import PlanYourVisit from './pages/PlanYourVisit.tsx';
import Sundays from './pages/Sundays.tsx';
import About from './pages/About.tsx';
import NextSteps from './pages/NextSteps.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/NotFound.tsx';

// Scroll to top on route change
const ScrollToTop = () => {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router hook={useHashLocation}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/plan-your-visit" component={PlanYourVisit} />
            <Route path="/sundays" component={Sundays} />
            <Route path="/about" component={About} />
            <Route path="/next-steps" component={NextSteps} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
