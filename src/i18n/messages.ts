import { Locale } from "./config";
import { PAGE_MESSAGES } from "./pages";

/**
 * All user-facing marketing copy, per locale.
 *
 * Conventions inside a string:
 *   **bold**  → wrapped in <Strong> by the <Rich> renderer
 *   \n\n      → a paragraph break (<br/><br/>)
 *
 * Long-form pages (blog posts, case-study bodies, the /ai and /work bodies)
 * are intentionally NOT here yet — only the site chrome and the homepage.
 */
export type Messages = Record<string, any>;

const en: Messages = {
    nav: { services: "Services", ai: "AI", portfolio: "Portfolio", blog: "Blog", contact: "Contact" },
    buttons: { scheduleCall: "Schedule a call now", scheduleCallShort: "Schedule a call" },
    home: {
        titleLead: "We build AI agents that make it to",
        titleEmphasis: "production.",
        subtitle:
            "RAG systems, agentic loops and autonomous agents — engineered, evaluated and shipped. Plus the web, mobile and data work that has to hold them up.",
    },
    services: {
        intro1:
            "We are a **software development company** committed to creating world-class digital products for startups and businesses around the world.",
        whatWeOffer: "What we offer",
        intro2:
            "We build **AI products** — RAG systems, agentic loops and autonomous agents — on top of the web, mobile and data engineering that has to carry them. One team for the model and for everything around it.",
        seeHow: "See how we build them",
        cards: {
            rag: {
                title: "AI Agents & RAG Systems",
                desc: "**Retrieval-augmented generation, agentic loops and autonomous agents** built to run in production, not just to demo well.\n\nThis includes **tool use, memory, guardrails, evals and observability**.",
            },
            custom: {
                title: "Custom Software Development",
                desc: "Developing bespoke **software solutions** tailored to the specific needs and requirements of a client.\n\nThis includes **web applications, desktop applications, and specialized business software**.",
            },
            mobile: {
                title: "Mobile App Development",
                desc: "Creating **mobile applications** that offer a seamless user experience.\n\nThis includes **native app development, cross-platform solutions, or progressive web apps (PWAs).**",
            },
            integration: {
                title: "Software Integration and API Development",
                desc: "Ensuring different **software systems work together seamlessly**.\n\nThis includes developing and implementing **APIs, middleware solutions, integrations**, as well as structured and non structured **databases**.",
            },
            data: {
                title: "Data Engineering Solutions",
                desc: "Refine your **raw data** into a potent tool for enriching **user experiences and generating critical insights**.\n\nThis includes **design and manage data pipelines and ETLs** tailored to your needs.",
            },
            ml: {
                title: "Machine Learning & Data Science",
                desc: "Leverage **state-of-the-art AI technologies** to transform your data into **actionable insights and intelligent solutions**.\n\nThis includes **machine learning models, predictive analytics, reinforcement learning, and data-driven automation**.",
            },
        },
    },
    portfolio: {
        title: "Portfolio",
        intro: "Discover some of the projects we worked on, from mobile apps to web platforms and APIs.",
        readCaseStudy: "Read the case study",
        demoda: {
            pills: ["mobile", "web", "api", "search", "staff augmentation"],
            description:
                "demoda is a marketplace for clothing and accessories that enables small brands, second-hand stores, fashion designers, and individuals to sell their products. It oversees the entire sales process, including access to information, communication between buyers and sellers, online payments, shipping, and order tracking.",
            testimonial:
                "As co-founder of demoda, I am extremely impressed with the work pdelabs did helping in the development of our marketplace. They solved technically challenging problems such as real time messaging, complex order state machines and much more. Their commitment to understanding our vision and their ability to translate it into a functional and user-friendly platform was remarkable.",
            author: "Nicolas Ferro, co-founder",
        },
        vamos: {
            pills: ["api", "mobile", "web"],
            description:
                "Vamos Juntos is a carpooling app designed to connect drivers and passengers for shared rides, promoting convenient and eco-friendly travel. The platform facilitates the entire process, from matching users based on their routes and schedules to providing in app messages with shared location.",
            testimonial:
                "I couldn't be happier with the outstanding job pdelabs did in developing our carpooling app. Their team was always available, responsive, and really understood what we wanted, the development process was really smooth and we always knew what to expect. I highly recommend them for any software development needs.",
            author: "Mario Guadalupe, founder",
        },
    },
    process: {
        sectionTitle: "How we work",
        the: "The",
        title: "Development Process",
        intro:
            "At Punta del Este Labs, we follow a meticulously crafted development process to ensure the success of your project. Each stage is crucial for ensuring that the final product is functional, scalable, and user-friendly. Our process is designed to take your project from an initial idea through to a fully operational application, within weeks.",
        steps: {
            discovery: {
                title: "Discovery",
                desc: "We turn your visionary ideas into precise, actionable plans. This step is designed to thoroughly **understand your idea and gather detailed functional requirements.**\n\nThrough in-depth discussions, we ensure all perspectives are considered, translating your needs into **clear documentation**. Our technical experts assess feasibility, identifying **potential challenges.**",
            },
            design: {
                title: "Design",
                desc: "Now let's transform functional requirements into visually stunning and **user-friendly interfaces.** This step focuses on creating an engaging and intuitive experience for your users.\n\nOur design iterates over **wireframes and prototypes**, allowing us to visualize the layout and flow of the product.",
            },
            architecture: {
                title: "Software Architecture",
                desc: "We ensure that the final product excels not only in functionality but also in **scalability, long-term maintainability and cost efficiency**.\n\nWe guarantee that your app is **designed and structured** to accommodate future growth and evolving needs.",
            },
            development: {
                title: "Development",
                desc: "Here is where the fun begins! Our team of engineers works diligently to **bring your product to life**.\n\nBy following industry best practices and leveraging the latest technologies, we ensure that your app is not only functional but also **high-performing, secure, and scalable**.",
            },
            testing: {
                title: "Testing",
                desc: "Ensuring the quality and reliability of your application through **comprehensive testing plans**.\n\nOur QA experts conduct various types of testing, including **functional, integration, performance, and user acceptance testing**, to identify and address any issues that may arise in production.",
            },
            deployment: {
                title: "Release & Deployment",
                desc: "Our team manages the deployment process, from **setting up servers**, configuring all necessary systems to deploying to the **app stores** if needed.\n\nWe monitor the launch closely to address any issues promptly, ensuring **minimal downtime**. With our support, your product is delivered to the market efficiently and effectively.",
            },
        },
    },
    contact: {
        heading1: "We love to take on new challenges,",
        heading2: "tell us yours.",
        whatsapp: "Message us on WhatsApp",
        takeOffline: "Or\nif you prefer taking it offline, write us\nvia email",
        form: {
            fullName: "Full Name",
            namePlaceholder: "Your name",
            email: "Your company email",
            emailPlaceholder: "user@companyemail.com",
            project: "Tell us about your project",
            projectPlaceholder: "What do you want to accomplish?",
            within24: "We will get back to you in less than **24 hs.**",
            send: "Send",
            loading: "Loading",
        },
        toast: {
            sentTitle: "Email sent!",
            sentDesc: "We will get back to you in less than 24hs",
            errorTitle: "There was an error sending email",
        },
    },
    footer: {
        createTogether: "Let's create together,",
        colBrand: "Punta del Este labs",
        colMedia: "Media",
        colInfo: "Info",
        links: {
            home: "Home",
            services: "Services",
            ai: "AI Agents & RAG",
            work: "Work",
            demodaCase: "demoda case study",
            vamosCase: "Vamos Juntos case study",
            process: "Development Process",
            blog: "Blog",
            contact: "Contact",
        },
        tagline: "Your trusted partner for software solutions.",
        rights: "All rights reserved.",
    },
};

