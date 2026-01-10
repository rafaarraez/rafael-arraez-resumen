export const contentTranslations = {
  es: {
    // Experience content
    experience: {
      1: {
        title: "Senior Backend Software Engineer",
        description:
          "Diseño y desarrollo de microservicios backend de alta disponibilidad para una aplicación de asistencia en tiempo real.",
        achievements: [
          "Diseñé y desarrollé microservicios backend en NestJS aplicando Clean Architecture, DDD y patrones de diseño, reduciendo incidentes operativos en ≈30%",
          "Implementé APIs REST escalables y flujos event-driven asegurando integridad de datos, control de accesos (JWT, roles) y trazabilidad completa de eventos de negocio",
          "Desarrollé comunicación en tiempo real con WebSockets para sincronización de estados y gestión de sesiones activas en flujos críticos de negocio",
          "Optimicé consultas y modelos de datos en PostgreSQL usando TypeORM, reduciendo hasta 40% los tiempos de respuesta en endpoints críticos",
          "Implementé observabilidad y auditoría mediante logs estructurados y métricas, facilitando monitoreo proactivo y detección temprana de incidentes",
          "Containericé servicios con Docker y gestioné pipelines CI/CD con GitHub Actions, mejorando la confiabilidad y velocidad de despliegue en cloud",
        ],
      },
      2: {
        title: "Senior Software Engineer",
        description:
          "Desarrollo de integraciones a gran escala y sistemas backend orientados a marketing automation y business analytics.",
        achievements: [
          "Diseñé e implementé integraciones a gran escala entre HubSpot, Salesforce y SalesLoft, sincronizando millones de registros de marketing y ventas",
          "Optimicé consultas complejas en PostgreSQL, reduciendo en 15% el tiempo de respuesta de dashboards críticos de business analytics",
          "Desarrollé módulos backend con Django + OpenAI API para automatización de campañas de email marketing, logrando +25% de conversión",
          "Implementé CI/CD con GitHub Actions y Docker, reduciendo fallos de despliegue en ≈40%",
        ],
      },
      3: {
        title: "Senior Software Engineer",
        description:
          "Desarrollo de sistemas backend escalables para e-commerce y liderazgo técnico de equipo.",
        achievements: [
          "Implementé un sistema de control de pedidos multi-tienda en NestJS y AWS, procesando +1M transacciones por mes",
          "Aumenté la cobertura de pruebas al 85% con Jest en backend (NestJS) y frontend (Next.js)",
          "Diseñé autenticación basada en roles y trazabilidad avanzada, fortaleciendo la seguridad del sistema",
          "Mentoricé a un equipo de 3 desarrolladores junior, mejorando sus prácticas de desarrollo y acelerando su rampa de aprendizaje en 40%",
        ],
      },
      4: {
        title: "FullStack Developer",
        description:
          "Desarrollo de plataformas web y APIs REST para productos digitales y redes sociales.",
        achievements: [
          "Construí APIs REST en NestJS para plataformas inmobiliarias y de contenido viral",
          "Lideré el desarrollo de una red social en Next.js y NestJS con notificaciones en tiempo real y roles administrativos",
          "Implementé autenticación JWT y middleware dinámico de permisos",
        ],
      },
      5: {
        title: "FullStack Developer",
        description:
          "Desarrollo de sistemas fintech y plataformas de comunicación omnicanal.",
        achievements: [
          "Creé un sistema omnicanal de soporte técnico en Laravel y Vue.js, automatizando la asignación de tickets",
          "Desarrollé backend para envíos masivos SMS y email, aumentando la entregabilidad en 35%",
          "Refactoricé PostgreSQL, reduciendo la latencia de consultas en 30%",
        ],
      },
      6: {
        title: "FullStack Developer",
        description:
          "Desarrollo de soluciones web para campañas digitales y plataformas e-commerce.",
        achievements: [
          "Desarrollé landing pages interactivas en Vue.js para campañas digitales con mayor conversión",
          "Construí APIs REST en Laravel para e-commerce B2B y B2C",
        ],
      },
      7: {
        title: "Ingeniero en Computación",
        description:
          "Formación en ingeniería de software, algoritmos, estructuras de datos y desarrollo web.",
        achievements: [
          "Proyecto de grado: Sistema de verificación de identidad biométrica",
          "Especialización en desarrollo web y bases de datos",
        ],
      },
    },
    // Projects content
    projects: {
      1: {
        title: "Plataforma de Asistencia en Tiempo Real",
        description:
          "Plataforma de asistencia y gestión de sesiones en tiempo real, diseñada con microservicios backend de alta disponibilidad y flujos event-driven.",
        achievements: [
          "Reducción de ≈30% en incidentes operativos mediante arquitectura modular y validaciones robustas",
          "Gestión de sesiones de asistencia en tiempo real con sincronización inmediata de estados",
          "Implementación de APIs REST seguras con JWT y control de acceso por roles",
          "Optimización de consultas PostgreSQL reduciendo hasta 40% los tiempos de respuesta",
          "Observabilidad y auditoría completa mediante logs estructurados y métricas",
        ],
        metricsLabels: {
          stability: "incidentes",
          performance: "latencia",
          realtime: "WebSockets",
        },
      },
      2: {
        title: "Sistema de Integraciones CRM",
        description:
          "Integraciones en tiempo real entre HubSpot, Salesforce y SalesLoft, sincronizando millones de contactos mediante una arquitectura event-driven.",
        achievements: [
          "Sincronización en tiempo real de +1M contactos",
          "Reducción del 15% en el tiempo de respuesta de dashboards",
          "Arquitectura event-driven altamente escalable",
          "Despliegues sin downtime (zero downtime deployments)",
        ],
        metricsLabels: {
          performance: "tiempo respuesta",
          scale: "contactos",
          uptime: "uptime",
        },
      },
      3: {
        title: "Plataforma E-commerce Multi-tienda",
        description:
          "Sistema de control de pedidos multi-tienda procesando más de 1M de transacciones mensuales, con alta disponibilidad y trazabilidad completa.",
        achievements: [
          "+1M transacciones procesadas por mes",
          "85% de cobertura de pruebas automatizadas",
          "Sistema avanzado de roles y permisos",
          "Mentoría técnica a un equipo de 3 desarrolladores",
        ],
        metricsLabels: {
          transactions: "transacciones",
          coverage: "tests",
          team: "devs mentoreados",
        },
      },
      4: {
        title: "Email Marketing con IA",
        description:
          "Módulos de email marketing automatizado usando Django y OpenAI GPT para personalización de contenido y optimización de conversión.",
        achievements: [
          "Incremento del 25% en la tasa de conversión",
          "Personalización automática de contenido con IA",
          "Procesamiento asíncrono altamente escalable",
          "Sistema de A/B testing integrado",
        ],
        metricsLabels: {
          conversion: "conversión",
          automation: "IA",
          processing: "Asíncrono",
        },
      },
      5: {
        title: "Sistema Omnicanal de Soporte",
        description:
          "Plataforma de soporte técnico con asignación automática de tickets, envíos masivos de SMS/email y dashboard de métricas en tiempo real.",
        achievements: [
          "Asignación automática de tickets de soporte",
          "Incremento del 35% en la entregabilidad de SMS y email",
          "Reducción del 30% en la latencia de consultas",
          "Dashboard de métricas en tiempo real",
        ],
        metricsLabels: {
          delivery: "entregabilidad",
          latency: "latencia",
          automation: "automatización",
        },
      },
    },
    // About section
    about: {
      title: "Sobre Mí",
      greeting: "¡Hola! Soy Rafael",
      bio1:
        "Soy un ingeniero de software apasionado por construir sistemas backend robustos y escalables. Con más de 7 años de experiencia, me especializo en arquitecturas distribuidas, integraciones complejas y automatización de procesos que generan impacto real en el negocio.",
      bio2:
        "Me motiva resolver problemas técnicos desafiantes, desde optimizar consultas que procesan millones de registros hasta diseñar APIs que escalan sin esfuerzo. Creo firmemente en el código limpio, las buenas prácticas y la colaboración en equipo.",
      bio3:
        "Cuando no estoy programando, me gusta mantenerme al día con las últimas tecnologías y compartir conocimiento con la comunidad de desarrolladores.",
      philosophy: {
        title: "Mi Filosofía de Trabajo",
        items: [
          "Código limpio y mantenible sobre soluciones rápidas",
          "Arquitectura escalable pensada para el futuro",
          "Tests automáticos para garantizar calidad",
          "Documentación clara para facilitar el onboarding",
          "Mejora continua y aprendizaje constante",
        ],
      },
      highlights: {
        title: "Destacados Profesionales",
        items: [
          "+7 años construyendo sistemas backend escalables",
          "+1M transacciones/mes procesadas en producción",
          "Reducción promedio de 30% en costos operativos",
          "Liderazgo técnico y mentoría de equipos junior",
        ],
      },
    },
    // Testimonials content
    testimonials: {
      1: {
        quote:
          "Trabajar con Rafael fue excepcional. Su dominio de NestJS y arquitectura de microservicios permitió reducir significativamente los incidentes operativos. Su capacidad para diseñar sistemas escalables y mantener código limpio es admirable.",
        author: "María González",
        role: "Tech Lead",
        company: "Tech Innovators Inc.",
      },
      2: {
        quote:
          "Rafael demostró habilidades excepcionales en optimización de sistemas backend. Implementó integraciones complejas que sincronizaban millones de registros sin problemas. Su enfoque en la calidad del código y las mejores prácticas es ejemplar.",
        author: "Carlos Mendoza",
        role: "Ingeniero Senior",
        company: "Global Solutions Ltd.",
      },
      3: {
        quote:
          "El impacto de Rafael en nuestro equipo fue notable. No solo desarrolló APIs escalables que procesaban más de 1M de transacciones mensuales, sino que también mentoró al equipo junior, mejorando significativamente nuestras prácticas de desarrollo.",
        author: "Laura Ramírez",
        role: "Engineering Manager",
        company: "E-commerce Solutions",
      },
      4: {
        quote:
          "Su experiencia en arquitectura distribuida y patrones de diseño transformó la manera en que construimos nuestros sistemas. La reducción del 30% en costos operativos tras sus optimizaciones fue un resultado tangible y medible.",
        author: "David Silva",
        role: "CTO",
        company: "StartupScale",
      },
    },
    // Certifications content
    certifications: {
      1: {
        name: "AWS Solutions Architect Associate",
        issuer: "Amazon Web Services",
        date: "2023",
      },
      2: {
        name: "Fundamentos de NestJS",
        issuer: "NestJS Official",
        date: "2022",
      },
      3: {
        name: "TypeScript Avanzado",
        issuer: "Microsoft Learn",
        date: "2022",
      },
      4: {
        name: "Docker & Kubernetes",
        issuer: "Docker Inc.",
        date: "2023",
      },
      5: {
        name: "Optimización de Rendimiento PostgreSQL",
        issuer: "PostgreSQL Community",
        date: "2022",
      },
      6: {
        name: "Arquitectura de Microservicios",
        issuer: "Cloud Academy",
        date: "2023",
      },
    },
  },
  en: {
    // Experience content
    experience: {
      1: {
        title: "Senior Backend Software Engineer",
        description:
          "Design and development of high-availability backend microservices for a real-time assistance application.",
        achievements: [
          "Designed and developed backend microservices in NestJS applying Clean Architecture, DDD, and design patterns, reducing operational incidents by ~30%",
          "Implemented scalable REST APIs and event-driven flows ensuring data integrity, access control (JWT, role-based authorization), and full business-event traceability",
          "Developed real-time communication using WebSockets for state synchronization and active session management in critical business workflows",
          "Optimized PostgreSQL queries and data models using TypeORM, reducing response times by up to 40% on critical endpoints",
          "Implemented observability and audit logging with structured logs and metrics, enabling proactive monitoring and early incident detection",
          "Containerized services with Docker and managed CI/CD pipelines using GitHub Actions, improving deployment reliability and speed in cloud environments",
        ],
      },
      2: {
        title: "Senior Software Engineer",
        description:
          "Development of large-scale integrations and backend systems for marketing automation and business analytics.",
        achievements: [
          "Designed and implemented large-scale integrations between HubSpot, Salesforce, and SalesLoft, synchronizing millions of marketing and sales records",
          "Optimized complex PostgreSQL queries, reducing response times by 15% on critical business analytics dashboards",
          "Developed backend modules using Django and the OpenAI API for email marketing automation, achieving a +25% conversion increase",
          "Implemented CI/CD pipelines with GitHub Actions and Docker, reducing deployment failures by ~40%",
        ],
      },
      3: {
        title: "Senior Software Engineer",
        description:
          "Development of scalable backend systems for e-commerce platforms and technical leadership.",
        achievements: [
          "Implemented a multi-store order management system using NestJS and AWS, processing over 1M transactions per month",
          "Increased test coverage to 85% using Jest across backend (NestJS) and frontend (Next.js)",
          "Designed role-based authentication and advanced traceability, significantly strengthening system security",
          "Mentored a team of 3 junior developers, improving engineering practices and accelerating ramp-up time by 40%",
        ],
      },
      4: {
        title: "FullStack Developer",
        description:
          "Development of web platforms and REST APIs for digital products and social applications.",
        achievements: [
          "Built REST APIs in NestJS for real estate platforms and viral content products",
          "Led the development of a social network using Next.js and NestJS with real-time notifications and administrative roles",
          "Implemented JWT authentication and dynamic permission-based middleware",
        ],
      },
      5: {
        title: "FullStack Developer",
        description:
          "Development of fintech systems and omnichannel communication platforms.",
        achievements: [
          "Built an omnichannel customer support system using Laravel and Vue.js with automated ticket assignment",
          "Developed backend services for bulk SMS and email delivery, increasing deliverability by 35%",
          "Refactored PostgreSQL queries and schema, reducing query latency by 30%",
        ],
      },
      6: {
        title: "FullStack Developer",
        description:
          "Development of web solutions for digital campaigns and e-commerce platforms.",
        achievements: [
          "Developed interactive landing pages using Vue.js for digital marketing campaigns with high conversion rates",
          "Built REST APIs in Laravel for B2B and B2C e-commerce platforms",
        ],
      },
      7: {
        title: "Computer Engineering",
        description:
          "Education in software engineering, algorithms, data structures, and web development.",
        achievements: [
          "Thesis project: Biometric identity verification system",
          "Specialization in web development and databases",
        ],
      },
    },
    // Projects content
    projects: {
      1: {
        title: "Real-Time Attendance Platform",
        description:
          "Real-time attendance and session management platform built with high-availability backend microservices and event-driven workflows.",
        achievements: [
          "≈30% reduction in operational incidents through modular architecture and robust validations",
          "Real-time attendance session management with immediate state synchronization",
          "Secure REST APIs implementation using JWT and role-based access control",
          "PostgreSQL query optimization reducing response times by up to 40%",
          "Full observability and auditing via structured logs and metrics",
        ],
        metricsLabels: {
          stability: "incidents",
          performance: "latency",
          realtime: "WebSockets",
        },
      },
      2: {
        title: "CRM Integration System",
        description:
          "Real-time integrations between HubSpot, Salesforce, and SalesLoft, synchronizing millions of contacts using an event-driven architecture.",
        achievements: [
          "Real-time synchronization of 1M+ contacts",
          "15% reduction in dashboard response times",
          "Highly scalable event-driven architecture",
          "Zero-downtime deployments",
        ],
        metricsLabels: {
          performance: "response time",
          scale: "contacts",
          uptime: "uptime",
        },
      },
      3: {
        title: "Multi-store E-commerce Platform",
        description:
          "Multi-store order management system processing over 1M transactions per month, with high availability and full traceability.",
        achievements: [
          "1M+ transactions processed per month",
          "85% automated test coverage",
          "Advanced roles and permissions system",
          "Technical mentorship of a team of 3 developers",
        ],
        metricsLabels: {
          transactions: "transactions",
          coverage: "tests",
          team: "devs mentored",
        },
      },
      4: {
        title: "AI-Powered Email Marketing",
        description:
          "Automated email marketing modules built with Django and OpenAI GPT for content personalization and conversion optimization.",
        achievements: [
          "25% increase in conversion rate",
          "AI-driven automatic content personalization",
          "Highly scalable asynchronous processing",
          "Integrated A/B testing system",
        ],
        metricsLabels: {
          conversion: "conversion",
          automation: "AI",
          processing: "Async",
        },
      },
      5: {
        title: "Omnichannel Support System",
        description:
          "Technical support platform with automatic ticket assignment, bulk SMS/email delivery, and a real-time metrics dashboard.",
        achievements: [
          "Automatic support ticket assignment",
          "35% increase in SMS and email deliverability",
          "30% reduction in query latency",
          "Real-time metrics dashboard",
        ],
        metricsLabels: {
          delivery: "deliverability",
          latency: "latency",
          automation: "automation",
        },
      },
    },
    // About section
    about: {
      title: "About Me",
      greeting: "Hi! I'm Rafael",
      bio1:
        "I'm a software engineer passionate about building robust and scalable backend systems. With over 7 years of experience, I specialize in distributed architectures, complex integrations, and process automation that generate real business impact.",
      bio2:
        "I'm motivated by solving challenging technical problems, from optimizing queries that process millions of records to designing APIs that scale effortlessly. I strongly believe in clean code, best practices, and team collaboration.",
      bio3:
        "When I'm not coding, I enjoy keeping up with the latest technologies, and sharing knowledge with the developer community.",
      philosophy: {
        title: "My Work Philosophy",
        items: [
          "Clean and maintainable code over quick fixes",
          "Scalable architecture designed for the future",
          "Automated tests to ensure quality",
          "Clear documentation to facilitate onboarding",
          "Continuous improvement and constant learning",
        ],
      },
      highlights: {
        title: "Professional Highlights",
        items: [
          "+7 years building scalable backend systems",
          "+1M transactions/month processed in production",
          "Average 30% reduction in operational costs",
          "Technical leadership and mentorship of junior teams",
        ],
      },
    },
    // Testimonials content
    testimonials: {
      1: {
        quote:
          "Working with Rafael was exceptional. His mastery of NestJS and microservices architecture significantly reduced operational incidents. His ability to design scalable systems and maintain clean code is admirable.",
        author: "María González",
        role: "Tech Lead",
        company: "Tech Innovators Inc.",
      },
      2: {
        quote:
          "Rafael demonstrated exceptional skills in backend systems optimization. He implemented complex integrations that synchronized millions of records seamlessly. His focus on code quality and best practices is exemplary.",
        author: "Carlos Mendoza",
        role: "Senior Engineer",
        company: "Global Solutions Ltd.",
      },
      3: {
        quote:
          "Rafael's impact on our team was remarkable. He not only developed scalable APIs processing over 1M monthly transactions but also mentored junior developers, significantly improving our development practices.",
        author: "Laura Ramírez",
        role: "Engineering Manager",
        company: "E-commerce Solutions",
      },
      4: {
        quote:
          "His expertise in distributed architecture and design patterns transformed how we build our systems. The 30% reduction in operational costs following his optimizations was a tangible and measurable result.",
        author: "David Silva",
        role: "CTO",
        company: "StartupScale",
      },
    },
    // Certifications content
    certifications: {
      1: {
        name: "AWS Solutions Architect Associate",
        issuer: "Amazon Web Services",
        date: "2023",
      },
      2: {
        name: "NestJS Fundamentals",
        issuer: "NestJS Official",
        date: "2022",
      },
      3: {
        name: "TypeScript Advanced",
        issuer: "Microsoft Learn",
        date: "2022",
      },
      4: {
        name: "Docker & Kubernetes",
        issuer: "Docker Inc.",
        date: "2023",
      },
      5: {
        name: "PostgreSQL Performance Tuning",
        issuer: "PostgreSQL Community",
        date: "2022",
      },
      6: {
        name: "Microservices Architecture",
        issuer: "Cloud Academy",
        date: "2023",
      },
    },
  },
}
