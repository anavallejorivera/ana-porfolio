import { useLocation } from 'react-router';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // Si estamos en home, scroll directo
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegar a home con hash
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  // Handle hash-based navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img 
              src="/logo-ana.webp" 
              alt="Ana Vallejo" 
              className="w-16 h-16 "
            />
            {/* <span className="text-sm font-normal tracking-tight hover:text-[#c0576f] dark:hover:text-[#febd84] transition-colors">Ana Vallejo Rivera</span> */}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('projects')}
              className="font-normal whitespace-nowrap hover:text-[#c0576f] dark:hover:text-[#febd84] transition-colors"
            >
              {t('nav.projects')}
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('skills')}
              className="font-normal whitespace-nowrap hover:text-[#c0576f] dark:hover:text-[#febd84] transition-colors"
            >
              {t('nav.skills')}
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('about')}
              className="font-normal whitespace-nowrap hover:text-[#c0576f] dark:hover:text-[#febd84] transition-colors"
            >
              {t('nav.about')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-[#c0576f] dark:bg-[#febd84] text-white dark:text-[#470d3b] rounded-lg hover:bg-[#7e2f56] dark:hover:bg-[#c0576f] transition-colors"
            >
              {t('nav.contact')}
            </motion.button>

            <LanguageSwitcher />

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('projects')} className="text-left py-2 font-normal whitespace-nowrap hover:text-[#c0576f] dark:hover:text-[#e48679] transition-colors dark:text-gray-300">
                  {t('nav.projects')}
                </button>
                <button onClick={() => scrollToSection('skills')} className="text-left py-2 font-normal whitespace-nowrap hover:text-[#c0576f] dark:hover:text-[#e48679] transition-colors dark:text-gray-300">
                  {t('nav.skills')}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 font-normal whitespace-nowrap hover:text-[#c0576f] dark:hover:text-[#e48679] transition-colors dark:text-gray-300">
                  {t('nav.about')}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-1/2 mx-auto px-4 py-1.5 text-sm bg-[#c0576f] dark:bg-[#e48679] text-white dark:text-[#470d3b] rounded-lg hover:bg-[#7e2f56] dark:hover:bg-[#c0576f] transition-colors text-center"
                >
                  {t('nav.contact')}
                </button>
                <LanguageSwitcher />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}