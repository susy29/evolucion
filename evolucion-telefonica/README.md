# Evolución Telefónica - Sitio Web Moderno

Sitio web corporativo moderno para Evolución Telefónica, construido con React, Vite y Tailwind CSS.

## 📋 Características

- ✅ 8 páginas completamente funcionales
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Navegación intuitiva con React Router
- ✅ Estilos modernos con Tailwind CSS v3
- ✅ Componentes reutilizables
- ✅ Formularios completamente funcionales
- ✅ FAQs con acordeones interactivos
- ✅ Iconos profesionales con Lucide React
- ✅ Optimizado para SEO

## 🚀 Instalación y uso

### Prerequisitos
- Node.js 16+ instalado
- npm o yarn

### Pasos de instalación

1. **Navega al directorio del proyecto:**
```bash
cd evolucion-telefonica
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

Esto generará los archivos optimizados en la carpeta `dist/`

## 📁 Estructura del proyecto

```
evolucion-telefonica/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeatureCard.jsx
│   │   └── Accordion.jsx
│   ├── pages/               # Páginas principales
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Solutions.jsx
│   │   ├── Companies.jsx
│   │   ├── SalesPoints.jsx
│   │   ├── Support.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # Componente principal con router
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── index.html               # HTML principal
├── package.json             # Dependencias
├── vite.config.js           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind
└── postcss.config.js        # Configuración de PostCSS
```

## 🎨 Paleta de colores

- **Azul primario:** #003D6B (Oscuro), #005D93
- **Naranja (Accent):** #FF9500
- **Blanco:** #FFFFFF
- **Grises neutros:** Para textos y fondos

## 🔧 Personalización

### Cambiar colores
Edita `tailwind.config.js` en la sección `theme.extend.colors`

### Agregar nuevas páginas
1. Crea un nuevo archivo en `src/pages/NuevasPagina.jsx`
2. Importa la página en `App.jsx`
3. Añade la ruta en el componente `Routes`
4. Actualiza los links en el `Header.jsx`

### Modificar contenido
Todos los textos están en los componentes JSX. Simplemente edita el contenido directamente.

## 📱 Responsive Design

El sitio está completamente optimizado para:
- Móviles (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🛠️ Tecnologías utilizadas

- **React 18** - Librería de UI
- **Vite** - Bundler moderno
- **Tailwind CSS 3** - Framework de CSS
- **React Router 6** - Enrutamiento
- **Lucide React** - Iconos
- **PostCSS** - Procesador de CSS

## 📧 Contacto y soporte

Para cambios en el contenido o nuevas funcionalidades, edita directamente los archivos .jsx correspondientes.

## 📝 Notas adicionales

- El formulario de contacto está configurado pero requiere integración con un backend para enviar emails
- El mapa de ubicación está como placeholder, requiere integración con Google Maps API
- Los links a redes sociales en el footer no tienen destinatarios, actualiza según necesites

---

**Última actualización:** Septiembre 2026
**Versión:** 1.0.0
