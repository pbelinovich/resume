import { ITranslationKeys } from '../types'
import { BIRTH_YEAR, START_YEAR } from './constants'

export const en: ITranslationKeys = {
  nav: {
    resume: 'resume',
    vglub: 'vglub',
    jtc: 'jtc',
    recifra: 'recifra',
    about: 'about me',
    smartCart: 'smart cart',
  },

  common: {
    email: 'Email',
    github: 'GitHub',
    telegram: 'Telegram',
    techStack: 'Tech Stack',
    demo: 'DEMO',
    features: 'Features',
    description: 'Description',
    role: 'Role in Project',
    achievements: 'Achievements',
    keySkills: 'Key Skills',
    mainProjects: 'Main Projects',
    workPeriod: 'Work Period',
    workPeriods: 'Work Periods',
    education: 'Education',
    additionalInfo: 'Additional Information',
    personalProjects: 'Personal Projects',
    workExperience: 'Work Experience',
    contacts: 'Contacts',
    connection: 'Contact',
    cryptoPro: 'CryptoPro',
    bitrix: '1C-Bitrix',
  },

  resume: {
    pageTitle: 'Resume - Pavel Belinovich',
    name: 'Pavel Belinovich',
    jobTitle: 'Senior Frontend / Fullstack Developer (React, TypeScript, Node.js)',

    professionalSummary: {
      title: 'Professional Summary',
      description: `Senior Frontend/Fullstack Developer with 10+ years of experience, including 7 years building digital banking and fintech solutions for top Russian banks (VTB, Gazprom Bank, UBRiR, Otkritie) with React, TypeScript, and Node.js. Since 2026 — founder and architect of the Vglub SaaS product: brought a platform with E2E encryption (152-FZ), real-time SSE, and AI features to pre-release using agentic AI development (Claude Code, Codex) under my own architecture and review. Previously — a low-code platform migration to RavenDB and a DOM-based code editor.`,
    },

    keySkills: {
      title: 'Key Skills',
      frontend: 'Frontend',
      backendDatabases: 'Backend & Databases',
      aiMachineLearning: 'AI & Machine Learning',
      tools: 'Tools',
    },

    workExperience: {
      title: 'Work Experience',
      vglub: {
        period: 'March 2026 – Present',
        periodShort: 'Mar 2026 – Present',
        position: 'Founder / Software Architect',
        company: 'Vglub (vglub.space)',
        location: 'Russia, Saint Petersburg',
        achievements: [
          'Founded Vglub, a SaaS product for psychologists and coaches — a workspace with session templates, clinical assessments, and an AI supervisor — and brought it to pre-release in partnership with a design studio owner',
          'Designed the architecture and single-handedly brought the product to production (~255k lines of TypeScript) through agentic AI development (Claude Code, Codex): formal specifications and ADRs as the contract for agents, mandatory review, typing, lint, and 600+ test files as the quality gate',
          'Designed true end-to-end encryption of client personal data in line with the Russian personal data law 152-FZ (Web Crypto: AES-GCM, PBKDF2, passkeys/WebAuthn) — the server never sees the data',
          'Designed an event-driven backend with CQRS and a real-time SSE layer: JSON-patch state diffs, LLM response streaming, automatic reconnect, background workers for AI analysis',
          'Integrated a multi-provider AI layer (DeepSeek, Cloud.ru, Yandex SpeechKit over gRPC) with fallback chains for provider outages, per-request cost accounting, and per-user budgets',
          'Set up infrastructure and zero-downtime CI/CD in Yandex Cloud: Docker, GitHub Actions with OIDC federation and no stored secrets, health-gated deploys, and cascade rollback',
        ],
      },
      jtcSenior: {
        period: 'October 2019 – August 2025',
        periodShort: 'Oct 2019 – Aug 2025',
        position: 'Senior Frontend Developer',
        company: 'JTC (JSC "JT Consulting")',
        location: 'Russia, Saint Petersburg',
        achievements: [
          'Designed and implemented CODELESS low-code platform data storage migration from file system to RavenDB, eliminating performance issues as projects scaled and enabling horizontal scaling',
          'Developed an automated isolated environment ("pod") creation system, replacing manual DevOps setup and reducing deployment time for new versions',
          'Built an innovative DOM-based code editor with real-time validation, autocompletion, and full typing — a key tool for accelerating project creation on the platform',
          'Migrated real-time communication from WebSocket to SSE, reducing server load by eliminating persistent bidirectional connections; implemented a typed API layer via Proxy',
          'Implemented a configuration comparison system in Web Workers, preventing main thread blocking when processing large data volumes',
          'Established code quality culture: Jest unit tests, custom documentation tool DNA (TypeDoc-based) with commit blocking on missing docs, video tutorials and regular demos for management',
          'Maintained and evolved the internal platform UI-KIT over several years, ensuring interface consistency and accelerating new module development',
          'Mentored CODELESS developers: assisted with onboarding, platform adaptation, and technical problem resolution',
        ],
      },
      jtcMiddle: {
        period: 'October 2018 – October 2019',
        periodShort: 'Oct 2018 – Oct 2019',
        position: 'Frontend Developer',
        company: 'JTC (JSC "JT Consulting")',
        location: 'Russia, Saint Petersburg',
        achievements: [
          'Developed account, statement, and payment order modules for major bank digital banking systems (VTB, Gazprom Bank, UBRiR, Absolut Bank, Otkritie), serving millions of clients',
          'Created a standard page generator for digital banking, unifying architecture and accelerating new module development by several times',
        ],
      },
      recifra: {
        period: 'August 2016 – September 2018',
        periodShort: 'Aug 2016 – Sep 2018',
        position: '1C-Bitrix Developer, Frontend Developer',
        company: 'Recifra (LLC "Yugra Internet Solutions")',
        location: 'Russia, Khanty-Mansiysk',
        achievements: [
          'Developed an order management IS for the regional HANS pizza chain (Dodo system analog): ordering, tracking, delivery',
          'Built a cross-platform KHMAO Gosuslugi mobile app for iOS/Android',
          'Created government portals for the Yugra Development Fund and Yugra Investment Portal',
        ],
      },
    },

    personalProjects: {
      title: 'Personal Projects',
      smartCart: {
        description: 'AI-powered Telegram bot for comparing grocery store prices and automatically building optimal shopping carts',
        features: {
          title: 'Features',
          items: [
            'Fine-tuned Mistral 7B (LoRA, Q4_K_M quantization) on a custom dataset of 1500+ records for parsing natural language into structured data',
            'Designed microservices architecture: independent backend service + Telegram bot, connected via REST API and SSE',
            'Integrated APIs of four retailers (Pyaterochka, Magnit, Dixi, Perekrestok) with automatic price comparison and optimal cart formation',
          ],
        },
      },
    },

    education: {
      title: 'Education',
      university: {
        period: 'September 2013 – June 2017',
        periodShort: 'Sep 2013 – Jun 2017',
        name: 'Yugra State University',
        degree: 'Bachelor, "Computer Science and Engineering"',
        achievements: ['KHMAO-Yugra Governor Scholar'],
      },
    },

    additionalInfo: {
      title: 'Additional Information',
      workFormat: {
        title: 'Work format:',
        description: 'Remote work, hybrid format, open to relocation. Experience working in distributed teams using Agile/Scrum',
      },
      interests: {
        title: 'Interests:',
        description: 'AI/ML, frontend application architecture, performance optimization',
      },
    },
  },

  about: {
    pageTitle: 'About Me',
    paragraphs: [
      [{ kind: 'strong', text: `Pavel Belinovich, ${new Date().getFullYear() - BIRTH_YEAR} years` }],
      [{ kind: 'strong', text: 'Saint Petersburg' }],

      [{ kind: 'text', text: 'Working on something complex, new, that no one has ever done before.' }],
      [
        { kind: 'strong', text: '«Problem solving»' },
        { kind: 'text', text: ' as life purpose.' },
      ],
      [{ kind: 'text', text: 'Especially enjoy when work results can be seen, touched, shown to friends.' }],
      [
        { kind: 'text', text: 'Currently building my own product ' },
        { kind: 'strong', text: 'Vglub' },
        { kind: 'text', text: ' — a workspace for psychologists with an AI supervisor (vglub.space).' },
      ],
      [
        {
          kind: 'text',
          text: 'Behind me are',
        },
        {
          kind: 'strong',
          text: ` ${new Date().getFullYear() - START_YEAR}+ years`,
        },
        {
          kind: 'text',
          text: ' of experience solving complex technical problems in fintech, enterprise system development, and AI/ML integrations.',
        },
      ],
    ],
    contactNote: "write me, maybe I'll reply 😄",
  },

  jtc: {
    pageTitle: 'JTC Work Experience',
    company: 'JSC "JT Consulting", Russia, Saint Petersburg',

    workPeriods: {
      senior: {
        period: 'October 2019 – August 2025',
        periodShort: 'Oct 2019 – Aug 2025',
        position: 'Senior Frontend Developer',
      },
      middle: {
        period: 'October 2018 – October 2019',
        periodShort: 'Oct 2018 – Oct 2019',
        position: 'Frontend Developer',
      },
    },

    codeless: {
      title: 'CODELESS CMS System',
      migration: {
        title: 'Migration from File System to RavenDB',
        description: 'Comprehensive architecture migration to solve performance and scalability issues.',
        problem:
          'Previous architecture stored project configs in JSON files, causing performance issues with large projects. Memory filled up quickly, read/write speed was suboptimal.',
        solution:
          'Together with technical director, decided to migrate to RavenDB (NoSQL with out-of-the-box transaction support). Participated in migration and backend rewrite from scratch.',
        completed: [
          'Complete migration from file system to RavenDB',
          'Backend architecture rewrite',
          'Transaction system implementation',
          'Performance and memory optimization',
          'Scalable architecture for large projects',
        ],
      },
      podSystem: {
        title: 'Automatic "Pod" Launch System',
        description: 'Automation of deployment and management of individual project instances.',
        problem:
          'DevOps manually configured servers for each project version and wrote nginx config rules. Process was slow and error-prone.',
        solution:
          'Developed automatic creation and launch system for separate child processes in Node.js with automatic port and proxy management.',
        completed: [
          'Automatic creation and launch of separate child processes in Node.js',
          'Each project version runs on separate server with unique port',
          'User gets link with port and sees real working application (config build)',
          'Developed proxy configuration system for each pod (redirection, header changes, HTTP/WS connections, timeouts, path replacement rules)',
        ],
      },
      sseSystem: {
        title: 'SSE Communicator',
        description: 'Typed client-server interaction system using Server-Sent Events.',
        problem: 'Need for transparent and typed API interaction between client and server with real-time update support.',
        solution: 'Created SSE communicator using Proxy class in Node.js to hide HTTP method addresses and provide full API typing.',
        completed: [
          'Technology: Server-Sent Events (SSE)',
          'Architecture: TypeScript typed HTTP methods (GET, POST, Channel)',
          'Feature: Using Proxy class in Node.js to hide HTTP method addresses',
          'Syntax: await protectedApiClient.user.GET.byId({ id: "123" })',
          'Benefits: Transparent client-server interaction with full typing',
        ],
      },
      mainPage: {
        title: 'Figma-style Main Page',
        description: 'Interactive main page with modern UX/UI for project management.',
        problem: 'Need to create modern and user-friendly CMS main page interface without involving a designer.',
        solution: 'Independent UX/UI solution development in Figma style with responsive design and interactive controls.',
        completed: [
          'Development without designer, independent UX/UI solution',
          'Responsive grid up to 1024px per requirements',
          'Projects as interactive cells',
          'Real-time search',
          'Sorting by alphabet, creation date, modification date',
        ],
      },
      teamManagement: {
        title: 'User Teams Implementation in Projects',
        description: 'Ability to add user teams to projects with flexible role model.',
        problem: 'When creating a project, users had to be added manually each time.',
        solution: 'Created "team" concept in system with recursive nesting capability and role override at project level.',
        completed: [
          'Teams can contain users and other teams (recursively)',
          'Role override at project level with change indication',
          'Complete design and implementation of role system',
        ],
      },
      projectGroups: {
        title: 'Project Groups Implementation',
        description: 'Hierarchical project organization system with navigation and URL routing.',
        problem: 'Too many projects on main page, making navigation and search difficult.',
        solution: 'Created recursive group nesting system with "drill-down" navigation and URL routing based on depth.',
        completed: ['Recursive group nesting', '"Drill-down" navigation', 'Breadcrumbs', 'URL routing based on depth'],
      },
      processOptimization: {
        title: 'Process Isolation Optimization',
        description: 'Moving heavy operations to separate child processes for performance optimization.',
        problem: 'Large config validation burdened main server process, slowing system responsiveness.',
        solution: 'Moving heavy operations to separate child processes using Node.js Child Processes.',
        completed: [
          'Moving project config validation to separate child process, called on demand',
          'Backend integration actuality check in separate child process, cron task',
          'Swagger metadata synchronization also in separate child process, cron task',
        ],
      },
      repositories: {
        title: 'Data Repository Creation',
        description: 'Universal system for working with RavenDB and memory data.',
        problem: 'Controversial aspects of working with RavenDB in Node.js required unified approach and abstraction over API complexity.',
        solution: 'Designed and created repositories with common interfaces and transaction system for unified data work.',
        completed: [
          'RavenDB repository (persistent data)',
          'Memory repository (operational data)',
          'Repository unification (common interface)',
          'Transaction system for memory repositories (supported out-of-the-box in RavenDB)',
        ],
      },
      expressionEditor: {
        title: 'CODELESS Expression Editor Development',
        description: 'Innovative code editor with DOM architecture and full typing.',
        goal: 'Create tool for writing pseudocode (JavaScript-like) that will later be interpreted to JavaScript and executed on client. Code writing is necessary when creating CODELESS projects. This tool should accelerate project creation process.',
        features: [
          {
            id: 'smart-suggestions',
            title: 'Smart suggestion generation when writing code',
          },
          {
            id: 'real-time-validation',
            title: 'Full real-time error validation',
          },
          {
            id: 'dom-elements',
            title: 'Using DOM elements instead of text representation',
          },
          {
            id: 'performance',
            title: 'Special attention to performance',
          },
          {
            id: 'typing-context',
            title: 'Full typing and context passing',
          },
          {
            id: 'responsive',
            title: 'Adaptivity for different screens',
          },
          {
            id: 'font-scaling',
            title: 'Font scaling',
          },
          {
            id: 'copy-paste',
            title: 'Full Copy/Cut/Paste operations support',
          },
        ],
        validation: {
          title: 'ERROR VALIDATION',
          items: [
            'Real-time syntax validation',
            'Highlighting erroneous code sections',
            'Detailed error messages',
            'Type and context checking',
          ],
        },
        domArchitecture: {
          title: 'DOM ARCHITECTURE',
          items: [
            'Complete rejection of text representation',
            'Each element is separate DOM element',
            'Interactive controls',
            'Complex focus management system',
          ],
        },
        typing: {
          title: 'TYPING',
          items: ['TypeScript typing at all levels', 'Automatic type detection', 'Context hints', 'Type compatibility checking'],
        },
        optimization: {
          title: 'OPTIMIZATION',
          items: [
            '"Only what\'s needed" rendering system',
            'Code element formatting calculation system (+ caching)',
            'Calculation memoization',
          ],
        },
      },
      configComparison: {
        title: 'Configuration Comparison System',
        description: 'Tool for comparing different versions of project configuration files',
        items: [
          'Real-time calculations (on user demand)',
          'String comparison algorithm (all projects can be represented as string data)',
          "Full Web Workers operation for optimization (doesn't block main thread)",
        ],
      },
      usagesSystem: {
        title: 'Usage Search Mechanism',
        description: 'Automatic calculation of all usage places for any project element',
        items: [
          'On-the-fly calculation each time on user demand',
          'Web Workers operation',
          'Fast navigation to any CODELESS application part',
          'Default page search replacement',
        ],
      },
      integrationSystem: {
        title: 'Project Integration System',
        description: 'Integration/updating projects from other CMS instances to avoid code duplication',
        items: ['Link system to prevent changes', 'Update-only capability', 'Conflict detection'],
      },
      moduleSystem: {
        title: 'Module Connection System',
        description: 'Connecting modules from any repositories without storing in common bundle',
        items: [
          'Support for various repositories (NPM, Nexus)',
          'Direct repository API requests',
          'Installation to server file system',
          'Using npm cli on server',
        ],
      },
    },

    otherProjects: {
      title: 'Other JTC Projects',
      reactNative: {
        title: 'React Native Module for PayControl',
        description: 'Seamless integration with PayControl software for document signing from mobile devices.',
      },
      uiKit: {
        title: 'UI-KIT Development and Support',
        items: ['Creating intra-platform components', 'Refactoring existing solutions', 'Library support and enhancement'],
      },
      documentation: {
        title: 'Code Documentation Tool',
        description: 'Process documentation automation with mandatory updates.',
        howItWorks: {
          title: 'How it works:',
          items: ['Forces documentation writing', 'CI checks actuality on code updates', 'Interrupts review and deploy if outdated'],
        },
      },
    },

    dboExperience: {
      title: 'Banking System Experience',
      banking: {
        title: 'Banking System Module Development',
        description: 'Comprehensive module development for corporate banking systems with high security and functionality requirements.',
        clients: 'Clients: VTB, Gazprom, Otkritie',
        modules: {
          title: 'IMPLEMENTED MODULES',
          items: [
            'Account module',
            'Statement module',
            'Payment order module',
            'Employee management module',
            'Bank card module',
            'Admin panel',
          ],
        },
        features: {
          title: 'TECHNICAL FEATURES',
          items: [
            'Complex forms with multiple validation (frontend + backend)',
            'Multi-step forms with intermediate saves',
            'Tables with large data volumes (scrollers)',
            'Modal windows and directories',
            'Backend error processing and beautiful display',
          ],
        },
      },
      helper: {
        title: 'Banking Page Builder Helper',
        description: 'Development automation tool for accelerating typical banking system page creation.',
        problem:
          'Banking system page development required much time due to repetitive patterns and lack of unified code style. Each page had to be written from scratch, slowing development process.',
        solution:
          'Created automatic generation tool for typical banking pages with unified patterns and code style. Tool allows quick creation of basic page structure with ready components.',
        completed: [
          'Automatic generation of typical banking pages',
          'Architecture and code style unification',
          'Ready templates for main components',
          'Development process acceleration by several times',
          'Error reduction through standardization',
        ],
      },
    },

    techExpertise: {
      title: 'Technology Stack and Expertise',
      mainTech: {
        title: 'Main Technologies',
        frontend: 'Frontend:',
        backend: 'Backend:',
        mobile: 'Mobile:',
        databases: 'Databases:',
      },
      expertise: {
        title: 'Expertise',
        items: [
          'Performance optimization (Web Workers, processes)',
          'State management systems',
          'Databases and repositories',
          'Transaction systems',
          'Responsive layout and cross-browser compatibility',
          'Cross-platform development (Web, Mobile)',
          'Visual coding and interactive development tools',
          'High-load enterprise applications',
        ],
      },
      aiMl: {
        title: 'AI/ML Technologies',
        items: ['Language model fine-tuning', 'Ollama', 'LoRA', 'Docker containerization', 'Process automation'],
      },
      apis: {
        title: 'APIs & Tools',
        items: ['REST, WebSocket, SSE', 'Telegram Bot API', 'Webpack', 'Web Workers'],
      },
    },
  },

  recifra: {
    pageTitle: 'Recifra Work Experience',
    company: 'LLC "Yugra Internet Solutions", Russia, KHMAO – Yugra, Khanty-Mansiysk',

    workPeriod: {
      period: 'August 2016 – September 2018',
      position: '1C-Bitrix Developer, Frontend Developer',
    },

    mainProjects: {
      title: 'Main Projects',
      hans: {
        title: 'HANS Regional Pizza Chain IS',
        description: 'Comprehensive information system for pizza chain management, analog of Dodo Pizza system.',
        goal: 'Create comprehensive information system for managing all regional pizza chain processes: from order taking to delivering finished products to customers.',
        functionality: [
          'Customer order reception and processing system',
          'Chef control panel with dish readiness tracking',
          'Courier module with delivery routing',
          'Administrative panel for managers',
          'Real-time order formation and tracking system',
          'Delivery logistics management system',
          'CRM and accounting system integration',
        ],
        role: [
          'User interface development for all system roles',
          '1C-Bitrix CMS integration for content management',
          'Adaptive and cross-browser solution creation',
          'Database and API integration work',
        ],
      },
      gosuslugi: {
        title: 'KHMAO Gosuslugi Mobile App',
        description: 'Regional government services mobile application for Khanty-Mansiysk Autonomous Okrug residents.',
        projectDescription:
          'Cross-platform mobile application development for providing government services to KHMAO residents. Application provided access to regional government services through convenient mobile interface.',
        functionality: [
          'Authorization through unified identification system',
          'Available government services catalog',
          'Application and document submission',
          'Appeal status tracking',
          'Document readiness notifications',
          'Regional information system integration',
        ],
        features: {
          title: 'Technical Features',
          items: [
            'Cross-platform development for iOS and Android',
            'Hybrid technology use for rapid development',
            'Adaptive UI with native look & feel',
            'Performance optimization for older devices',
            'Secure user data storage',
          ],
        },
      },
    },

    websites: {
      title: 'Website and Corporate Portal Development',
      description:
        'Website layout and development with focus on cross-browser compatibility, responsiveness, and modern web development standards.',
      projects: {
        title: 'Implemented Projects',
        government: ['Yugra Development Fund', 'Yugra Investment Portal', 'Yugra Tennis Federation'],
        commercial: [
          'YURESK Personal Cabinet',
          'Senior Tomato Regional Pizza Chain',
          'Multiple corporate websites',
          'E-commerce stores and catalogs',
        ],
      },
      requirements: {
        title: 'Technical Requirements',
        items: [
          'Cross-browser compatibility (including IE8+)',
          'Responsive layout for all device types',
          'Semantic HTML markup',
          'Loading speed optimization',
          '1C-Bitrix CMS integration',
          'Accessibility standards compliance',
        ],
      },
      development: {
        title: 'Development Features',
        items: [
          'Working with technical specifications from designers',
          'Complex layout implementation with pixel-perfect accuracy',
          'Creating interactive elements with jQuery',
          'Various API and service integration',
          'Search engine optimization',
        ],
      },
    },

    techStack: {
      title: 'Technology Stack and Gained Expertise',
      mainTech: {
        title: 'Main Technologies',
        frontend: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
        cms: ['1C-Bitrix', 'Backbone.js'],
        mobile: ['Cordova', 'Framework7'],
        tools: ['SASS/LESS', 'Bootstrap', 'Grunt/Gulp'],
      },
      expertise: {
        title: 'Gained Expertise',
        items: [
          'Responsive and cross-browser layout',
          '1C-Bitrix CMS work',
          'Hybrid mobile application development',
          'External API and service integration',
          'Technical specification work',
          'Pixel-perfect layout from mockups',
          'Team development in agency environment',
        ],
      },
      achievements: {
        title: 'Period Achievements',
        items: [
          'Professional web development mastery',
          'Regional-scale project work',
          'First mobile development experience',
          'Full web project cycle understanding',
          'Government client work',
          'Teamwork skill development',
        ],
      },
    },

    learning: {
      title: 'Learning and Professional Growth',
      period: {
        title: 'Developer Formation Period',
        description:
          'Work at Recifra became important stage of professional formation, where web development foundations were laid and first serious commercial experience was gained.',
        keySkills: {
          title: 'Key Skills',
          technical: {
            title: 'Technical Development:',
            items: [
              'Modern HTML5/CSS3 standards mastery',
              'In-depth JavaScript learning',
              'CSS preprocessor work',
              'Responsive design principles learning',
            ],
          },
          business: {
            title: 'Business Skills:',
            items: [
              'Understanding client needs',
              'Working under tight deadlines',
              'Quality control and testing',
              'Project documentation and support',
            ],
          },
        },
        impact: {
          title: 'Career Impact',
          description:
            'Recifra work experience laid solid foundation for further web development growth. Gained skills working with different project types - from government portals to commercial applications - formed understanding of different IT field specifics.',
        },
      },
    },
  },

  smartCart: {
    pageTitle: 'Smart Cart Bot',
    subtitle: 'AI-powered Telegram bot for automatic cart building in grocery stores',

    overview: {
      title: 'Project Overview',
      description:
        'Smart Cart Bot is an AI-powered Telegram bot for grocery price comparison. Currently, it is the only service capable of finding the cheapest or most popular product simply by user input, automatically comparing prices across multiple retailers and building optimal shopping carts.',
      goal: 'Create a completely free service that helps users find the cheapest groceries and build optimal shopping carts without manual price comparison across different stores.',
      features: [
        { id: 'ai-parsing', title: 'AI-powered natural language parsing into structured JSON data' },
        { id: 'price-comparison', title: 'Automatic price comparison across multiple retailers (Pyaterochka, Magnit, Dixi, Perekrestok)' },
        { id: 'optimal-carts', title: 'Intelligent cart formation with optimal price selection' },
        { id: 'product-replacement', title: 'Easy product replacement within assembled carts' },
        { id: 'city-support', title: 'Multi-city support with automatic price updates' },
        { id: 'impulse-free', title: 'Impulse buying prevention through focused interface' },
      ],
    },

    demo: {
      title: 'Functionality Demonstration',
      simpleFlow: {
        title: 'Basic Flow',
        description: 'Complete user journey from /start command to receiving optimized shopping carts with price comparison',
      },
      categoryFiltering: {
        title: 'Category Filtering',
        description: 'Smart understanding of product categories - bot can apply category filters to all products or to specific ones',
      },
      cityChange: {
        title: 'City Selection',
        description: 'Dynamic city switching with automatic price updates and retailer availability changes',
      },
      productReplacement: {
        title: 'Product Replacement',
        description: 'Easy product substitution within assembled carts with real-time price recalculation',
      },
    },

    architecture: {
      title: 'System Architecture',
      microservices: {
        title: 'Microservices Architecture',
        description:
          'The application is built using a microservices architecture with clear separation of concerns between data processing and user interaction layers',
        backend: {
          title: 'BACKEND SERVICE',
          description: 'Independent data processing service that can be connected to any platform (web, mobile, tg bot).',
          features: [
            'AI model integration and inference',
            'Retailer API integration and data processing',
            'Price comparison algorithms',
            'Database management and caching',
            'REST API for external integrations',
          ],
        },
        bot: {
          title: 'TELEGRAM BOT SERVICE',
          description: 'Lightweight service that acts as a communication layer between users and the backend.',
          features: [
            'Telegram Bot API integration',
            'User interaction management',
            'Message processing and validation',
            'Real-time status updates via SSE',
            'Error handling and user feedback',
          ],
        },
        communication: {
          title: 'SERVICE COMMUNICATION',
          description: 'Communication between services via REST API and Server-Sent Events (SSE) for instant status updates.',
          features: [
            'REST API for main operations',
            'SSE for cart building status tracking',
            'SSE for city change tracking',
            'Error status broadcasting',
            'User progress tracking',
            'Seamless service coordination',
          ],
        },
      },
    },

    aiMl: {
      title: 'AI/ML Implementation',
      modelTraining: {
        title: 'Model Fine-tuning',
        description: 'Custom fine-tuning of Mistral 7B model with specialized dataset for grocery product recognition and parsing',
        features: [
          'Generated 1500+ training records using GPT-4',
          'LoRA (Low-Rank Adaptation) for efficient fine-tuning',
          'FP16 precision for memory optimization',
          'Q4_K_M quantization for 12GB VRAM compatibility',
          'Specialized training for egg-related products recognition',
        ],
      },
      nlpProcessing: {
        title: 'Product List Parsing',
        description: 'Converting user messages into structured shopping data',
        features: [
          'Natural language to JSON parsing',
          'Product name extraction and normalization',
          'Quantity and unit recognition',
          'Price category classification',
        ],
      },
      optimization: {
        title: 'Performance Optimization',
        description: 'Multiple optimization techniques to ensure fast and efficient AI inference on consumer hardware',
        features: [
          'Model quantization for reduced memory usage',
          'FP16 precision for faster inference',
          'Ollama integration for local model serving',
          'Caching strategies for repeated queries',
          'Custom request queue implementation for model requests',
        ],
      },
    },

    techStack: {
      title: 'Technology Stack',
      backend: {
        title: 'Backend Technologies',
        server: 'Server:',
        database: 'Database:',
        communication: 'Communication:',
      },
      bot: {
        title: 'Bot Technologies',
        telegram: 'Telegram:',
        ai: 'AI/ML:',
        integrations: 'Integrations:',
      },
      development: {
        title: 'Development Tools',
        tools: ['Webpack', 'TypeScript', 'Docker', 'Git', 'NPM'],
      },
    },
  },

  vglub: {
    pageTitle: 'Vglub',
    subtitle: 'SaaS platform for psychologists and coaches: a workspace with session templates, clinical assessments, and an AI supervisor',

    overview: {
      title: 'Project Overview',
      description:
        'Vglub is a PWA where a psychologist manages clients and sessions, runs clinical assessments, gets AI analysis of their work, and dictates notes by voice. The idea and architecture are mine; the product is built together with a partner — a design studio owner responsible for design and communication. The product is at the pre-release stage.',
      goal: 'Build a modern workspace for practicing psychologists with privacy by construction: client personal data is encrypted on the device, and the server never has access to it.',
      features: [
        { id: 'clients', title: 'Client records with E2E encryption of personal data' },
        {
          id: 'sessions',
          title: 'Sessions with structured templates per therapeutic approach (Gestalt, CBT, Coaching) and freeform notes',
        },
        { id: 'tests', title: 'Clinical assessments with scoring, interpretation, and score-dynamics charts' },
        { id: 'ai-supervisor', title: "AI supervisor: background analysis of the client's recent sessions" },
        { id: 'ai-chat', title: 'AI chat with streaming responses scoped to a client or session' },
        { id: 'voice', title: 'Voice input into any field with multi-provider speech recognition' },
        { id: 'calendar', title: 'Custom calendar with drag-and-drop and overlap packing' },
        { id: 'search', title: 'Global Cmd+K search across clients, sessions, pages, and actions' },
      ],
    },

    role: {
      title: 'Role in Project',
      description:
        'Founder and architect. Not a single line of code written by hand — all code is produced by AI agents under my direction, and every line has passed my review.',
      items: [
        'Product decisions, prioritization, and roadmap',
        'Architecture design: 25+ specifications and ADRs in a linked knowledge base',
        'AI agent orchestration (Claude Code, Codex): task definition, review, quality control',
        'Infrastructure, CI/CD, and quality process setup (typing, lint, tests)',
      ],
    },

    aiDrivenDev: {
      title: 'AI-Driven Development',
      description: 'The product is practical proof that a single architect with AI agents can build a production-scale system.',
      items: [
        '~255,000 lines of TypeScript: ~1,000 frontend and ~1,000 backend files',
        '600+ test files (unit + Playwright E2E) run by a local CI harness',
        'Spec-first approach: every feature has a normative specification the code anchors back to',
        'Custom checks harness: incremental prettier/lint/typecheck on changed files, flaky-test quarantine',
      ],
    },

    architecture: {
      title: 'System Architecture',
      encryption: {
        title: 'E2E Encryption',
        description:
          "Client personal data is encrypted on the psychologist's device — the server only ever sees ciphertext. The approach covers the requirements of the Russian personal data law 152-FZ.",
        features: [
          'Client-side 256-bit master key: PBKDF2 (600k iterations) + AES-KW',
          'AES-GCM for personal data, extensible key-wrapping model',
          'Three unlock paths: password, device key in IndexedDB, passkey (WebAuthn PRF)',
          'Tab coordination via Web Locks and device-key self-healing',
        ],
      },
      realtime: {
        title: 'Real-Time over SSE',
        description: 'A unified server-sent events infrastructure for live UI updates and AI response streaming.',
        features: [
          'Single /events channel with typed, scoped events',
          'State diffs via JSON-patch',
          'Token-by-token AI chat streaming',
          'Three-signal auto-reconnect surviving backend restarts with no UI errors',
        ],
      },
      backend: {
        title: 'CQRS & Event-Driven Backend',
        description: 'Read/write separation per domain with an event bus and background workers.',
        features: [
          'Read/write operations across ~35 business domains',
          'Event bus: repository events fan out to SSE, analytics, and workers',
          'Background worker pool for AI analysis and email, startup task recovery',
          'AI cost accounting: unified micro-dollar unit, versioned prices, per-user budgets',
        ],
      },
      infra: {
        title: 'Infrastructure & CI/CD',
        description: 'Production in Yandex Cloud with zero-downtime deploys and no stored secrets.',
        features: [
          'Yandex Cloud: app + RavenDB on an isolated network, nginx edge, Cloudflare DNS',
          'Zero-downtime deploys: health-gated container swaps, cascade rollback',
          'GitHub Actions + OIDC federation for registry access without stored secrets',
          'Docker Compose, private Verdaccio npm registry, Telegram deploy notifications',
        ],
      },
    },

    aiFeatures: {
      title: 'Product AI Features',
      analysis: {
        title: 'AI Supervisor',
        description: "Background analysis of the psychologist's work with a client based on recent sessions.",
        features: [
          "Digest built from the client's last 5 sessions",
          'Background workers + live status via SSE',
          'Staleness detection when new data arrives',
        ],
      },
      chat: {
        title: 'AI Chat',
        description: 'Streaming assistant chat scoped to a specific client or session.',
        features: [
          'Token-by-token response streaming over SSE',
          'Topical guardrails: off-topic requests politely declined',
          'Model fallback chain when a provider is unavailable',
        ],
      },
      voice: {
        title: 'Voice Input',
        description: 'Note dictation into any field of the app with speech recognition.',
        features: [
          'Recordings from 0.5 to 180 seconds into any text field',
          'Multi-provider STT with fallback: Yandex SpeechKit (gRPC), Cloud.ru, OpenAI',
          'Server-side audio normalization via ffmpeg (16 kHz mono WAV)',
        ],
      },
    },

    screenshots: {
      title: 'Screenshots',
      items: [
        { id: 'home', title: 'Home: weekly overview and upcoming sessions' },
        { id: 'schedule', title: 'Schedule: session overlaps and conflicts' },
        { id: 'patients', title: 'Clients: a live list with meeting rhythm' },
        { id: 'patient-card', title: 'Client card: sessions and AI chat' },
        { id: 'session', title: 'Session card: CBT protocol and notes' },
        { id: 'settings', title: 'Settings: profile and AI usage' },
      ],
    },

    techStack: {
      title: 'Tech Stack',
      frontend: {
        title: 'Frontend',
        items: [
          'React 19',
          'TypeScript',
          'Vite',
          'TanStack Router',
          'Tailwind CSS v4',
          'Radix UI',
          'IndexedDB (Dexie)',
          'Web Crypto API',
          'PWA',
        ],
      },
      backend: {
        title: 'Backend',
        items: ['Node.js 24', 'Hono', 'RavenDB', 'Zod', 'JWT', 'S3', 'gRPC', 'node-cron', 'SSE'],
      },
      infra: {
        title: 'Infrastructure & Quality',
        items: ['Yandex Cloud', 'Docker', 'GitHub Actions', 'nginx', 'Cloudflare', 'Verdaccio', 'Playwright', 'Vitest'],
      },
    },
  },

  notFound: {
    pageTitle: '404 — Page Not Found',
    title: '404 — Page Not Found',
    subtitle: 'Seems like you got lost',
    backButton: 'Go to back',
  },

  system: {
    toggleTheme: {
      light: 'Switch to light theme',
      dark: 'Switch to dark theme',
    },
    toggleLanguage: {
      en: 'Switch to English',
      ru: 'Переключиться на русский',
    },
    downloadPdf: 'Download Resume PDF',
    goal: 'GOAL',
    features: 'FEATURES',
    problem: 'PROBLEM',
    solution: 'SOLUTION',
    completed: 'COMPLETED',
    more: 'MORE',
    projectGoal: 'PROJECT GOAL',
    functionality: 'FUNCTIONALITY',
    projectDescription: 'PROJECT DESCRIPTION',
    projects: 'PROJECTS',
    requirements: 'REQUIREMENTS',
    development: 'DEVELOPMENT',
    keySkills: 'KEY SKILLS',
    impact: 'CAREER IMPACT',
    governmentPortals: 'Government Portals:',
    commercialProjects: 'Commercial Projects:',
    webProjectsTitle: 'Web Projects of Various Scales',
    videoLoading: [
      'Calculating fonts...',
      'Loading content...',
      'Preparing interface...',
      'Processing data...',
      'Preparing page...',
      'Loading video...',
      'Loading sounds...',
      'Loading with all my might...',
    ],
  },
}
