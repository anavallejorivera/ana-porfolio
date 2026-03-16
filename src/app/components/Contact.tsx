import { Mail, Linkedin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

// ✅ Inicializar EmailJS con variable de entorno
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// ✅ Validar formato de email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ✅ Validar formulario completo - retorna key de traducción
const validateForm = (data: { name: string; email: string; message: string }): string | null => {
  if (!data.name.trim()) return 'contact.validation.nameRequired';
  if (data.name.trim().length < 2) return 'contact.validation.nameMinLength';
  if (!data.email.trim()) return 'contact.validation.emailRequired';
  if (!validateEmail(data.email)) return 'contact.validation.emailInvalid';
  if (!data.message.trim()) return 'contact.validation.messageRequired';
  if (data.message.trim().length < 10) return 'contact.validation.messageMinLength';
  return null;
};

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0); // ✅ Rate limiting

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // ✅ Logs de debug mantenidos para facilitar troubleshooting en caso de futuros errores
    // Permite monitorear: datos del formulario, claves de configuración y flujo de envío
    console.log('📝 Formulario enviado - Datos:', formData);
    console.log('🔑 Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log('📧 Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('📋 Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

    // ✅ Rate limiting (evita spam)
    const now = Date.now();
    if (now - lastSubmitTime < 2000) {
      setError(t('contact.validation.rateLimitError'));
      return;
    }

    // ✅ Validación mejorada - ahora retorna keys de traducción
    const validationErrorKey = validateForm(formData);
    if (validationErrorKey) {
      console.warn('❌ Validación fallida:', validationErrorKey);
      setError(t(validationErrorKey));
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('⏳ Iniciando envío...');
      // ✅ Solo log en desarrollo
      if (process.env.NODE_ENV === 'development') {
        console.log('Enviando formulario de contacto...');
      }

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: import.meta.env.VITE_EMAIL_RECIPIENT // ✅ Variable de entorno
        }
      );

      console.log('✅ Respuesta de EmailJS:', response);

      if (response.status === 200) {
        console.log('🎉 Mensaje enviado exitosamente');
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setLastSubmitTime(now);

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        console.warn('⚠️ Respuesta inesperada:', response.status);
        setError(`Error: No se pudo enviar el mensaje (${response.status})`);
      }
    } catch (err: any) {
      console.error('🚨 Error de envío:', err);
      const errorMessage = err?.text || err?.message || 'Error al enviar el mensaje';
      setError(`Error: ${errorMessage}`);
      
      if (process.env.NODE_ENV === 'development') {
        console.error('Detalles del error:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // ✅ Limpiar error al escribir
    if (error) setError('');
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-[#470d3b] dark:text-[#e48679]">
            {t('contact.section')}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl tracking-tight mb-6"
            >
              {t('contact.contactInfo')}
            </motion.h3>
            <div className="space-y-6">
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ x: 4 }}
                href="mailto:alex.rivera@example.com"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="p-3 bg-gray-50 rounded-lg text-[#c0576f] group-hover:bg-[#e48679] dark:group-hover:bg-[#febd84] group-hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t('contact.email')}</div>
                  <div className="group-hover:text-[#c0576f] transition-colors dark:text-[#e48679] dark:group-hover:text-[#e48679]">
                    avallejorivera360@gmail.com
                  </div>
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 4 }}
                href="https://www.linkedin.com/in/anavallejorivera-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800  rounded-xl hover:shadow-md transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="p-3 bg-gray-50 rounded-lg text-[#c0576f] group-hover:bg-[#e48679] dark:group-hover:bg-[#febd84] group-hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t('contact.linkedin')}</div>
                  <div className="group-hover:text-[#c0576f] transition-colors dark:text-[#e48679] dark:group-hover:text-[#e48679]">
                    linkedin.com/in/anavallejorivera-developer
                  </div>
                </div>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl"
            >
              <h4 className="mb-4 dark:text-white">{t('contact.openOpportunities')}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {t('contact.openToWork')}
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl tracking-tight mb-6 dark:text-white">
              {t('contact.sendMessage')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6 ">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t('contact.nameLabel')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c0576f] dark:focus:ring-[#febd84] focus:border-transparent dark:text-white dark:placeholder-gray-500 transition-all"
                    placeholder={t('contact.namePlaceholder')}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t('contact.emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c0576f] dark:focus:ring-[#febd84] focus:border-transparent dark:text-white dark:placeholder-gray-500 transition-all"
                    placeholder={t('contact.emailPlaceholder')}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  {t('contact.messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c0576f] dark:focus:ring-[#febd84] focus:border-transparent dark:text-white dark:placeholder-gray-500 transition-all resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                />
              </motion.div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-white dark:bg-white text-[#c0576f] dark:text-[#c0576f] rounded-lg text-sm border border-[#c0576f] dark:border-[#c0576f]"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading || submitted}
                whileHover={{ scale: (loading || submitted) ? 1 : 1.02 }}
                whileTap={{ scale: (loading || submitted) ? 1 : 0.98 }}
                className="w-1/2 mx-auto px-8 py-4 bg-[#c0576f] dark:bg-[#e48679] text-white dark:text-[#470d3b] rounded-lg hover:bg-[#7e2f56] dark:hover:bg-[#c0576f] transition-colors disabled:bg-green-500 dark:disabled:bg-green-600 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitted ? (
                  <>{t('contact.successMessage')}</>
                ) : loading ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    {t('contact.sendButton')}
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
