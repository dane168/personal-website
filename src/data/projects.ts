export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  longDescription?: string
  status: 'live' | 'in-development' | 'concept'
  techStack: string[]
  features: string[]
  links?: {
    live?: string
    github?: string
    demo?: string
  }
  gradient: string
  icon: string
}

export const projects: Project[] = [
  {
    id: 'trade-pipeline',
    title: 'Real-Time Trade Pipeline',
    tagline: 'High-performance stock market streaming platform',
    description: 'A full end-to-end data pipeline ingesting the complete flow of U.S. stock-option trades in real time, with analytics dashboard and cloud-native deployment.',
    longDescription: `This project demonstrates expertise in building production-grade data infrastructure. The system ingests millions of trade events per day, processes them through a Kafka-based streaming pipeline, and persists data into an S3-backed data lake.

Key architectural decisions include:
- Event-driven architecture for real-time processing
- Terraform-managed infrastructure for reproducibility
- Containerized deployment on AWS ECS Fargate
- Comprehensive observability with Prometheus and Grafana`,
    status: 'live',
    techStack: ['Python', 'Kafka', 'FastAPI', 'React', 'AWS', 'Terraform', 'PostgreSQL', 'Docker'],
    features: [
      'Real-time streaming data ingestion',
      'S3-backed data lake architecture',
      'REST API for processed analytics',
      'Interactive React dashboard',
      'Infrastructure as Code with Terraform',
      'Prometheus & Grafana monitoring'
    ],
    gradient: 'from-violet-500 to-purple-600',
    icon: '📊'
  },
  {
    id: 'smart-home',
    title: 'Smart Home Controller',
    tagline: 'Unified IoT device management platform',
    description: 'A comprehensive smart home application bringing all IoT devices under one beautiful, intuitive interface. Currently in active design and development.',
    longDescription: `The vision for this project is to create a truly unified smart home experience. Rather than juggling multiple apps for different device ecosystems, this controller provides a single, elegant interface.

Design goals:
- Instant device control with haptic feedback
- Beautiful visualizations of home state
- Automation workflows with visual builder
- Voice control integration
- Energy monitoring and optimization`,
    status: 'in-development',
    techStack: ['React Native', 'TypeScript', 'Node.js', 'MQTT', 'PostgreSQL', 'Redis'],
    features: [
      'Unified device dashboard',
      'Room-based organization',
      'Automation scene builder',
      'Energy usage analytics',
      'Voice assistant integration',
      'Real-time device sync'
    ],
    gradient: 'from-emerald-500 to-teal-600',
    icon: '🏠'
  }
]
