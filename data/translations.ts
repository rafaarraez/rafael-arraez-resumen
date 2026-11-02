export const contentTranslations = {
  es: {
    // Experience content
    experience: {
      8: {
        title: "Software Engineer",
        description:
          "Plataforma de ventas por WhatsApp con IA para más de 700 hoteles en 20 países.",
        achievements: [
          "Desarrollé más de 10 integraciones con PMS y motores de reserva (Lobby PMS, Silbeck, Niara, Anfy, OYO, GuruHotel, Paraty Tech y Tuzgle) para que el asistente cotice y reserve en tiempo real",
          "Construí de punta a punta el sistema de atribución de conversiones (pixel): tag JavaScript embebible, tracking de UTM, eventos en TinyBird y dashboard de ROI, con paso automático de leads a la etapa ganada que eliminó la carga manual del equipo comercial",
          "Desarrollé el canal Chat Web: widget embebible conectado al asistente de IA, con links de pago y precios en la moneda del visitante",
          "Implementé el flujo de cashback con TravelCash, disparado por webhooks de la pasarela de pago, con tres capas de idempotencia y jobs durables en Inngest",
          "Mejoré la precisión del agente conversacional en LangGraph: cotizaciones, cálculo de ocupación y derivación a asesores humanos en el mismo turno",
        ],
      },
      1: {
        title: "Lead Backend Engineer",
        description:
          "Startup AgeTech: app móvil (iOS y Android) de soporte tecnológico remoto para personas mayores.",
        achievements: [
          "Diseñé y construí desde cero el backend en NestJS con Clean Architecture y DDD, y el panel de administración en Next.js, hasta el lanzamiento del MVP en App Store y Google Play",
          "Desarrollé la asistencia remota en tiempo real: señalización WebRTC sobre WebSockets (Socket.IO) para compartir pantalla y control remoto, con recuperación de sesión ante desconexiones",
          "Implementé APIs REST con autenticación JWT y refresh tokens rotativos, 2FA (TOTP), login con Google, control de acceso por roles y notificaciones push con Firebase",
          "Diseñé el modelo de datos en PostgreSQL con TypeORM, con índices en las consultas frecuentes, y eliminé consultas N+1 en endpoints de métricas (de 2 consultas por usuario a una sola agrupada)",
          "Desplegué en Google Cloud Run con Docker y CI/CD en GitHub Actions (tests, lint y rollback), con observabilidad en New Relic y Cloud Logging, alertas y dashboards",
        ],
      },
      2: {
        title: "Senior Software Engineer",
        description:
          "Desarrollo de integraciones a gran escala y sistemas backend orientados a marketing automation y business analytics.",
        achievements: [
          "Diseñé e implementé integraciones a gran escala entre HubSpot, Salesforce y SalesLoft, sincronizando millones de registros de marketing y ventas",
          "Diseñé APIs en NestJS y Django para una plataforma SaaS de personalización de emails con más de 200K usuarios activos mensuales",
          "Desarrollé módulos backend con Django y OpenAI API para automatizar campañas de email marketing, aumentando la conversión un 25%",
          "Optimicé consultas complejas en PostgreSQL, reduciendo un 60% los tiempos de respuesta, e implementé pipelines de CI/CD en AWS con Docker que redujeron los despliegues de 2 h a 15 min",
        ],
      },
      3: {
        title: "Senior Software Engineer",
        description:
          "Desarrollo de sistemas backend escalables para e-commerce y liderazgo técnico de equipo.",
        achievements: [
          "Implementé un sistema de gestión de pedidos multitienda en NestJS y AWS (Lambda, API Gateway, DynamoDB), dentro de la migración de un monolito a microservicios, procesando más de 1M de transacciones al mes",
          "Reduje un 20% los costos de infraestructura optimizando servicios en AWS",
          "Aumenté la cobertura de pruebas al 85% con Jest en backend (NestJS) y frontend (Next.js)",
          "Mentoricé a 3 desarrolladores junior en code reviews y buenas prácticas con NestJS y AWS, acelerando su curva de aprendizaje un 40%",
        ],
      },
      4: {
        title: "Full Stack Developer",
        description:
          "Desarrollo de plataformas web y APIs REST para productos digitales y redes sociales.",
        achievements: [
          "Lideré el desarrollo de una red social en Next.js y NestJS con notificaciones en tiempo real, roles administrativos, autenticación JWT y middleware dinámico de permisos",
          "Implementé SSR y SSG en Next.js, mejorando un 40% el SEO y el tiempo de carga",
        ],
      },
      5: {
        title: "Full Stack Developer",
        description:
          "Desarrollo de sistemas fintech y plataformas de comunicación omnicanal.",
        achievements: [
          "Integré pagos con Stripe para más de 50K usuarios activos y desarrollé envíos masivos de SMS y email con Twilio y Mailgun, aumentando la entregabilidad un 35%",
          "Creé un sistema omnicanal de soporte técnico en Laravel, Vue.js y PostgreSQL y refactoricé sus consultas, reduciendo la latencia un 30%",
        ],
      },
      6: {
        title: "Full Stack Developer",
        description:
          "Desarrollo de soluciones web para campañas digitales y plataformas e-commerce.",
        achievements: [
          "Construí APIs REST en Laravel para e-commerce y landing pages en Vue.js",
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
      6: {
        title: "Agente de IA para Ventas Hoteleras",
        description:
          "Asistente de IA con LLMs (LangGraph) que atiende, cotiza y reserva por WhatsApp y chat web para más de 700 hoteles en 20 países, conectado en tiempo real a PMS y motores de reserva.",
        achievements: [
          "Más de 10 integraciones con PMS y motores de reserva para cotizar y reservar en tiempo real",
          "Canal Chat Web construido de punta a punta, con links de pago y precios en la moneda del visitante",
          "Pixel de conversión que atribuye cada reserva a su conversación y mide el retorno de inversión",
          "Mejoras de precisión del agente: cotizaciones, cálculo de ocupación y derivación a asesores humanos",
        ],
        metricsLabels: {
          hotels: "hoteles",
          integrations: "integraciones",
          channels: "canales",
        },
      },
      1: {
        title: "App de Asistencia Remota en Tiempo Real",
        description:
          "Backend construido desde cero para una app móvil AgeTech (iOS y Android) que permite a las familias dar soporte tecnológico remoto a personas mayores, hasta el lanzamiento del MVP.",
        achievements: [
          "Asistencia remota en tiempo real con WebRTC sobre WebSockets (Socket.IO): pantalla compartida y control remoto",
          "APIs REST con JWT y refresh tokens rotativos, 2FA (TOTP), login con Google y control de acceso por roles",
          "Modelo de datos en PostgreSQL con índices y eliminación de consultas N+1 en endpoints de métricas",
          "Despliegue continuo en Google Cloud Run con Docker y GitHub Actions, con observabilidad en New Relic",
          "Panel de administración en Next.js para operaciones: métricas, usuarios, sesiones en vivo y auditoría",
        ],
        metricsLabels: {
          launch: "MVP lanzado",
          realtime: "tiempo real",
          security: "autenticación",
        },
      },
      2: {
        title: "Sistema de Integraciones CRM",
        description:
          "Integraciones en tiempo real entre HubSpot, Salesforce y SalesLoft, sincronizando millones de contactos mediante una arquitectura event-driven.",
        achievements: [
          "Sincronización en tiempo real de +1M contactos",
          "Reducción del 60% en los tiempos de respuesta optimizando consultas en PostgreSQL",
          "Arquitectura event-driven altamente escalable",
          "Despliegues de 2 h a 15 min con pipelines de CI/CD en AWS y Docker",
        ],
        metricsLabels: {
          performance: "tiempo respuesta",
          scale: "contactos",
          deploys: "despliegues",
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
    // Side Projects content
    sideProjects: {
      1: {
        title: "¿A Cómo?",
        tagline: "Calculadora de ahorro en USDT, al toque",
        description:
          "PWA que compara la tasa oficial del BCV contra el precio del USDT en Binance P2P y te dice cuánto te ahorras pagando en cripto. Convierte entre 4 monedas, comparte el resultado por WhatsApp y funciona sin conexión.",
      },
      2: {
        title: "Sismos Venezuela",
        tagline: "Monitor sísmico en tiempo real",
        description:
          "Agrega datos de FUNVISIS, USGS, EMSC y SGC para visualizar la actividad sísmica del país en un mapa interactivo, con filtros, gráficos de magnitud y energía, y exportación a CSV y Excel.",
      },
    },
    // About section
    about: {
      title: "Sobre Mí",
      greeting: "¡Hola! Soy Rafael",
      bio1:
        "Soy Senior Backend Engineer con más de 8 años diseñando, construyendo y escalando plataformas backend con Node.js, NestJS, TypeScript y Python/Django. Me especializo en agentes de IA con LLMs (LangGraph) que cotizan y reservan para más de 700 hoteles, y en llevar backends desde cero hasta producción: arquitectura, tiempo real (WebSockets y WebRTC), seguridad, CI/CD y observabilidad en AWS y Google Cloud.",
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
          "+8 años construyendo sistemas backend escalables",
          "Agentes de IA en producción para más de 700 hoteles",
          "+1M transacciones/mes procesadas en producción",
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
      8: {
        title: "Software Engineer",
        description:
          "AI-powered WhatsApp sales platform for 700+ hotels in 20 countries.",
        achievements: [
          "Built 10+ integrations with PMSs and booking engines (Lobby PMS, Silbeck, Niara, Anfy, OYO, GuruHotel, Paraty Tech and Tuzgle) so the assistant can quote and book in real time",
          "Built the conversion attribution system (pixel) end to end: embeddable JavaScript tag, UTM tracking, events in TinyBird and an ROI dashboard, with automatic promotion of leads to the won stage that removed manual work for the sales team",
          "Developed the Web Chat channel: an embeddable widget connected to the AI assistant, with payment links and prices in the visitor's local currency",
          "Implemented the TravelCash cashback flow, triggered by payment gateway webhooks, with three layers of idempotency and durable jobs in Inngest",
          "Improved the accuracy of the LangGraph conversational agent: quotes, occupancy calculation and same-turn handoff to human agents",
        ],
      },
      1: {
        title: "Lead Backend Engineer",
        description:
          "AgeTech startup: mobile app (iOS and Android) providing remote tech support for older adults.",
        achievements: [
          "Designed and built the NestJS backend from scratch with Clean Architecture and DDD, plus the Next.js admin dashboard, through the MVP launch on the App Store and Google Play",
          "Built real-time remote assistance: WebRTC signaling over WebSockets (Socket.IO) for screen sharing and remote control, with session recovery after disconnections",
          "Implemented REST APIs with JWT authentication and rotating refresh tokens, 2FA (TOTP), Google sign-in, role-based access control and push notifications with Firebase",
          "Designed the PostgreSQL data model with TypeORM, indexing frequent queries, and removed N+1 queries in metrics endpoints (from 2 queries per user to a single grouped query)",
          "Deployed to Google Cloud Run with Docker and CI/CD on GitHub Actions (tests, lint and rollback), with observability in New Relic and Cloud Logging, alerts and dashboards",
        ],
      },
      2: {
        title: "Senior Software Engineer",
        description:
          "Development of large-scale integrations and backend systems for marketing automation and business analytics.",
        achievements: [
          "Designed and implemented large-scale integrations between HubSpot, Salesforce and SalesLoft, syncing millions of marketing and sales records",
          "Designed NestJS and Django APIs for an email personalization SaaS platform with 200K+ monthly active users",
          "Built backend modules with Django and the OpenAI API to automate email marketing campaigns, increasing conversion by 25%",
          "Optimized complex PostgreSQL queries, cutting response times by 60%, and built CI/CD pipelines on AWS with Docker that reduced deployments from 2 h to 15 min",
        ],
      },
      3: {
        title: "Senior Software Engineer",
        description:
          "Development of scalable backend systems for e-commerce platforms and technical leadership.",
        achievements: [
          "Implemented a multi-store order management system in NestJS and AWS (Lambda, API Gateway, DynamoDB) as part of a monolith-to-microservices migration, processing 1M+ transactions per month",
          "Cut infrastructure costs by 20% by optimizing AWS services",
          "Raised test coverage to 85% with Jest across backend (NestJS) and frontend (Next.js)",
          "Mentored 3 junior developers on code reviews and NestJS and AWS best practices, shortening their ramp-up by 40%",
        ],
      },
      4: {
        title: "Full Stack Developer",
        description:
          "Development of web platforms and REST APIs for digital products and social applications.",
        achievements: [
          "Led development of a social network in Next.js and NestJS with real-time notifications, admin roles, JWT authentication and dynamic permission middleware",
          "Implemented SSR and SSG in Next.js, improving SEO and load time by 40%",
        ],
      },
      5: {
        title: "Full Stack Developer",
        description:
          "Development of fintech systems and omnichannel communication platforms.",
        achievements: [
          "Integrated Stripe payments for 50K+ active users and built bulk SMS and email delivery with Twilio and Mailgun, improving deliverability by 35%",
          "Built an omnichannel support system in Laravel, Vue.js and PostgreSQL and refactored its queries, reducing latency by 30%",
        ],
      },
      6: {
        title: "Full Stack Developer",
        description:
          "Development of web solutions for digital campaigns and e-commerce platforms.",
        achievements: [
          "Built REST APIs in Laravel for e-commerce and landing pages in Vue.js",
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
      6: {
        title: "AI Sales Agent for Hotels",
        description:
          "LLM-powered AI assistant (LangGraph) that answers, quotes and books over WhatsApp and web chat for 700+ hotels in 20 countries, connected in real time to PMSs and booking engines.",
        achievements: [
          "10+ integrations with PMSs and booking engines to quote and book in real time",
          "Web Chat channel built end to end, with payment links and prices in the visitor's local currency",
          "Conversion pixel that attributes each booking to its conversation and measures ROI",
          "Agent accuracy improvements: quotes, occupancy calculation and handoff to human agents",
        ],
        metricsLabels: {
          hotels: "hotels",
          integrations: "integrations",
          channels: "channels",
        },
      },
      1: {
        title: "Real-Time Remote Assistance App",
        description:
          "Backend built from scratch for an AgeTech mobile app (iOS and Android) that lets families provide remote tech support to older adults, through the MVP launch.",
        achievements: [
          "Real-time remote assistance with WebRTC over WebSockets (Socket.IO): screen sharing and remote control",
          "REST APIs with JWT and rotating refresh tokens, 2FA (TOTP), Google sign-in and role-based access control",
          "PostgreSQL data model with indexes and N+1 queries removed from metrics endpoints",
          "Continuous delivery to Google Cloud Run with Docker and GitHub Actions, with observability in New Relic",
          "Next.js admin dashboard for operations: metrics, users, live sessions and audit log",
        ],
        metricsLabels: {
          launch: "MVP launched",
          realtime: "real-time",
          security: "authentication",
        },
      },
      2: {
        title: "CRM Integration System",
        description:
          "Real-time integrations between HubSpot, Salesforce, and SalesLoft, synchronizing millions of contacts using an event-driven architecture.",
        achievements: [
          "Real-time synchronization of 1M+ contacts",
          "60% reduction in response times by optimizing PostgreSQL queries",
          "Highly scalable event-driven architecture",
          "Deployments cut from 2 h to 15 min with CI/CD pipelines on AWS and Docker",
        ],
        metricsLabels: {
          performance: "response time",
          scale: "contacts",
          deploys: "deployments",
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
    // Side Projects content
    sideProjects: {
      1: {
        title: "¿A Cómo?",
        tagline: "USDT savings calculator, one tap away",
        description:
          "A PWA that compares Venezuela's official BCV rate against the USDT price on Binance P2P and shows how much you save paying in crypto. Converts between 4 currencies, shares the result via WhatsApp, and works offline.",
      },
      2: {
        title: "Sismos Venezuela",
        tagline: "Real-time seismic activity monitor",
        description:
          "Aggregates data from FUNVISIS, USGS, EMSC, and SGC to visualize the country's seismic activity on an interactive map, with filters, magnitude and energy charts, and CSV/Excel export.",
      },
    },
    // About section
    about: {
      title: "About Me",
      greeting: "Hi! I'm Rafael",
      bio1:
        "I'm a Senior Backend Engineer with 8+ years designing, building and scaling backend platforms with Node.js, NestJS, TypeScript and Python/Django. I specialize in LLM-powered AI agents (LangGraph) that quote and book for 700+ hotels, and in taking backends from zero to production: architecture, real-time (WebSockets and WebRTC), security, CI/CD and observability on AWS and Google Cloud.",
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
          "+8 years building scalable backend systems",
          "AI agents in production for 700+ hotels",
          "+1M transactions/month processed in production",
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
