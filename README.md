
  # Ana Vallejo Rivera - Portfolio 🚀

🚧 **En proceso de construcción** 🚧

Portfolio profesional interactivo de **Ana Vallejo Rivera**, desarrolladora web y diseñadora UI/UX. Este sitio web es una plataforma moderna para presentar proyectos, habilidades y experiencia en desarrollo web fullstack.

**Sitio en vivo:** [ana-portfolio.vercel.app](https://anavallejorivera.com) (próximamente)

---

## 📋 Sobre el Proyecto

Este es un portfolio personal profesional creado con tecnologías modernas que incluye:

- ✨ **Presentación personal** - Información sobre experiencia y formación
- 🎨 **Sección de habilidades** - Frontend, Backend, Herramientas y Diseño
- 💼 **Proyectos destacados** - Case studies detallados con galerías multimedia
- 📧 **Formulario de contacto** - Con integración de EmailJS para recibir mensajes
- 🌐 **Soporte multiidioma** - Inglés y Español con detección automática
- 🌓 **Modo oscuro** - Tema adaptable a preferencias del usuario
- 📱 **Diseño responsive** - Optimizado para móvil, tablet y desktop

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca para interfaces de usuario
- **TypeScript** - Tipado estático para mayor seguridad
- **Vite 6.3.5** - Herramienta de build rápida
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones suaves y fluid

### Internacionalización
- **i18next** - Framework de traducción
- **react-i18next** - Integración con React
- **i18next-browser-languagedetector** - Detección automática de idioma

### Funcionalidades
- **React Router** - Enrutamiento client-side
- **EmailJS** - Envío de emails desde formularios
- **Radix UI** - Componentes accesibles
- **Lucide Icons** - Librería de iconos minimalista

### Desarrollo
- **Git & GitHub** - Control de versiones
- **Vercel** - Deployment y hosting

---

## ✨ Características Principales

### Diseño
- Interfaz moderna y minimalista
- Paleta de colores consistente (#470d3b,#7e2f56,#c0576f,#e48679,#febd84)
- Tipografía clara y legible
- Animaciones suaves con Framer Motion

### Experiencia de Usuario
- Navegación intuitiva con smooth scroll
- Logo clickeable que lleva al hero
- Formulario de contacto funcional
- Manejo de errores elegante
- Feedback visual en todas las interacciones

### Accesibilidad
- Diseño responsive (móvil, tablet, desktop)
- Modo oscuro/claro
- Contraste de colores adecuado
- Etiquetas ARIA en elementos interactivos

### Rendimiento
- Optimizado con Vite para fast builds
- Lazy loading de imágenes
- Code splitting automático
- Compresión de assets

---

## 📁 Estructura del Proyecto

```
ana-porfolio/
├── src/
│   ├── app/
│   │   ├── components/         # Componentes reutilizables
│   │   │   ├── Navigation.tsx   # Barra de navegación
│   │   │   ├── Hero.tsx         # Sección principal
│   │   │   ├── Projects.tsx     # Galería de proyectos
│   │   │   ├── Skills.tsx       # Habilidades
│   │   │   ├── About.tsx        # Acerca de mí
│   │   │   ├── Contact.tsx      # Formulario de contacto
│   │   │   ├── Footer.tsx       # Pie de página
│   │   │   └── ...
│   │   ├── context/            # Context API
│   │   │   └── ThemeContext.tsx # Manejo de tema
│   │   ├── data/               # Datos estáticos
│   │   │   └── projects.ts     # Informacion de proyectos
│   │   ├── pages/              # Páginas principales
│   │   │   ├── Home.tsx        # Página principal
│   │   │   └── CaseStudy.tsx   # Detalle de proyecto
│   │   ├── Layout.tsx          # Layout principal
│   │   └── routes.tsx          # Configuración de rutas
│   ├── i18n/                   # Internacionalización
│   │   ├── config.ts           # Configuración de i18next
│   │   └── locales/            # Traducciones
│   │       ├── es.json         # Español
│   │       └── en.json         # Inglés
│   ├── styles/                 # Estilos globales
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── fonts.css
│   │   └── theme.css
│   └── main.tsx                # Punto de entrada
├── public/
│   ├── images/                 # Imágenes del sitio
│   └── CV-Ana-vallejo-Completo-IT.pdf
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Instalación y Uso

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/avallejorivera360-bot/ana-porfolio.git

# Navegar al proyecto
cd ana-porfolio

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Servidor disponible en http://localhost:5173
```

### Build para Producción

```bash
# Compilar para producción
npm run build

# Preview de la build
npm run preview
```

---

## 📧 Configuración de Formulario de Contacto (EmailJS)

### 1. Crear cuenta en EmailJS
- Ir a [emailjs.com](https://www.emailjs.com/)
- Crear cuenta gratuita
- Configurar servicio de correo (Gmail, Outlook, etc.)
- Crear plantilla de email

### 2. Configurar variables de entorno
Copiar `.env.example` a `.env` local (NO se commitea a git):

```bash
cp .env.example .env
```

### 3. Agregar credenciales en `.env`
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_from_emailjs
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAIL_RECIPIENT=your_email@example.com
```

✅ El archivo `.env` NO será enviado a git (está en `.gitignore`)
✅ `.env.example` sirve como template para el equipo

---

## 🌐 Traducción (i18n)

El sitio está completamente traducido al Español e Inglés:

- Detección automática de idioma del navegador
- Botón para cambiar idioma manualmente
- Persistencia de preferencia en localStorage
- Más de 100 claves de traducción

Para agregar nuevas traducciones:
1. Editar `src/i18n/locales/es.json`
2. Editar `src/i18n/locales/en.json`
3. Usar `useTranslation()` hook en componentes

---

## 🎨 Personalización

### Colores
Editar en `tailwind.config.ts` y archivos CSS:
- Color primario: `#c0576f`
- Color oscuro: `#470d3b`
- Color acento: `#febd84`

### Contenido
- Proyectos: `src/app/data/projects.ts`
- Información personal: `src/app/components/About.tsx`
- Habilidades: `src/app/components/Skills.tsx`

---

## 📱 Responsive Design

- **Mobile** (< 768px) - Menú hamburguesa, botones compactos
- **Tablet** (768px - 1024px) - Layout intermedio
- **Desktop** (> 1024px) - Layout completo con navegación horizontal

---



---

## ⚡ Optimizaciones de Performance

### Build & Bundle
- ✅ Vite build: 4.01s
- ✅ Bundle size: 522KB (gzipped: 167KB)
- ✅ CSS optimizado: 16.56KB (gzipped)
- ✅ Code splitting: CaseStudy lazy-loaded (1.59KB gzipped)

## 🤝 Contribuciones

Este es un proyecto personal, es mi primera vez desarrollando un proyecto completo con React/tailwind por lo que se aceptan sugerencias y mejoras.

---

## 📄 Licencia

Este proyecto está bajo licencia MIT.

---

## 👨‍💻 Autor

**Ana Vallejo Rivera**
- 🔗 LinkedIn: [linkedin.com/in/anavallejorivera-developer](https://www.linkedin.com/in/anavallejorivera-developer)
- 📧 Email: [avallejorivera360@gmail.com](mailto:avallejorivera360@gmail.com)
- 💼 Desarrolladora Web & Diseñadora UI/UX

---

**Última actualización:** Marzo 2026

## Objetivo del proyecto

Este portfolio forma parte de mi proceso de aprendizaje en desarrollo web y tiene como objetivo:

- Practicar el desarrollo de interfaces web
- Aplicar conceptos de diseño de UI
- Documentar proyectos y trabajos realizados
- Crear una presencia profesional online
  
