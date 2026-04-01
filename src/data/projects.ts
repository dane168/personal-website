export interface DesignSection {
  image: string
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  longDescription?: string
  designWalkthrough?: DesignSection[]
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
    id: 'switchopus',
    title: 'Switchopus',
    tagline: 'Smart home automation powered by Agile energy prices',
    description: 'A full-stack home automation platform that integrates with Octopus Energy\'s Agile tariffs to automatically run smart devices during the cheapest electricity periods. Built as a vibe coding experiment with Claude Code.',
    longDescription: `Switchopus was born out of genuine daily frustration. I use Tuya smart plugs to control radiators, a water heater, and other devices around my home — and I wanted them to run during the cheapest half-hours on my Octopus Energy Agile tariff. The problem? The default Tuya app's scheduling UI is painful. It schedules down to the second, has no concept of energy prices, and updating schedules across multiple devices meant spending around 5 minutes every single day tapping through a horrible mobile interface.

Switchopus fixes all of that. Instead of configuring each device individually, I can set up schedules for groups of devices in a matter of seconds, and the app is directly linked to live Octopus Agile pricing data so I can see exactly when electricity is cheapest.

The app integrates two key APIs. The Octopus Energy API provides half-hourly Agile tariff prices for all 14 UK electricity distribution regions — Switchopus fetches these and displays them in a color-coded chart so you can instantly see cheap vs expensive periods. The Tuya Cloud API connects to your smart home devices, allowing Switchopus to read device status and send on/off commands remotely. Any user can sign up via Google OAuth and input their own Tuya and Octopus credentials to use the platform with their own devices and tariff region.

This project was also an experiment in "vibe coding" — it was built almost entirely with Claude Code to test the boundaries of AI-assisted development. The experience highlighted both the strengths (rapid prototyping, consistent code structure, handling boilerplate) and the limitations (complex state management, nuanced UI decisions, debugging edge cases). The result is a genuinely useful tool that I use every day, built in a fraction of the time it would have taken to write from scratch.

Built as a monorepo with a React frontend, Express backend, and SQLite database — all containerized with Docker and deployed to an AWS t4g.nano instance via Terraform.`,
    status: 'live',
    category: 'personal',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Docker', 'Terraform', 'Claude Code'],
    features: [
      'Real-time Octopus Agile price display',
      'Tuya Cloud API device control',
      'Group scheduling in seconds',
      'Execution logging & history',
      'Google OAuth authentication',
      'Multi-user with personal credentials'
    ],
    designWalkthrough: [
      {
        image: '/dashboard.png',
        title: 'Dashboard & Live Pricing',
        description: 'The main dashboard pulls live data from the Octopus Energy API, showing the current Agile price (here 41.56p/kWh) and a color-coded bar chart of upcoming half-hourly prices. Green bars indicate cheap periods, amber is moderate, and red is expensive — giving you an instant visual of when to run your devices. The key statistics section and region selector (supporting all 14 UK distribution regions) sit at the top.'
      },
      {
        image: '/devices.png',
        title: 'Device Management',
        description: 'This is where the Tuya Cloud API integration comes in. Devices are imported directly from your Tuya account — smart plugs, switches, radiators, water heaters, and more. Each card shows the device name, type, ID, and a live on/off toggle. Compare this to the Tuya app where you\'d navigate through multiple screens per device — here everything is visible and controllable at a glance. You can also import devices from JSON or add them manually.'
      },
      {
        image: '/schedules.png',
        title: 'Schedule Configuration',
        description: 'This is the core feature that solved my daily frustration. Instead of the Tuya app\'s tedious per-device, down-to-the-second scheduling, Switchopus lets you create schedules for groups of devices with simple time slots. The "Daily Schedule Timeline" gives a visual overview of when each device is set to run, and the "Effective View" tab shows how schedules resolve across all devices. Setting up a full day\'s automation takes seconds, not minutes.'
      },
      {
        image: '/logs.png',
        title: 'Execution Logs',
        description: 'Every schedule execution is logged with full detail — which device was triggered, whether it succeeded or failed, and the exact timestamp. The summary at the top shows total executions (48 here), successes, and failures at a glance. This was important for building trust in the automation — I can verify that my water heater actually turned on at the scheduled time, and debug any issues with the Tuya API connection.'
      },
      {
        image: '/settings.png',
        title: 'Settings & API Credentials',
        description: 'Switchopus is designed for any user, not just me. The settings page lets you connect your own Tuya Cloud API credentials (Access ID, Access Secret, and region) with a "Test Connection" button to verify before saving. Once connected, you can import your devices directly from your Tuya spaces. Combined with Google OAuth for login, any Octopus Energy customer with Tuya devices can sign up and start using the platform with their own setup.'
      }
    ],
    links: {
      live: 'https://switchopus.com',
      github: 'https://github.com/dane168/octopus_api_controller'
    },
    gradient: 'from-emerald-500 to-teal-600',
    icon: '🐙'
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
]
