// Centralized section IDs to keep stable anchors across languages
export const SectionId = {
  home: "home",
  projects: "projects",
  experience: "experience",
  skills: "skills",
  contact: "contact",
} as const

export type SectionKey = typeof SectionId[keyof typeof SectionId]
