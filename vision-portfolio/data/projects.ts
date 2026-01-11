export type Project = {
  id: number
  name: string
  description: string
  position: [number, number, number]
}

export const projects: Project[] = [
  {
    id: 1,
    name: "CRM System",
    description: "Multi-role consultancy CRM with CQRS",
    position: [-2, 0, -3]
  },
  {
    id: 2,
    name: "Hotel WiFi Portal",
    description: "Captive portal with session-based access",
    position: [2, 1, -4]
  },
  {
    id: 3,
    name: "Face Recognition",
    description: "Python-based recognition & logging system",
    position: [0, -1, -2]
  }
]
