export interface SideProjectItem {
  id: number
  iconName: "Coins" | "Activity"
  liveUrl: string
  repoUrl: string
  technologies: string[]
}

export const sideProjectsData: SideProjectItem[] = [
  {
    id: 1,
    iconName: "Coins",
    liveUrl: "https://acomo.vercel.app",
    repoUrl: "https://github.com/rafaarraez/acomo",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA"],
  },
  {
    id: 2,
    iconName: "Activity",
    liveUrl: "https://sismos-venezuela.vercel.app",
    repoUrl: "https://github.com/rafaarraez/sismos-venezuela",
    technologies: ["Next.js", "React", "TypeScript", "Leaflet", "Recharts"],
  },
]
