export interface Project {
  id: string
  title: string
  description: string
  images: string[]
  features: string[]
}

export interface Testimonial {
  id: string
  content: string
  author: {
    name: string
    avatar?: string
  }
  rating: number
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface FormData {
  name?: string
  email?: string
  phone?: string
  projectType: string
  appointmentTime: string
  hasPlans: "yes" | "no"
  hasDesignPackage: "yes" | "no"
  message?: string
}