const es: Messages = {
    nav: { services: "Servicios", ai: "IA", portfolio: "Portafolio", blog: "Blog", contact: "Contacto" },
    buttons: { scheduleCall: "Agendá una llamada", scheduleCallShort: "Agendá una llamada" },
    home: {
        titleLead: "Construimos agentes de IA que llegan a",
        titleEmphasis: "producción.",
        subtitle:
            "Sistemas RAG, loops agénticos y agentes autónomos — diseñados, evaluados y puestos en producción. Además del trabajo web, mobile y de datos que los sostiene.",
    },
    services: {
        intro1:
            "Somos una **empresa de desarrollo de software** comprometida con crear productos digitales de clase mundial para startups y empresas de todo el mundo.",
        whatWeOffer: "Qué ofrecemos",
        intro2:
            "Construimos **productos de IA** — sistemas RAG, loops agénticos y agentes autónomos — sobre la ingeniería web, mobile y de datos que debe sostenerlos. Un solo equipo para el modelo y para todo lo que lo rodea.",
        seeHow: "Mirá cómo los construimos",
        cards: {
            rag: {
                title: "Agentes de IA y Sistemas RAG",
                desc: "**Generación aumentada por recuperación (RAG), loops agénticos y agentes autónomos** creados para funcionar en producción, no solo para lucir en una demo.\n\nEsto incluye **uso de herramientas, memoria, guardrails, evaluaciones y observabilidad**.",
            },
            custom: {
                title: "Desarrollo de Software a Medida",
                desc: "Desarrollamos **soluciones de software** a medida, adaptadas a las necesidades y los requisitos específicos de cada cliente.\n\nEsto incluye **aplicaciones web, aplicaciones de escritorio y software empresarial especializado**.",
            },
            mobile: {
                title: "Desarrollo de Apps Móviles",
                desc: "Creamos **aplicaciones móviles** que ofrecen una experiencia de usuario fluida.\n\nEsto incluye **desarrollo nativo, soluciones multiplataforma o aplicaciones web progresivas (PWAs).**",
            },
            integration: {
                title: "Integración de Software y Desarrollo de APIs",
                desc: "Logramos que distintos **sistemas de software trabajen juntos sin fricciones**.\n\nEsto incluye desarrollar e implementar **APIs, soluciones de middleware e integraciones**, además de **bases de datos** estructuradas y no estructuradas.",
            },
            data: {
                title: "Soluciones de Ingeniería de Datos",
                desc: "Convertimos tus **datos en bruto** en una herramienta potente para enriquecer la **experiencia de usuario y generar información crítica**.\n\nEsto incluye **diseñar y gestionar pipelines de datos y ETLs** a la medida de tus necesidades.",
            },
            ml: {
                title: "Machine Learning y Ciencia de Datos",
                desc: "Aprovechá **tecnologías de IA de vanguardia** para transformar tus datos en **información accionable y soluciones inteligentes**.\n\nEsto incluye **modelos de machine learning, analítica predictiva, aprendizaje por refuerzo y automatización basada en datos**.",
            },
        },
    },
    portfolio: {
        title: "Portafolio",
        intro: "Conocé algunos de los proyectos en los que trabajamos, desde apps móviles hasta plataformas web y APIs.",
        readCaseStudy: "Leé el caso de estudio",
        demoda: {
            pills: ["mobile", "web", "api", "búsqueda", "ampliación de equipo"],
            description:
                "demoda es un marketplace de ropa y accesorios que permite a pequeñas marcas, tiendas de segunda mano, diseñadores de moda y particulares vender sus productos. Gestiona todo el proceso de venta, incluyendo el acceso a la información, la comunicación entre compradores y vendedores, los pagos en línea, el envío y el seguimiento de pedidos.",
            testimonial:
                "Como cofundador de demoda, estoy sumamente impresionado con el trabajo de pdelabs ayudando en el desarrollo de nuestro marketplace. Resolvieron problemas técnicamente desafiantes como la mensajería en tiempo real, complejas máquinas de estados de pedidos y mucho más. Su compromiso por entender nuestra visión y su capacidad para traducirla en una plataforma funcional y fácil de usar fue notable.",
            author: "Nicolás Ferro, cofundador",
        },
        vamos: {
            pills: ["api", "mobile", "web"],
            description:
                "Vamos Juntos es una app de carpooling diseñada para conectar conductores y pasajeros para viajes compartidos, promoviendo una movilidad cómoda y ecológica. La plataforma facilita todo el proceso, desde emparejar usuarios según sus rutas y horarios hasta ofrecer mensajería en la app con ubicación compartida.",
            testimonial:
                "No podría estar más contento con el excelente trabajo que hizo pdelabs desarrollando nuestra app de carpooling. Su equipo siempre estuvo disponible, atento y entendió realmente lo que queríamos; el proceso de desarrollo fue muy fluido y siempre supimos qué esperar. Los recomiendo totalmente para cualquier necesidad de desarrollo de software.",
            author: "Mario Guadalupe, fundador",
        },
    },
    process: {
        sectionTitle: "Cómo trabajamos",
        the: "El",
        title: "Proceso de Desarrollo",
        intro:
            "En Punta del Este Labs seguimos un proceso de desarrollo cuidadosamente diseñado para asegurar el éxito de tu proyecto. Cada etapa es clave para que el producto final sea funcional, escalable y fácil de usar. Nuestro proceso está pensado para llevar tu proyecto desde una idea inicial hasta una aplicación totalmente operativa, en semanas.",
        steps: {
            discovery: {
                title: "Descubrimiento",
                desc: "Convertimos tus ideas visionarias en planes precisos y accionables. Esta etapa está diseñada para **entender a fondo tu idea y relevar requisitos funcionales detallados.**\n\nA través de conversaciones profundas nos aseguramos de contemplar todas las perspectivas, traduciendo tus necesidades en **documentación clara**. Nuestros expertos técnicos evalúan la viabilidad e identifican **posibles desafíos.**",
            },
            design: {
                title: "Diseño",
                desc: "Ahora transformamos los requisitos funcionales en **interfaces visualmente atractivas y fáciles de usar.** Esta etapa se centra en crear una experiencia envolvente e intuitiva para tus usuarios.\n\nNuestro diseño itera sobre **wireframes y prototipos**, lo que nos permite visualizar la disposición y el flujo del producto.",
            },
            architecture: {
                title: "Arquitectura de Software",
                desc: "Nos aseguramos de que el producto final se destaque no solo por su funcionalidad, sino también por su **escalabilidad, mantenibilidad a largo plazo y eficiencia de costos**.\n\nGarantizamos que tu app esté **diseñada y estructurada** para acompañar el crecimiento futuro y las necesidades cambiantes.",
            },
            development: {
                title: "Desarrollo",
                desc: "¡Acá empieza la diversión! Nuestro equipo de ingenieros trabaja con dedicación para **darle vida a tu producto**.\n\nSiguiendo las mejores prácticas de la industria y aprovechando las últimas tecnologías, nos aseguramos de que tu app no solo sea funcional, sino también **de alto rendimiento, segura y escalable**.",
            },
            testing: {
                title: "Testing",
                desc: "Aseguramos la calidad y la confiabilidad de tu aplicación mediante **planes de testing exhaustivos**.\n\nNuestros expertos en QA realizan distintos tipos de pruebas, incluyendo **testing funcional, de integración, de rendimiento y de aceptación del usuario**, para identificar y resolver cualquier problema que pueda surgir en producción.",
            },
            deployment: {
                title: "Lanzamiento y Despliegue",
                desc: "Nuestro equipo gestiona el proceso de despliegue, desde **configurar los servidores** y todos los sistemas necesarios hasta publicar en las **tiendas de apps** si hace falta.\n\nMonitoreamos el lanzamiento de cerca para resolver cualquier problema al instante, asegurando **mínimo tiempo de inactividad**. Con nuestro soporte, tu producto llega al mercado de forma eficiente y efectiva.",
            },
        },
    },
    contact: {
        heading1: "Nos encanta asumir nuevos desafíos,",
        heading2: "contanos el tuyo.",
        whatsapp: "Escribinos por WhatsApp",
        takeOffline: "O\nsi preferís hacerlo por otro medio, escribinos\npor email",
        form: {
            fullName: "Nombre completo",
            namePlaceholder: "Tu nombre",
            email: "Tu email corporativo",
            emailPlaceholder: "usuario@tuempresa.com",
            project: "Contanos sobre tu proyecto",
            projectPlaceholder: "¿Qué querés lograr?",
            within24: "Te respondemos en menos de **24 hs.**",
            send: "Enviar",
            loading: "Enviando",
        },
        toast: {
            sentTitle: "¡Email enviado!",
            sentDesc: "Te respondemos en menos de 24 hs",
            errorTitle: "Hubo un error al enviar el email",
        },
    },
    footer: {
        createTogether: "Creemos algo juntos,",
        colBrand: "Punta del Este labs",
        colMedia: "Redes",
        colInfo: "Info",
        links: {
            home: "Inicio",
            services: "Servicios",
            ai: "Agentes de IA y RAG",
            work: "Proyectos",
            demodaCase: "caso de estudio demoda",
            vamosCase: "caso de estudio Vamos Juntos",
            process: "Proceso de Desarrollo",
            blog: "Blog",
            contact: "Contacto",
        },
        tagline: "Tu socio de confianza para soluciones de software.",
        rights: "Todos los derechos reservados.",
    },
};

