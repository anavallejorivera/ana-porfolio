export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  overview: string;
  problem: string;
  problemImages?: string[];
  goals: string[];
  designProcess: string;
  development: string;
  result: string;
  screenshots: string[];
  screenshotsWithVideo?: { type: 'image' | 'video'; src: string }[];
  galleryWithVideo?: { video: string; image: string }[];
}

export const projects: Project[] = [
  {
    id: "perfumeria-aro",
    title: "Tienda online de Perfumería Aro+",
    description: "Una tienda de comercio electrónico de lujo para una perfumería premium con catálogo de 500+ fragancias, recomendaciones personalizadas y envíos rápidos a toda España.",
    tags: ["WordPress", "WooCommerce", "E-commerce", "Elementor", "Optimización Móvil", "SEO",],
    image: "/images/perfumeria-aro+/perfumeria-aro+.webp",
    overview: "Un sitio web de comercio electrónico premium para Perfumería Aro+, una tienda de fragancias de alta calidad con más de 16 años de experiencia. El sitio presenta un catálogo completo de 500+ fragancias únicas, categorías por género (hombre/mujer) y una experiencia de compra elegante y sofisticada. El proyecto combina un diseño visual lujoso con funcionalidad robusta de e-commerce que ha generado 10,000+ clientes satisfechos.",
    problem: "Perfumería Aro+ necesitaba un sitio web elegante que: 1) Presentara su amplio catálogo de fragancias premium de forma visual impactante, 2) Permitiera a clientes explorar fragancias por categoría y preferencias, 3) Proporcionara información detallada de productos con descripciones convincentes, 4) Facilitara compras en línea con envíos rápidos (24-72h), 5) Proyectara profesionalismo y confianza en una industria competitiva.",
    goals: [
      "Diseñar una interfaz visualmente lujosa y sofisticada que refleje la calidad premium de las fragancias",
      "Implementar un catálogo de productos robusto capaz de gestionar 500+ fragancias",
      "Crear un navegación intuitiva con filtros por género, tipo y características",
      "Optimizar para móvil ya que la mayoría de clientes compran desde dispositivos móviles",
      "Integrar sistema de envíos y logística para garantizar entregas de 24-72h",
      "Implementar un sistema de pago seguro con múltiples opciones",
      "Fomentar la confianza con testimonios, garantías y políticas claras de devolución"
    ],
    designProcess: "El diseño se enfocó en transmitir lujo y sofisticación. Creé una jerarquía visual elegante que destaca la fotografía de productos (fragancias y botellas). Usé una paleta de colores neutral y refinada con acentos dorados para transmitir calidad premium. Cada producto tiene una presentación meticulosa con imágenes de alta resolución y descripciones evocativas. Implementé secciones de testimonios prominentes (con 1,500+ valoraciones) para construir credibilidad. El diseño mobile-first garantiza que es hermoso en dispositivos pequeños.",
    development: "Construido en WordPress con WooCommerce como motor principal de comercio electrónico. Implementé un sistema de catálogo robusto capaz de gestionar 500+ productos con atributos complejos (género, tipo, notas aromáticas). Creé filtros AJAX avanzados para fácil navegación. Integré fotografía de productos de alta calidad con galerías zoomables. Sistemas de pago seguros con procesamiento de múltiples opciones. Integración con proveedores de envío para cálculos automáticos. Whatsapp Business para servicio al cliente. Implementé descuentos automáticos (20% en primer pedido) y promociones. Optimicé velocidad y caché para tiempos de carga rápidos.",
    result: "La tienda se lanzó exitosamente y ha generado más de 10,000 clientes satisfechos con más de 1,500 valoraciones positivas. El catálogo de 500+ fragancias está completamente optimizado y es fácil de navegar. Las ventas en línea crecieron significativamente con el nuevo sitio. Los clientes reportan excelente experiencia de compra, confían en las entregas rápidas (24-72h) y valoran la política de devolución en 30 días. El sitio ha posicionado Perfumería Aro+ como destino premium de fragancias en línea con envío a toda España.",
    screenshots: [
      "/images/perfumeria-aro+/inicio-aro.webp",
      "/images/perfumeria-aro+/productos-aro.webp",
      "/images/perfumeria-aro+/carrito-moderno.webp",
      "/images/perfumeria-aro+/pago-aro.webp"
    ]
  },
  {
    id: "merceria",
    title: "Rebranding y Sitio Web de Mercería",
    description: "Un sitio web moderno para una tienda física de mercería con catálogo de productos para costura, manualidades y diseño, con sistema de filtrado e información de ubicación.",
    tags: ["Html","CSS","JavaScript", "Diseño UI", "Desarrollo Personalizado", "Diseño Responsivo"],
    image: "/images/merceria/hero-merceria.webp",
    overview: "Un portal web profesional y atractivo para una tienda física de mercería especializada en artículos para costura, manualidades, bordado y diseño textil. El sitio presenta un catálogo digital completo de productos organizados por categorías, sistema de búsqueda avanzado, galerías de fotos detalladas e información sobre ubicación y horarios. El proyecto combinó rebranding visual completo con funcionalidad web que conecta a los clientes en línea con la tienda física de manera efectiva.",
    problem: "La mercería necesitaba modernizar su presencia digital que: 1) Mostrara su amplio catálogo de productos de forma visual y organizada, 2) Permitiera a clientes buscar productos por tipo y capacidad de filtrado, 3) Proporcionara información clara de ubicación y horarios, 4) Proyectar una imagen moderna y profesional, 5) Ser completamente responsivo para clientes móviles que busquen información antes de visitar.",
    problemImages: [
      "/images/merceria/quienes-somos-old.webp",
      "/images/merceria/old-inicio.webp"
    ],
    goals: [
      "Crear un nuevo diseño visual que refleje modernidad y profesionalismo",
      "Implementar un catálogo digital bien organizado por categorías",
      "Diseñar un sistema de filtrado intuitivo para facilitar búsqueda de productos",
      "Crear una experiencia de usuario clara y fácil de navegar",
      "Mostrar información clara de ubicación, horarios y contacto de la tienda física",
      "Proporcionar múltiples formas de contacto directo",
      "Asegurar diseño completamente responsivo para móviles"
    ],
    designProcess: "El diseño comenzó con análisis de competidores y benchmarking de tiendas de mercería modernas. Creé wireframes detallados enfocados en facilidad de exploración de productos. Diseñé una interfaz limpia con categorías visible e información clara. Usé fotografía de productos de alta calidad para inspirar a los usuarios. La paleta de colores es moderna y profesional reflejando la naturaleza creativa de los productos. Implementé secciones con información de la tienda, ubicación e información de horarios de atención.",
    development: "Construido con HTML5, CSS3 y JavaScript vanilla para máxima compatibilidad y rendimiento. Implementé un sitio web estático y responsivo que muestra el catálogo de productos de la tienda física. Diseño de galería de productos con imágenes de alta calidad. Integración de Google Maps para mostrar ubicación exacta de la tienda. Formularios de contacto con validación para llevar inquietudes. Secciones informativas con horarios de atención y ubicación. Integración con redes sociales. Optimización de velocidad y SEO para mejor visibilidad en buscadores.",
    result: "El sitio se lanzó exitosamente presentando el catálogo digital completo de la mercería. La nueva identidad visual modernizó la marca significativamente. Los usuarios reportan facilidad para encontrar productos gracias al sistema de filtrado, incluso antes de visitar la tienda. El sitio es completamente responsive y funciona perfectamente en móviles. Las consultas de contacto aumentaron al poder los clientes preguntar sobre productos específicos. El mapa de ubicación ha mejorado la capacidad de los clientes para encontrar la tienda física. El proyecto demuestra habilidad en desarrollo frontend con JavaScript vanilla, diseño responsivo e integración con servicios de ubicación.",
    screenshots: [
      "/images/merceria/inicio-1.webp",
      "/images/merceria/inicio.webp",
      "/images/merceria/destacados-merceria.webp",
      "/images/merceria/contacto.webp"
    ]
  },
  {
    id: "los-belgas",
    title: "Los Belgas Atelier - Sitio Web Corporativo",
    description: "Un sitio web corporativo para taller de restauración de muebles con galería de proyectos, catálogo de servicios y sistema de talleres interactivos.",
    tags: ["WordPress", "Gutenberg", "Galería de Proyectos", "Optimización de Imágenes", "SEO", "Diseño Responsivo"],
    image: "/images/los-belgas/los-belgas.webp",
    overview: "Un sitio web profesional y atractivo para Los Belgas Atelier, un taller de restauración de muebles ubicado en Zaragoza. El sitio presenta un catálogo completo de servicios, galería extensiva de proyectos restaurados, información sobre talleres disponibles y formulario de contacto para consultas. El diseño enfatiza el artesanía, sostenibilidad y la transformación de muebles antiguos en piezas únicas.",
    problem: "Los Belgas Atelier necesitaba una presencia digital profesional que: 1) Mostrara su portafolio de trabajos de restauración de forma visual impactante, 2) Permitiera a clientes interesados conocer sobre sus servicios (restauración, personalización y reparación), 3) Promocionara sus talleres interactivos para atraer nuevos clientes, 4) Facilitara la comunicación directa entre clientes potenciales y el taller.",
    goals: [
      "Crear un diseño que refleje la artesanía y profesionalismo del taller",
      "Implementar una galería visual atractiva de proyectos de restauración",
      "Presentar claramente los tres servicios principales (restauración, personalización, reparación)",
      "Destacar la filosofía sostenible y de calidad del negocio",
      "Facilitar información y registro para talleres",
      "Proporcionar múltiples canales de contacto (formulario, teléfono, ubicación)",
      "Diseño completamente responsivo para mejorar alcance"
    ],
    designProcess: "El diseño se enfocó en destacar la identidad artesanal del taller. Creé una jerarquía visual clara con la galería de proyectos como elemento central. Usé fotografía de alta calidad de muebles restaurados para transmitir calidad y transformación. Implementé secciones claras para servicios, filosofía (Inspirador, Artesanal, Sostenible, Económico) y llamadas a acción para talleres y contacto. El color y la tipografía reflejan modernidad pero respetan la esencia artesanal.",
    development: "Construido en WordPress con temas personalizados y plugins de galería. Usé WooCommerce para estructura de catálogo de servicios. Implementé galerías responsivas que muestran los proyectos de restauración. Creé formularios de contacto personalizados y campos para inscripción en talleres. Integré mapas de Google para ubicación del taller. Optimicé velocidad y cargue de imágenes. Agregué integración con redes sociales (Instagram y Facebook) para mostrar trabajo en vivo. Implementé diseño mobile-first para accesibilidad.",
    result: "El sitio se lanzó exitosamente presentando más de 50 proyectos de restauración. La galería visual ha aumentado la confianza potencial de clientes. Las consultas de talleres aumentaron significativamente. El sitio es completamente responsive y carga rápido incluso con galería extensa de imágenes. Los clientes reportan facilidad para contactar y conocer los servicios. El sitio sirve como portfolio que valida la calidad y profesionalismo de Los Belgas Atelier.",
    screenshots: [
      "/images/los-belgas/inicio-los-belgas.webp",
    ],
    screenshotsWithVideo: [
      { type: 'video', src: '/images/los-belgas/los-belgas.mp4' },
    ]
  },
  {
    id: "portfolio-profesional",
    title: "Portfolio Personal",
    description: "Un portfolio personal moderno y responsivo creado con React, TypeScript y Tailwind CSS que demuestra habilidades de diseño y desarrollo web con internacionalización.",
    tags: ["React", "TypeScript", "Tailwind CSS", "i18next", "Framer Motion", "EmailJS"],
    image: "/images/portfolio/portfolio.webp",
    overview: "Un portfolio web profesional diseñado para presentar proyectos, habilidades y experiencia como desarrolladora web y diseñadora. El sitio está construido con tecnologías modernas y demuestra conceptos clave como internacionalización, diseño responsivo, animaciones suaves y gestión de formularios con EmailJS. Este proyecto es tanto un portafolio para mostrar trabajo como una demostración de habilidades técnicas en fronted development.",
    problem: "Como estudiante y desarrolladora en crecimiento, necesitaba crear una plataforma profesional que: 1) Mostrara mi trabajo y habilidades de forma impactante, 2) Funcionara en múltiples idiomas para alcanzar a más audiencia, 3) Demostrara dominio de tecnologías modernas como React y Tailwind CSS, 4) Permitiera a posibles clientes contactarme directamente.",
    problemImages: [
      "/images/portfolio/old-portfolio.webp",
      "/images/portfolio/old-portfolio1.webp"
    ],
    goals: [
      "Crear un diseño visualmente atractivo y profesional que transmita confianza",
      "Implementar internacionalización completa (español e inglés) con detección automática de idioma",
      "Demostrar habilidades en React, TypeScript y Tailwind CSS en un proyecto real",
      "Implementar animaciones suaves con Framer Motion para mejor experiencia",
      "Integrar EmailJS para recibir mensajes de contacto directamente",
      "Asegurar responsive design en móvil, tablet y desktop",
      "Organizar y presentar proyectos con case studies detallados"
    ],
    designProcess: "Comencé con investigación sobre porfolios profesionales modernos. Diseñé en Figma un sistema completo de componentes reutilizables con paleta de colores sofisticada (#c0576f, #470d3b, #febd84). Creé wireframes detallados enfocándome en jerarquía visual, navegación intuitiva y stories claras para cada proyecto. Implementé animaciones estratégicas para mantener el compromiso sin ser excesivo. El diseño prioriza la legibilidad y la accesibilidad.",
    development: "Construido completamente con React + TypeScript para type safety. Usé Tailwind CSS para estilos utility y garantizar responsive design. Integré i18next con react-i18next para traducción completa (100+ claves) con detección automática de navegador. Implementé Framer Motion para animaciones de componentes. Usé React Router para navegación SPA. Agregué Context API para manejo de tema (dark/light mode). Integré EmailJS para funcionamiento del formulario de contacto con validación y manejo de errores.",
    result: "El portfolio se lanzó exitosamente como un sitio completamente funcional, accesible y profesional. Es responsivo en todos los tamaños de pantalla. Soporta español e inglés con switching de idioma instantáneo. El formaulario de contacto envía emails reales a través de EmailJS. Las animaciones mejoran la experiencia sin ralentizar el sitio. El código está bien estructurado, documentado y listo para deployment en Vercel. Este proyecto demuestra competencia en desarrollo web fullstack frontend.",
    screenshots: [
      "/images/portfolio/dark-portfolio.webp",
      "/images/portfolio/skills-portfolio.webp"
    ]
  },
  {
    id: "appExamenes",
    title: "App Exámenes - Plataforma de Preparación de Exámenes",
    description: "Una aplicación interactiva de pruebas para estudiantes de ciclos formativos con preguntas de opción múltiple, seguimiento de progreso y 15 unidades de programación.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Librerías Externas", "Diseño Responsivo"],
    image: "/images/examenes/examenes.webp",
    overview: "Una plataforma web moderna e interactiva diseñada para ayudar a estudiantes de Desarrollo de Aplicaciones a prepararse para sus exámenes. La aplicación permite a los usuarios seleccionar entre diferentes asignaturas (Inglés, Ampliación y Planificación de Empresas, y Programación) y realizar tests con seguimiento automático del progreso. Este fue mi primer proyecto usando React y Tailwind CSS, enfocado en practicar la importación y uso de librerías externas.",
    problem: "Como estudiante de ciclo superior, necesitaba una herramienta práctica para prepararme para mis exámenes de manera interactiva. Un simple documento de texto no era suficiente - necesitaba una aplicación que pudiera rastrear mi progreso, mostrar mis errores y mantenerme motivado. Además, quería crear un proyecto real para aplicar mis conocimientos de React y Tailwind CSS.",
    goals: [
      "Crear una interfaz intuitiva para seleccionar y realizar tests",
      "Implementar un sistema de seguimiento de progreso y resultados",
      "Ofrecer retroalimentación inmediata sobre respuestas correctas e incorrectas",
      "Soportar múltiples asignaturas con varias unidades temáticas",
      "Practicar la integración de librerías externas en React",
      "Aplicar Tailwind CSS para un diseño moderno, limpio y responsive"
    ],
    designProcess: "El diseño fue iterativo y centrado en la experiencia del estudiante. Creé un flujo claro: inicio > seleccionar asignatura > seleccionar unidad > realizar test > ver resultados. Diseñé tarjetas expandibles para cada asignatura con botones claros de acceso. La interfaz es limpia y motivadora, con indicadores visuales de progreso. Utilicé colores sutiles que no causen fatiga visual durante el estudio. Las transiciones suaves hacen la navegación agradable.",
    development: "Construido completamente con React usando componentes reutilizables y hooks personalizados. Tailwind CSS proporcionó los estilos utilitarios y aseguró responsive design en todos los dispositivos. Implementé React Router para navegación entre secciones. Usé useState y useEffect para manejar el estado de respuestas y cálculo de resultados. Las preguntas se estructuran en JSON para escalabilidad. Agregué localStorage para persistencia de progreso del usuario entre sesiones.",
    result: "La aplicación se lanzó exitosamente con 3 asignaturas principales y 15 unidades completas en Programación. Es una herramienta funcional que funciona perfecto en móvil, tablet y desktop. El proyecto demostró conceptos clave: componentización de React, manejo de estado, responsive design con Tailwind, y buenas prácticas de UX. Continúo mejorando la aplicación con nuevas preguntas y features basadas en feedback. Es un logro importante como mi primer proyecto serio con React.",
    screenshots: [
      "/images/examenes/unidades.webp",
      "/images/examenes/resultados.webp",
    ],
    screenshotsWithVideo: [
      { type: 'video', src: '/images/examenes/app-examenes.mp4' },
    ]
  }
];
