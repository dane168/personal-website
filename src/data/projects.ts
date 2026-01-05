export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  longDescription?: string
  status: 'live' | 'in-development' | 'concept'
  category: 'personal' | 'work'
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
    category: 'personal',
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
    id: 'enterprise-data-platform',
    title: 'Enterprise Data Platform',
    tagline: 'Historical data pipelines and reporting infrastructure',
    description: 'Large-scale data platform handling ingestion, transformation, and visualisation of enterprise metrics across multiple source systems.',
    longDescription: `Designed and maintained a comprehensive data platform supporting business-critical reporting and analytics. The system consolidates data from various sources into a centralised SQL Server data warehouse.

The platform handles batch processing on schedules ranging from 4-hourly to daily refreshes, ensuring stakeholders have access to timely, accurate metrics.

Key responsibilities included:
- Architecting data ingestion from databases and flat files
- Building transformation logic using modern tooling
- Creating and maintaining executive dashboards
- Ensuring data quality and pipeline reliability`,
    status: 'live',
    category: 'work',
    techStack: ['Python', 'Pandas', 'DuckDB', 'dbt', 'SQL Server', 'Tableau'],
    features: [
      'Multi-source data ingestion',
      'Scheduled batch processing',
      'SQL-based transformations with dbt',
      'Executive reporting dashboards',
      'Data quality monitoring',
      'Historical trend analysis'
    ],
    gradient: 'from-blue-500 to-cyan-600',
    icon: '🗄️'
  },
  {
    id: 'internal-tooling-platform',
    title: 'Internal Tooling Platform',
    tagline: 'Full-stack application for team operations',
    description: 'End-to-end internal web application built to streamline team workflows, featuring asynchronous task processing and custom integrations.',
    longDescription: `Led the full lifecycle development of an internal tooling platform, from initial requirements gathering through to production deployment and ongoing maintenance.

The application serves as a central hub for team operations, handling everything from automated notifications to scheduled task management.

Key aspects of the project:
- Full ownership from planning to deployment
- Custom frontend built to team requirements
- Asynchronous job processing via message queue
- On-premise hosting with infrastructure design
- Integration with existing enterprise systems`,
    status: 'live',
    category: 'work',
    techStack: ['Django', 'Python', 'Kafka', 'JavaScript', 'HTML/CSS', 'PostgreSQL'],
    features: [
      'Custom web interface',
      'Asynchronous task processing',
      'Message queue integration',
      'Automated notifications',
      'On-premise deployment',
      'Enterprise system integrations'
    ],
    gradient: 'from-orange-500 to-red-600',
    icon: '⚙️'
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
    category: 'personal',
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
