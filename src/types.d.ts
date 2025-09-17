// Типы для данных резюме
export interface ContactInfo {
  name: string
  position: string
  telegram: string
  email: string
}

export interface AboutSection {
  description: string[]
  achievements: string[]
  mainStack: string
}

export interface Project {
  title: string
  description: string
  details?: {
    goal?: string
    features?: string[]
    stack?: string
  }
}

export interface WorkExperience {
  id: string
  period: string
  position: string
  company: string
  location: string
  projects: Project[]
  additionalProjects?: Project[]
}

export interface Education {
  id: string
  period: string
  institution: string
  degree: string
  location: string
  details?: string[]
}

export interface ResumeData {
  contact: ContactInfo
  about: AboutSection
  experience: WorkExperience[]
  education: Education[]
}

// Типы для Notion-блоков
export type BlockType = 'heading' | 'text' | 'list' | 'contact' | 'divider' | 'callout'

export interface NotionBlock {
  id: string
  type: BlockType
  content: any
  level?: number // для заголовков
}
