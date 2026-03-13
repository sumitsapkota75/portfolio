export const profile = {
  name: "Sumit Sapkota",
  title: "Senior Full Stack Java Developer",
  location: "Dallas, Texas",
  email: "ersumit.sap@gmail.com",
  phone: "+1 (972) 338-4953",
  linkedin: "https://www.linkedin.com/in/sumit-sapkota-636b0319b/",
  github: "https://github.com/sumitsapkota75",
  resume: "/Sumit_Sapkota_Resume.pdf",
};

export const hero = {
  eyebrow: "Senior Full Stack Engineer | 7+ years",
  headline:
    "Designing scalable backend systems, APIs, and cloud-native products for enterprise platforms.",
  summary:
    "Backend-first full stack engineer specializing in Java, Spring Boot, distributed systems, cloud infrastructure, and production-grade delivery across React, Angular, and Next.js applications.",
  primaryCta: { href: "#projects", label: "View Projects" },
  secondaryCta: { href: "#contact", label: "Contact" },
  trustPoints: [
    "Java 8-21, Spring Boot, microservices, GraphQL, Kafka",
    "AWS, Docker, Kubernetes, Terraform, CI/CD",
    "React, Angular, Next.js, TypeScript, secure frontend delivery",
  ],
  highlights: [
    { label: "Experience", value: "7+ years building production systems" },
    { label: "Current Focus", value: "Cloud-native platforms and distributed services" },
    { label: "Strength", value: "Backend architecture with full-stack execution" },
  ],
};

export const summary = {
  title: "Professional Summary",
  intro:
    "Results-driven Full Stack Java Developer with 7+ years of experience delivering scalable, secure, and cloud-native applications across the full SDLC. Proven expertise in Java 8-21, Spring Boot, microservices, REST APIs, Graphql, Kafka, and AWS, with a strong focus on performance, reliability, and clean architecture. Adept at building event-driven systems, automating infrastructure with Terraform, and deploying resilient solutions using Docker and Kubernetes. Experienced in modern front-end development with Angular and React, seamlessly integrating UI and backend services. A collaborative Agile practitioner who consistently delivers high-quality, business-impacting solutions.",
};

export const expertise = [
  {
    title: "Backend Architecture",
    description:
      "Designing Spring Boot services, modular APIs, service boundaries, and production-grade backend workflows.",
    points: [
      "Java 8-21, Spring Boot, Spring Cloud, WebFlux",
      "REST APIs, GraphQL, security, validation, contracts",
      "Distributed systems, resilience, and service reliability",
    ],
  },
  {
    title: "Cloud and Platform Delivery",
    description:
      "Shipping systems that are containerized, observable, and repeatable across environments.",
    points: [
      "AWS, Azure, and GCP deployment experience",
      "Docker, Kubernetes, Helm, Terraform, CI/CD pipelines",
      "Monitoring, logging, and production support ownership",
    ],
  },
  {
    title: "Data and Event Processing",
    description:
      "Building systems that handle asynchronous processing, data pipelines, and durable persistence.",
    points: [
      "Kafka, SQS, ActiveMQ, Azure Service Bus",
      "Spring Batch, ETL workflows, large-file processing",
      "Oracle, PostgreSQL, MySQL, MongoDB, DynamoDB",
    ],
  },
  {
    title: "Full-Stack Execution",
    description:
      "Delivering user-facing features without losing backend rigor or system thinking.",
    points: [
      "React, Angular, Next.js, TypeScript, RxJS",
      "Frontend integration with secure APIs and role-based access",
      "Performance, maintainability, and production-ready UX",
    ],
  },
];

export const projects = [
  {
    name: "Enterprise Payments and Data Platform",
    role: "Senior Full Stack Java Developer",
    problem:
      "Business-critical payment workflows needed secure APIs, resilient messaging, and reliable data processing across distributed services.",
    solution:
      "Built Java 21 and Spring Boot microservices with GraphQL and REST endpoints, Kafka-driven async flows, Spring Batch pipelines, and AWS-integrated processing for high-volume enterprise use cases.",
    impact:
      "Improved throughput, simplified integration patterns, and strengthened operational visibility through CloudWatch, Splunk, Grafana, and structured deployment pipelines.",
    ownership:
      "Owned backend service delivery, security implementation, CI/CD integration, Kubernetes deployments, and full-stack feature work in Angular and Next.js.",
    tech: ["Java 21", "Spring Boot", "GraphQL", "Kafka", "AWS", "Kubernetes"],
  },
  {
    name: "Cloud-Native Workforce Modernization",
    role: "Software Engineer",
    problem:
      "Legacy application flows were difficult to scale and slow to release, limiting product evolution and operational confidence.",
    solution:
      "Decomposed monolithic workflows into Spring Boot services, introduced service discovery and resilience patterns, and delivered React and Next.js interfaces with secure backend integration.",
    impact:
      "Reduced deployment friction, improved system availability, and created a cleaner path for ongoing feature delivery on GKE with Terraform and Helm.",
    ownership:
      "Led end-to-end feature implementation across APIs, frontend integration, containerization, infrastructure automation, and release workflows.",
    tech: ["Java 11", "Spring Cloud", "React", "Next.js", "GKE", "Terraform"],
  },
  {
    name: "Banking Transaction and Reconciliation Services",
    role: "Full Stack Java Developer",
    problem:
      "Financial transaction processing required secure APIs, strong data integrity, and reliable asynchronous workflows in a regulated environment.",
    solution:
      "Built Spring Boot services, batch processing jobs, Azure-hosted integrations, and Kafka plus Service Bus messaging to support transaction handling, reconciliation, and background processing.",
    impact:
      "Improved operational resilience, reduced API load through better data access patterns, and strengthened observability through Azure Monitor and Application Insights.",
    ownership:
      "Delivered backend APIs, batch jobs, deployment automation, cloud infrastructure, and frontend-facing integration support for production systems.",
    tech: ["Spring Boot", "Kafka", "Azure", "Spring Batch", "React", "Jenkins"],
  },
];

