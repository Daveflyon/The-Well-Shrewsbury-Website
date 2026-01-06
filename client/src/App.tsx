import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PlanYourVisit from './pages/PlanYourVisit';
import Sundays from './pages/Sundays';
import About from './pages/About';
import NextSteps from './pages/NextSteps';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

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
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
