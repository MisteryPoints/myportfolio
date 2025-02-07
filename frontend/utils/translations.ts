const translations = {
    en: {
      welcome: "Welcome to My Pixel Portfolio",
      intro: "I'm a passionate developer creating pixel-perfect experiences.",
      featuredProjects: "Featured Projects",
      project: "Project",
      projectDescription: "A brief description of the project goes here.",
      contactMe: "Contact Me",
    },
    es: {
      welcome: "Bienvenido a Mi Portafolio Pixel",
      intro: "Soy un desarrollador apasionado creando experiencias perfectas al pixel.",
      featuredProjects: "Proyectos Destacados",
      project: "Proyecto",
      projectDescription: "Una breve descripción del proyecto va aquí.",
      contactMe: "Contáctame",
    },
  }
  
  export function useTranslations(lang: string) {
    return (key: keyof typeof translations.en) => {
      return translations[lang as keyof typeof translations][key] || translations.en[key]
    }
  }
  
  