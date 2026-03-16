import { Search, Layout, Palette, Code2, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function WorkProcess() {
  const { t } = useTranslation();
  
  const processSteps = [
    {
      icon: Search,
      titleKey: 'workProcess.research',
      descriptionKey: 'workProcess.researchDesc'
    },
    {
      icon: Layout,
      titleKey: 'workProcess.wireframes',
      descriptionKey: 'workProcess.wireframesDesc'
    },
    {
      icon: Palette,
      titleKey: 'workProcess.design',
      descriptionKey: 'workProcess.designDesc'
    },
    {
      icon: Code2,
      titleKey: 'workProcess.development',
      descriptionKey: 'workProcess.developmentDesc'
    },
    {
      icon: Rocket,
      titleKey: 'workProcess.launch',
      descriptionKey: 'workProcess.launchDesc'
    }
  ];
  return (
    <section className="py-32 px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-[#470d3b] dark:text-[#e48679]">
            {t('workProcess.section')}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t('workProcess.description')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200"
            style={{ top: '3rem' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 auto-rows-fr">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.titleKey}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className="hidden absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#c0576f] rounded-full border-4 border-white z-10"
                  />

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full bg-[#101828] dark:bg-[#101828] rounded-xl p-6 shadow-sm hover:shadow-xl hover:bg-[#1a2332] dark:hover:bg-[#1a2332] dark:hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-6 h-full">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-[#c0576f] text-white rounded-xl shrink-0"
                      >
                        <Icon size={24} />
                      </motion.div>

                      <div className="flex flex-col md:text-center">
                        <h3 className="text-xl mb-2 tracking-tight text-[#e48679]">
                          {t(step.titleKey)}
                        </h3>
                        <p className="text-sm text-[#e48679] leading-relaxed">
                          {t(step.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile connector */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                      className="md:hidden w-0.5 h-8 bg-gray-200 mx-auto my-4 origin-top"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
