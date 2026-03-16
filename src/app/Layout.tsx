import { Outlet, useLocation } from 'react-router';
import { Navigation } from './components/Navigation';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect } from 'react';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <ThemeProvider>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="absolute top-0 left-0 z-[9999] px-3 py-2 bg-[#c0576f] text-white rounded -translate-y-full focus:translate-y-0 transition-transform"
      >
        Saltar al contenido principal
      </a>

      <AnimatedBackground />
      <Navigation />
      <main id="main-content">
        <Outlet />
      </main>
    </ThemeProvider>
  );
}