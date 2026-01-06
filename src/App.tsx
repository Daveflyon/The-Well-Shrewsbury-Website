import React, { useEffect, Suspense, lazy } from 'react';
import { Router, Route, Switch, useLocation } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

// Lazy load pages to split code and improve initial load time
const Home = lazy(() => import('./pages/Home.tsx'));
const PlanYourVisit = lazy(() => import('./pages/PlanYourVisit.tsx'));
const Sundays = lazy(() => import('./pages/Sundays.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const NextSteps = lazy(() => import('./pages/NextSteps.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-12 w-12 rounded-full border-4 border-brand-200 border-t-brand-600 animate-spin mb-4"></div>
      <div className="text-brand-600 font-medium">Loading...</div>
    </div>
  </div>
);

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
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/plan-your-visit" component={PlanYourVisit} />
              <Route path="/sundays" component={Sundays} />
              <Route path="/about" component={About} />
              <Route path="/next-steps" component={NextSteps} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
