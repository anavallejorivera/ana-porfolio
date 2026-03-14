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
    id: "los belgas atelier",
    title: "Página Corporativa de Los Belgas Atelier",
    description: "Una plataforma de comercio electrónico de moda con filtrado avanzado, funcionalidad de lista de deseos y guías de tallas.",
    tags: ["Wordpress", "Gutenberg", "Diseño UX"],
    image: "/images/los-belgas/los-belgas.webp",
    overview: "Un sitio web de comercio electrónico completo para Urban Threads, una marca de moda independiente. El proyecto se enfocó en crear una experiencia de compra excepcional con funciones de filtrado avanzado y personalización.",
    problem: "Urban Threads estaba vendiendo a través de mercados de terceros y perdiendo identidad de marca. Necesitaban su propia plataforma de comercio electrónico que proporcionara una experiencia de compra premium y mejores márgenes de ganancia.",
    goals: [
      "Construir una plataforma de comercio electrónico escalable",
      "Implementar filtrado de productos avanzado y búsqueda",
      "Crear un proceso de pago intuitivo",
      "Diseñar para comportamiento de compra móvil primero"
    ],
    designProcess: "Investiqué sitios de competidores y mejores prácticas actuales de comercio electrónico. Creé wireframes detallados para viajes de usuario clave incluyendo búsqueda, filtrado y pago. Diseñé una interfaz sofisticada con énfasis en fotografía de productos. Desarrollé un sistema de diseño completo para coherencia en todas las páginas.",
    development: "Construido en WooCommerce con extensas personalizaciones. Implementé filtrado potenciado por AJAX para navegación sin problemas. Creé plantillas de productos personalizadas con galerías de imágenes y guías de tallas. Integré con proveedores de envío y puertas de enlace de pago. Implementé características de lista de deseos y productos vistos recientemente. Optimicé el flujo de pago para reducir el abandono del carrito.",
    result: "La tienda se lanzó exitosamente con más de 500 productos. La tasa de conversión alcanzó 3.2%, por encima del promedio de la industria. Las ventas móviles representaron el 65% de los ingresos totales. Los comentarios de los clientes destacaron la navegación fácil y el proceso de pago.",
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
    description: "Un sitio web de portafolio para una agencia creativa que muestra su trabajo de diseño y testimonios de clientes.",
    tags: ["Diseño UI", "Figma", "React", "Diseño Responsivo", "Github"],
    image: "/images/portfolio/portfolio.webp",
    overview: "Un sitio web de portafolio visualmente impresionante para Colectivo Creativo, una agencia de diseño boutique. El sitio presenta escaparates de proyectos animados, perfiles de miembros del equipo y una sección de servicios interactiva.",
    problem: "El sitio web anterior de la agencia no mostraba efectivamente su trabajo creativo. Necesitaban un sitio moderno y orientado visualmente que impresionara a clientes potenciales y ganara nuevos negocios.",
    problemImages: [
      "/images/portfolio/old-portfolio.webp",
      "/images/portfolio/old-portfolio1.webp",
      
    ],
    goals: [
      "Crear una primera impresión audaz y memorable",
      "Mostrar proyectos con animaciones atractivas",
      "Contar la historia y valores de la agencia",
      "Generar clientes potenciales de calidad a través de CTAs estratégicas"
    ],
    designProcess: "Exploré varias opciones de diseño enfocándose en jerarquía visual y narración de historias. Creé mockups de alta fidelidad en Figma con cuidadosa atención a sistemas de cuadrícula y tipografía. Diseñé animaciones personalizadas e interacciones microinteractivas para mejorar el compromiso del usuario. Usé una paleta de colores sofisticada con combinaciones de colores inesperadas.",
    development: "Construido con HTML5 semántico y técnicas CSS modernas incluyendo Grid y Propiedades Personalizadas. Implementé animaciones suaves de desplazamiento usando API de Intersection Observer. Creé una arquitectura JavaScript modular para componentes interactivos. Optimicé el rendimiento con carga perezosa para imágenes y videos.",
    result: "El sitio web ganó un premio de diseño local y generó una atención significativa de la industria. La agencia reportó un aumento de 3x en consultas de calidad. La tasa de rebote disminuyó un 45% con usuarios pasando un promedio de 4 minutos en el sitio.",
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
    development: "Construido completamente con React usandocomponentes reutilizables y hooks personalizados. Tailwind CSS proporcionó los estilos utilitarios y aseguró responsive design en todos los dispositivos. Implementé React Router para navegación entre secciones. Usé useState y useEffect para manejar el estado de respuestas y cálculo de resultados. Las preguntas se estructuran en JSON para escalabilidad. Agregué localStorage para persistencia de progreso del usuario entre sesiones.",
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
