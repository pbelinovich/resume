export type Language = 'ru' | 'en'

export type TextLine = { kind: 'text'; text: string } | { kind: 'strong'; text: string }

export interface ITranslationKeys {
  // Navigation
  nav: {
    resume: string
    jtc: string
    recifra: string
    about: string
  }

  // Common
  common: {
    email: string
    github: string
    telegram: string
    techStack: string
    demo: string
    features: string
    description: string
    role: string
    achievements: string
    keySkills: string
    mainProjects: string
    workPeriod: string
    workPeriods: string
    education: string
    additionalInfo: string
    personalProjects: string
    workExperience: string
    contacts: string
    connection: string
    cryptoPro: string
    bitrix: string
  }

  // Resume page
  resume: {
    pageTitle: string
    name: string
    jobTitle: string
    professionalSummary: {
      title: string
      description: string
    }
    keySkills: {
      title: string
      frontend: string
      backendDatabases: string
      aiMachineLearning: string
      tools: string
    }
    workExperience: {
      title: string
      jtcSenior: {
        period: string
        periodShort: string
        position: string
        company: string
        location: string
        migration: {
          title: string
          description: string[]
        }
        frontend: {
          title: string
          description: string[]
        }
        integration: {
          title: string
          description: string[]
        }
      }
      jtcMiddle: {
        period: string
        periodShort: string
        position: string
        company: string
        location: string
        dbo: {
          title: string
          description: string[]
        }
      }
      recifra: {
        period: string
        periodShort: string
        position: string
        company: string
        location: string
        projects: {
          title: string
          description: string[]
        }
      }
    }
    personalProjects: {
      title: string
      smartCart: {
        description: string
        features: {
          title: string
          items: string[]
        }
      }
    }
    education: {
      title: string
      university: {
        period: string
        periodShort: string
        name: string
        degree: string
        achievements: string[]
      }
    }
    additionalInfo: {
      title: string
      preferences: {
        title: string
        description: string
      }
      interests: {
        title: string
        description: string
      }
      status: {
        title: string
        description: string
      }
    }
  }

  // About page
  about: {
    pageTitle: string
    paragraphs: TextLine[][]
    contactNote: string
  }

  // JTC page
  jtc: {
    pageTitle: string
    company: string
    workPeriods: {
      senior: {
        period: string
        periodShort: string
        position: string
      }
      middle: {
        period: string
        periodShort: string
        position: string
      }
    }
    codeless: {
      title: string
      migration: {
        title: string
        description: string
        problem: string
        solution: string
        completed: string[]
      }
      podSystem: {
        title: string
        description: string
        problem: string
        solution: string
        completed: string[]
      }
      sseSystem: {
        title: string
        description: string
        problem: string
        solution: string
        completed: string[]
      }
      mainPage: {
        title: string
        description: string
        problem: string
        solution: string
        completed: string[]
      }
      teamManagement: {
        title: string
        description: string
        problem: string
        solution: string
        completed: string[]
      }
      projectGroups: {
        title: string
        description: string
        problem: string
        solution: string
        completed: string[]
      }
      processOptimization: {
        title: string
        description: string
        problem: string
        solution: string
        completed: string[]
      }
      repositories: {
        title: string
        description: string
        problem: string
        solution: string
        completed: string[]
      }
      expressionEditor: {
        title: string
        description: string
        goal: string
        features: Array<{
          id: string
          title: string
        }>
        validation: {
          title: string
          items: string[]
        }
        domArchitecture: {
          title: string
          items: string[]
        }
        typing: {
          title: string
          items: string[]
        }
        optimization: {
          title: string
          items: string[]
        }
      }
      configComparison: {
        title: string
        description: string
        items: string[]
      }
      usagesSystem: {
        title: string
        description: string
        items: string[]
      }
      integrationSystem: {
        title: string
        description: string
        items: string[]
      }
      moduleSystem: {
        title: string
        description: string
        items: string[]
      }
    }
    otherProjects: {
      title: string
      reactNative: {
        title: string
        description: string
      }
      uiKit: {
        title: string
        items: string[]
      }
      documentation: {
        title: string
        description: string
        howItWorks: {
          title: string
          items: string[]
        }
      }
    }
    dboExperience: {
      title: string
      banking: {
        title: string
        description: string
        clients: string
        modules: {
          title: string
          items: string[]
        }
        features: {
          title: string
          items: string[]
        }
      }
      helper: {
        title: string
        description: string
        problem: string
        solution: string
        completed: string[]
      }
    }
    techExpertise: {
      title: string
      mainTech: {
        title: string
        frontend: string
        backend: string
        mobile: string
        databases: string
      }
      expertise: {
        title: string
        items: string[]
      }
      aiMl: {
        title: string
        items: string[]
      }
      apis: {
        title: string
        items: string[]
      }
    }
  }

  // 404 page
  notFound: {
    pageTitle: string
    title: string
    subtitle: string
    backButton: string
  }

  // Recifra page
  recifra: {
    pageTitle: string
    company: string
    workPeriod: {
      period: string
      position: string
    }
    mainProjects: {
      title: string
      hans: {
        title: string
        description: string
        goal: string
        functionality: string[]
        role: string[]
      }
      gosuslugi: {
        title: string
        description: string
        projectDescription: string
        functionality: string[]
        features: {
          title: string
          items: string[]
        }
      }
    }
    websites: {
      title: string
      description: string
      projects: {
        title: string
        government: string[]
        commercial: string[]
      }
      requirements: {
        title: string
        items: string[]
      }
      development: {
        title: string
        items: string[]
      }
    }
    techStack: {
      title: string
      mainTech: {
        title: string
        frontend: string[]
        cms: string[]
        mobile: string[]
        tools: string[]
      }
      expertise: {
        title: string
        items: string[]
      }
      achievements: {
        title: string
        items: string[]
      }
    }
    learning: {
      title: string
      period: {
        title: string
        description: string
        keySkills: {
          title: string
          technical: {
            title: string
            items: string[]
          }
          business: {
            title: string
            items: string[]
          }
        }
        impact: {
          title: string
          description: string
        }
      }
    }
  }

  // System messages
  system: {
    toggleTheme: {
      light: string
      dark: string
    }
    toggleLanguage: {
      en: string
      ru: string
    }
    downloadPdf: string
    goal: string
    features: string
    problem: string
    solution: string
    completed: string
    more: string
    projectGoal: string
    functionality: string
    projectDescription: string
    projects: string
    requirements: string
    development: string
    keySkills: string
    impact: string
    governmentPortals: string
    commercialProjects: string
    webProjectsTitle: string
  }
}