export const experiences = [
  {
    company: "Mastercard",
    role: "Senior Full Stack Java Developer",
    location: "St. Louis, MO",
    period: "Feb 2024 - Present",
    summary:
      "Building cloud-native services, APIs, and data workflows for enterprise-scale payment and platform systems.",
    highlights: ["Java 21", "Spring Boot", "Kafka", "AWS", "Angular 16", "Kubernetes"],
    bullets: [
      "Delivered Spring Boot microservices and API workflows supporting business-critical enterprise capabilities.",
      "Architected REST and GraphQL services with OAuth2, JWT, and Spring Security controls.",
      "Implemented Kafka, ActiveMQ, and AWS SQS messaging for high-throughput asynchronous processing.",
      "Designed Spring Batch pipelines and Python data workflows for large-file and analytics processing.",
      "Deployed containerized services through Jenkins and Kubernetes with automated build and release pipelines.",
      "Built Angular 16 and Next.js frontend features integrated with secure backend services.",
      "Improved reliability and operational visibility with Splunk, Grafana, Kibana, and CloudWatch.",
      "Contributed through architecture discussions, code reviews, Agile delivery, and production support.",
    ],
  },
  {
    company: "Scala Inc.",
    role: "Software Engineer",
    location: "Kathmandu, Nepal",
    period: "Jan 2021 - Dec 2023",
    summary:
      "Modernized application platforms into cloud-native services with strong backend architecture and pragmatic full-stack delivery.",
    highlights: ["Java 11", "Spring Cloud", "React", "Next.js", "GKE", "Terraform"],
    bullets: [
      "Built end-to-end features using Java, Spring Boot, React, and Next.js across backend and UI layers.",
      "Engineered versioned APIs with validation, exception handling, and secure integration patterns.",
      "Introduced microservices, service discovery, configuration management, and resilience patterns.",
      "Implemented Kafka and Pub/Sub integrations for asynchronous workflows and distributed processing.",
      "Provisioned and deployed workloads on GKE using Docker, Helm, and Terraform.",
      "Optimized frontend architecture with Redux, Context API, and predictable client-server communication.",
      "Strengthened observability, automated testing, and CI/CD-driven release quality.",
      "Supported production systems with monitoring and operational debugging in Agile teams.",
    ],
  },
  {
    company: "Uptechsys",
    role: "Full Stack Java Developer",
    location: "Kathmandu, Nepal",
    period: "Jun 2019 - Dec 2020",
    summary:
      "Delivered secure backend services and transaction-focused integrations for financial workflows running in Azure.",
    highlights: ["Spring Boot", "Kafka", "Azure", "React", "Spring Batch", "Terraform"],
    bullets: [
      "Built secure Spring Boot microservices and REST APIs for real-time transaction processing.",
      "Implemented Kafka, Azure Service Bus, and batch workflows for reconciliation and background operations.",
      "Developed Azure-hosted services with Functions, App Services, AKS, and infrastructure automation.",
      "Improved API reliability and data integrity across Azure SQL, Blob Storage, and backend processing jobs.",
      "Supported React-based frontend integrations and API contract stability for product teams.",
      "Automated deployments with Jenkins, Docker, and Terraform across application environments.",
      "Strengthened monitoring and issue response using Azure Monitor, Application Insights, and performance testing.",
      "Contributed through testing, release support, and Agile delivery practices.",
    ],
  },
];

export const stackGroups = [
  {
    title: "Backend",
    items: [
      "Java 8-21",
      "Spring Boot",
      "Spring Security",
      "Spring Cloud",
      "WebFlux",
      "Hibernate / JPA",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "RxJS",
      "Redux",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Cloud and DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Helm",
      "Maven",
      "Gradle",
    ],
  },
  {
    title: "Data and Messaging",
    items: [
      "Kafka",
      "SQS",
      "RabbitMQ",
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
    ],
  },
];

export const engineeringFocus = [
  {
    title: "Architecture Ownership",
    text:
      "I focus on service boundaries, API contracts, reliability, and implementation choices that stay maintainable as systems and teams grow.",
  },
  {
    title: "Operational Discipline",
    text:
      "Delivery does not stop at merge. I design for monitoring, alerting, performance, CI/CD, rollback safety, and production support.",
  },
  {
    title: "Security and Resilience",
    text:
      "I work with OAuth2, JWT, RBAC, secure API patterns, and failure-aware distributed workflows rather than treating security as an afterthought.",
  },
  {
    title: "Full-Stack Pragmatism",
    text:
      "I can ship UI and product-facing features where needed, but I bias toward backend depth, integration quality, and system-level outcomes.",
  },
];
