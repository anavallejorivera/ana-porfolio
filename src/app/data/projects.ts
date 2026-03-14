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
    description: "Un sitio web de comercio electrónico moderno para una perfumería local con pedidos en línea y páginas de productos personalizadas.",
    tags: ["WordPress", "WooCommerce", "Diseño UI"],
    image: "/images/perfumeria-aro+/perfumeria-aro+.webp",
    overview: "Un sitio web completamente responsivo de WordPress para Panadería Artesanal, una panadería local que busca expandir su negocio en línea. El proyecto incluyó diseño UI personalizado, integración de WooCommerce y una experiencia de pedidos en línea sin problemas.",
    problem: "La panadería no tenía presencia en línea y estaba perdiendo clientes con competidores. Necesitaban un sitio web que mostrara sus productos de manera hermosa y permitiera a los clientes realizar pedidos en línea.",
    goals: [
      "Crear un sitio web visualmente atractivo que refleje la marca artesanal de la panadería",
      "Implementar un sistema de pedidos en línea fácil de usar",
      "Garantizar capacidad de respuesta móvil para clientes en movimiento",
      "Integrarse con sistemas de pago existentes"
    ],
    designProcess: "Comencé con investigación sobre sitios web de panaderies y tendencias modernas de comercio electrónico. Creé wireframes en Figma enfocándome en fotografía de productos y navegación fácil. La paleta de colores utiliza tonos cálidos e invitadores que complementan la fotografía de alimentos. Diseñé tarjetas de productos personalizadas con estados de cursor y funcionalidad de vista rápida.",
    development: "Construido en WordPress con tema personalizado. Integré WooCommerce para funcionalidad de comercio electrónico con plantillas de productos personalizadas. Añadí tipos de publicación personalizados para recetas y contenido del blog. Implementé diseño responsivo usando CSS Grid y Flexbox. Optimé imágenes para tiempos de carga rápidos.",
    result: "El sitio web se lanzó exitosamente con más de 200 productos. Los pedidos en línea aumentaron un 60% en el primer mes. El cliente reportó un mejor compromiso de clientes y retroalimentación positiva sobre la interfaz fácil de usar.",
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
    description: "Un sitio web de membresía para un estudio de fitness con reserva de clases, perfiles de entrenadores y portal de miembros.",
    tags: ["Html","CSS","JavaScript", "Diseño UI", "Desarrollo Personalizado", "Diseño Responsivo"],
    image: "/images/merceria/hero-merceria.webp",
    overview: "Una plataforma digital completa para FitLife Studio, que permite a los miembros reservar clases, ver horarios de entrenadores y acceder a contenido de entrenamiento exclusivo. El proyecto combinó diseño personalizado con funcionalidad potente.",
    problem: "El estudio de fitness estaba gestionando reservas manualmente por teléfono y correo electrónico, lo que llevá a doble reservas y frustración del cliente. Necesitaban un sistema automatizado que los miembros pudieran usar 24/7." ,
    problemImages: [
      "/images/merceria/quienes-somos-old.webp",
      "/images/merceria/old-inicio.webp"
    ],
    goals: [
      "Crear un sistema intuitivo de reserva de clases",
      "Crear perfiles de miembros con historial personal de entrenamientos",
      "Diseñar páginas de perfil de entrenadores",
      "Implementar un área de contenido exclusivo para miembros"
    ],
    designProcess: "Realicé entrevistas con miembros del gimnasio para entender sus necesidades. Creé flujos de usuario para el proceso de reserva. Diseñé una interfaz limpia y energética con tipografía audaz e imágenes motivacionales. Usé un esquema de color vibrante que refleja la marca activa del estudio.",
    development: "Desarrollado usando WordPress con plugins personalizados para funcionalidad de reserva. Creé tipos de publicación personalizados para clases, entrenadores y miembros. Implementé autenticación de usuario y control de acceso basado en roles. Construyé un calendario de reserva personalizado usando JavaScript. Integré con procesamiento de pagos para suscripciones de membresía.",
    result: "La plataforma simplificó significativamente las operaciones, reduciendo el trabajo administrativo en un 70%. La satisfacción de los miembros aumentó con acceso 24/7 a reservas. El estudio reportó un aumento del 40% en la asistencia a clases debido a reservas más fáciles.",
    screenshots: [
      "/images/merceria/inicio.webp",
      "/images/merceria/inicio-1.webp",
      "/images/merceria/destacados-merceria.webp",
      "/images/merceria/contacto.webp"
    ]
  },
  {
    id: "los-belgas",
    title: "Los Belgas Atelier - Sitio Web Corporativo",
    description: "Un sitio web corporativo para taller de restauración de muebles con galería de proyectos, catálogo de servicios y sistema de talleres interactivos.",
    tags: ["WordPress", "WooCommerce", "Galería de Proyectos"],
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
