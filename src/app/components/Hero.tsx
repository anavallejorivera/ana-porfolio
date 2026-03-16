import { ArrowRight, Download, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export function Hero() {
  const { t } = useTranslation();

  // useCallback para evitar re-renders innecesarios
  const scrollToProjects = useCallback(() => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const downloadCV = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/CV-Ana-vallejo-IT.pdf';
    link.download = 'CV-Ana-Vallejo.pdf';
    link.click(); 
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-40 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          {/* Hero Image Circular */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              <motion.img
                src="/images/me-cartoon.webp"
                alt="Ana Vallejo - Desarrolladora Web"
                className="w-full h-full rounded-full object-cover shadow-2xl"
                loading="lazy" // Lazy loading
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c0576f] to-transparent opacity-20 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 mb-4"
          >
            {t('hero.available')}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#470d3b] dark:text-white"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#f06d8c] via-[#e48679] to-[#6b2749] bg-clip-text text-transparent tracking-tight"
          >
            {t('hero.subtitle')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center gap-6 pt-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/anavallejorivera-developer"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-[#c0576f] dark:text-[#e48679] hover:bg-[#c0576f] hover:text-white dark:hover:bg-[#e48679] dark:hover:text-gray-900 transition-all"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/anavallejorivera"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-[#c0576f] dark:text-[#e48679] hover:bg-[#c0576f] hover:text-white dark:hover:bg-[#e48679] dark:hover:text-gray-900 transition-all"
            >
              <Github size={24} />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <motion.button
              onClick={scrollToProjects}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 40px -10px rgba(200, 111, 70, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c0576f] text-white rounded-lg hover:bg-[#7e2f56] transition-all"
            >
              Ver Proyectos
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button> */}

            <motion.button
              onClick={downloadCV}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-1/2 mx-auto px-8 py-4 bg-[#c0576f] dark:bg-[#e48679] text-white dark:text-[#470d3b] rounded-lg hover:bg-[#7e2f56] dark:hover:bg-[#c0576f] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              {t('hero.downloadCV')}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Download size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
