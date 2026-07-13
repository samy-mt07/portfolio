import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { BackToTop } from '@/components/layout/BackToTop';
import { PageTransition } from '@/components/layout/PageTransition';
import { Home } from '@/pages/Home';
import { Resume } from '@/pages/Resume';
import { NotFound } from '@/pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/resume"
          element={
            <PageTransition>
              <Resume />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