const pt: Messages = {
    nav: { services: "Serviços", ai: "IA", portfolio: "Portfólio", blog: "Blog", contact: "Contato" },
    buttons: { scheduleCall: "Agende uma call", scheduleCallShort: "Agende uma call" },
    home: {
        titleLead: "Construímos agentes de IA que chegam à",
        titleEmphasis: "produção.",
        subtitle:
            "Sistemas RAG, loops agênticos e agentes autônomos — projetados, avaliados e colocados em produção. Além do trabalho de web, mobile e dados que os sustenta.",
    },
    services: {
        intro1:
            "Somos uma **empresa de desenvolvimento de software** comprometida em criar produtos digitais de classe mundial para startups e empresas do mundo todo.",
        whatWeOffer: "O que oferecemos",
        intro2:
            "Construímos **produtos de IA** — sistemas RAG, loops agênticos e agentes autônomos — sobre a engenharia de web, mobile e dados que precisa sustentá-los. Um único time para o modelo e para tudo ao redor dele.",
        seeHow: "Veja como os construímos",
        cards: {
            rag: {
                title: "Agentes de IA e Sistemas RAG",
                desc: "**Geração aumentada por recuperação (RAG), loops agênticos e agentes autônomos** feitos para rodar em produção, não apenas para impressionar numa demo.\n\nIsso inclui **uso de ferramentas, memória, guardrails, avaliações e observabilidade**.",
            },
            custom: {
                title: "Desenvolvimento de Software Sob Medida",
                desc: "Desenvolvemos **soluções de software** sob medida, adaptadas às necessidades e aos requisitos específicos de cada cliente.\n\nIsso inclui **aplicações web, aplicações desktop e software empresarial especializado**.",
            },
            mobile: {
                title: "Desenvolvimento de Apps Mobile",
                desc: "Criamos **aplicações mobile** que oferecem uma experiência de usuário fluida.\n\nIsso inclui **desenvolvimento nativo, soluções multiplataforma ou progressive web apps (PWAs).**",
            },
            integration: {
                title: "Integração de Software e Desenvolvimento de APIs",
                desc: "Fazemos diferentes **sistemas de software trabalharem juntos sem atritos**.\n\nIsso inclui desenvolver e implementar **APIs, soluções de middleware e integrações**, além de **bancos de dados** estruturados e não estruturados.",
            },
            data: {
                title: "Soluções de Engenharia de Dados",
                desc: "Transformamos seus **dados brutos** em uma ferramenta poderosa para enriquecer a **experiência do usuário e gerar insights críticos**.\n\nIsso inclui **projetar e gerenciar pipelines de dados e ETLs** sob medida para suas necessidades.",
            },
            ml: {
                title: "Machine Learning e Ciência de Dados",
                desc: "Aproveite **tecnologias de IA de ponta** para transformar seus dados em **insights acionáveis e soluções inteligentes**.\n\nIsso inclui **modelos de machine learning, análise preditiva, aprendizado por reforço e automação orientada a dados**.",
            },
        },
    },
    portfolio: {
        title: "Portfólio",
        intro: "Conheça alguns dos projetos em que trabalhamos, de apps mobile a plataformas web e APIs.",
        readCaseStudy: "Leia o estudo de caso",
        demoda: {
            pills: ["mobile", "web", "api", "busca", "ampliação de equipe"],
            description:
                "demoda é um marketplace de roupas e acessórios que permite a pequenas marcas, brechós, estilistas e pessoas físicas venderem seus produtos. Ele cuida de todo o processo de venda, incluindo o acesso à informação, a comunicação entre compradores e vendedores, os pagamentos online, o envio e o acompanhamento dos pedidos.",
            testimonial:
                "Como cofundador da demoda, estou extremamente impressionado com o trabalho da pdelabs ajudando no desenvolvimento do nosso marketplace. Eles resolveram problemas tecnicamente desafiadores como mensageria em tempo real, máquinas de estado de pedidos complexas e muito mais. O comprometimento em entender nossa visão e a capacidade de traduzi-la em uma plataforma funcional e fácil de usar foram notáveis.",
            author: "Nicolas Ferro, cofundador",
        },
        vamos: {
            pills: ["api", "mobile", "web"],
            description:
                "Vamos Juntos é um app de carona compartilhada feito para conectar motoristas e passageiros em viagens compartilhadas, promovendo uma mobilidade prática e ecológica. A plataforma facilita todo o processo, desde combinar usuários por suas rotas e horários até oferecer mensagens no app com localização compartilhada.",
            testimonial:
                "Eu não poderia estar mais feliz com o excelente trabalho que a pdelabs fez no desenvolvimento do nosso app de carona. O time esteve sempre disponível, atento e entendeu de verdade o que queríamos; o processo de desenvolvimento foi muito tranquilo e sempre soubemos o que esperar. Recomendo fortemente para qualquer necessidade de desenvolvimento de software.",
            author: "Mario Guadalupe, fundador",
        },
    },
    process: {
        sectionTitle: "Como trabalhamos",
        the: "O",
        title: "Processo de Desenvolvimento",
        intro:
            "Na Punta del Este Labs, seguimos um processo de desenvolvimento cuidadosamente elaborado para garantir o sucesso do seu projeto. Cada etapa é essencial para que o produto final seja funcional, escalável e fácil de usar. Nosso processo foi pensado para levar seu projeto de uma ideia inicial a uma aplicação totalmente operacional, em semanas.",
        steps: {
            discovery: {
                title: "Descoberta",
                desc: "Transformamos suas ideias visionárias em planos precisos e acionáveis. Esta etapa foi feita para **entender a fundo sua ideia e levantar requisitos funcionais detalhados.**\n\nPor meio de conversas aprofundadas, garantimos que todas as perspectivas sejam consideradas, traduzindo suas necessidades em **documentação clara**. Nossos especialistas técnicos avaliam a viabilidade e identificam **possíveis desafios.**",
            },
            design: {
                title: "Design",
                desc: "Agora transformamos os requisitos funcionais em **interfaces visualmente incríveis e fáceis de usar.** Esta etapa foca em criar uma experiência envolvente e intuitiva para seus usuários.\n\nNosso design itera sobre **wireframes e protótipos**, o que nos permite visualizar o layout e o fluxo do produto.",
            },
            architecture: {
                title: "Arquitetura de Software",
                desc: "Garantimos que o produto final se destaque não só pela funcionalidade, mas também pela **escalabilidade, manutenibilidade a longo prazo e eficiência de custos**.\n\nAsseguramos que seu app seja **projetado e estruturado** para acompanhar o crescimento futuro e as necessidades em evolução.",
            },
            development: {
                title: "Desenvolvimento",
                desc: "Aqui é onde a diversão começa! Nosso time de engenheiros trabalha com dedicação para **dar vida ao seu produto**.\n\nSeguindo as melhores práticas do mercado e usando as tecnologias mais recentes, garantimos que seu app seja não só funcional, mas também **de alta performance, seguro e escalável**.",
            },
            testing: {
                title: "Testes",
                desc: "Garantimos a qualidade e a confiabilidade da sua aplicação por meio de **planos de teste abrangentes**.\n\nNossos especialistas em QA realizam diversos tipos de teste, incluindo **testes funcionais, de integração, de performance e de aceitação do usuário**, para identificar e resolver qualquer problema que possa surgir em produção.",
            },
            deployment: {
                title: "Lançamento e Deploy",
                desc: "Nosso time gerencia o processo de deploy, desde **configurar os servidores** e todos os sistemas necessários até publicar nas **lojas de apps** quando preciso.\n\nAcompanhamos o lançamento de perto para resolver qualquer problema rapidamente, garantindo **mínimo tempo de indisponibilidade**. Com nosso suporte, seu produto chega ao mercado de forma eficiente e eficaz.",
            },
        },
    },
    contact: {
        heading1: "Adoramos abraçar novos desafios,",
        heading2: "conte o seu pra gente.",
        whatsapp: "Fale com a gente no WhatsApp",
        takeOffline: "Ou\nse preferir de outro jeito, escreva pra gente\npor email",
        form: {
            fullName: "Nome completo",
            namePlaceholder: "Seu nome",
            email: "Seu email corporativo",
            emailPlaceholder: "usuario@suaempresa.com",
            project: "Conte sobre seu projeto",
            projectPlaceholder: "O que você quer alcançar?",
            within24: "Respondemos em menos de **24 h.**",
            send: "Enviar",
            loading: "Enviando",
        },
        toast: {
            sentTitle: "Email enviado!",
            sentDesc: "Respondemos em menos de 24h",
            errorTitle: "Ocorreu um erro ao enviar o email",
        },
    },
    footer: {
        createTogether: "Vamos criar algo juntos,",
        colBrand: "Punta del Este labs",
        colMedia: "Redes",
        colInfo: "Info",
        links: {
            home: "Início",
            services: "Serviços",
            ai: "Agentes de IA e RAG",
            work: "Projetos",
            demodaCase: "estudo de caso demoda",
            vamosCase: "estudo de caso Vamos Juntos",
            process: "Processo de Desenvolvimento",
            blog: "Blog",
            contact: "Contato",
        },
        tagline: "Seu parceiro de confiança para soluções de software.",
        rights: "Todos os direitos reservados.",
    },
};

export const MESSAGES: Record<Locale, Messages> = {
    en: { ...en, ...PAGE_MESSAGES.en },
    es: { ...es, ...PAGE_MESSAGES.es },
    pt: { ...pt, ...PAGE_MESSAGES.pt },
};
