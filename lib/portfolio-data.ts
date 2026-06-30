import {
  Smartphone,
  Server,
  Database,
  Cloud,
  Radio,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Marco Pagnanini",
  role: "Full-Stack Developer",
  tagline:
    "Costruisco sistemi reali in produzione — dal mobile al backend distribuito fino all'infrastruttura self-hosted.",
  bio: "Full-stack developer con esperienza pratica su sistemi reali in produzione — non solo tutorial o progetti didattici. Spazio da mobile (React Native/Expo) a backend distribuito (.NET, Spring Boot, Python) fino a infrastruttura self-hosted (Docker, Traefik, Kubernetes). Attualmente approfondisco system design avanzato, architetture a microservizi e AI engineering, con uno studio strutturato basato su letteratura di riferimento e applicazione diretta sui miei progetti.",
  bioExtra:
    "In parallelo, laurea triennale in Informatica con tesi su computer vision applicata all'accessibilità urbana — rilevamento automatico di rampe e barriere architettoniche tramite deep learning.",
  github: "https://github.com/Marco-Pagnanini",
  githubHandle: "github.com/Marco-Pagnanini",
  email: "marco.pagnanini2004@gmail.com",
};

export const stats = [
  { value: "3", label: "Progetti production-ready" },
  { value: "6", label: "Linguaggi & runtime" },
  { value: "20+", label: "Tecnologie nello stack" },
  { value: "∞", label: "Voglia di imparare" },
];

export type StackCategory = {
  title: string;
  icon: LucideIcon;
  accent: string; // tailwind text color class for the icon
  items: string[];
};

export const stack: StackCategory[] = [
  {
    title: "Frontend & Mobile",
    icon: Smartphone,
    accent: "text-sky-400",
    items: [
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "Drizzle ORM",
      "Design System custom",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "text-emerald-400",
    items: [
      "ASP.NET Core (.NET 8)",
      "Spring Boot (Java)",
      "Python · FastAPI",
      "Microservizi REST",
      "EF Core",
      "JPA / Hibernate",
    ],
  },
  {
    title: "Database & Data",
    icon: Database,
    accent: "text-amber-400",
    items: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "MinIO (S3)",
      "Trino · Hive Metastore",
      "Apache Superset",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    icon: Cloud,
    accent: "text-violet-400",
    items: [
      "Docker & Compose",
      "Traefik",
      "Kubernetes / k3s",
      "Terraform",
      "GitHub Actions",
      "Prometheus & Grafana",
    ],
  },
  {
    title: "Messaging & Eventi",
    icon: Radio,
    accent: "text-rose-400",
    items: ["Apache Kafka", "RabbitMQ", "Event Streaming", "Pub/Sub"],
  },
  {
    title: "AI & Data Engineering",
    icon: BrainCircuit,
    accent: "text-fuchsia-400",
    items: [
      "pgvector · embeddings",
      "Apache Airflow",
      "PyTorch · ConvNeXt",
      "GradCAM · transfer learning",
      "n8n · LLM automation",
    ],
  },
];

export type Tech = {
  name: string;
  logo: string; // path under /public
};

// Tech logos that float around the 3D robot in the hero.
export const orbitingTech: Tech[] = [
  { name: "React Native", logo: "/logos/react.svg" },
  { name: ".NET 8", logo: "/logos/dotnet.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.webp" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Kubernetes", logo: "/logos/kubernetes.webp" },
  { name: "Kafka", logo: "/logos/kafka.svg" },
  { name: "Redis", logo: "/logos/redis.svg" },
  { name: "FastAPI", logo: "/logos/fastapi.svg" },
  { name: "Traefik", logo: "/logos/traefik.svg" },
  { name: "PyTorch", logo: "/logos/pytorch.svg" },
  { name: "Terraform", logo: "/logos/terraform.webp" },
  { name: "Spring Boot", logo: "/logos/springboot.svg" },
  { name: "Expo", logo: "/logos/expo.svg" },
];

export type GraphNode = { id: string; label: string; x: number; y: number };
export type GraphEdge = { from: string; to: string };
export type ProjectGraph = {
  title: string;
  nodes: GraphNode[];
  edges: GraphEdge[];
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  year: string;
  status: string;
  categories: string[];
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  specs: { k: string; v: string }[];
  graph: ProjectGraph;
  link?: string;
  accent: string; // gradient classes used on the home cards
  color: string; // hex accent used by the animated graph
  gradient: string; // tailwind gradient classes for the themed heading
};

export const projects: Project[] = [
  {
    slug: "cigarclub",
    index: "01",
    name: "CigarClub",
    year: "2025",
    status: "production",
    categories: ["social", "e-commerce", "microservices"],
    tagline: "Piattaforma social & e-commerce — microservizi production-ready",
    description:
      "Piattaforma per appassionati di sigari costruita come sistema a microservizi indipendenti e deployati separatamente: app mobile, admin desktop, backend distribuito e deploy automatizzato su VPS.",
    highlights: [
      "App mobile React Native (Expo): feed social, catalogo, recensioni",
      "Admin panel desktop in Tauri",
      "Microservizi .NET 8 + EF Core (Posts, Users, Catalog) e Moderator Service in Python/FastAPI",
      "Un PostgreSQL dedicato per microservizio, media su MinIO",
      "Deploy su Hetzner con Docker Compose, Traefik (SSL automatico) e CI/CD GitHub Actions",
      "Observability con Prometheus & Grafana",
    ],
    tags: [
      "React Native",
      "Expo",
      "Tauri",
      ".NET 8",
      "EF Core",
      "FastAPI",
      "PostgreSQL",
      "MinIO",
      "Docker",
      "Traefik",
      "Prometheus",
    ],
    specs: [
      { k: "services", v: "6 · .NET 8 + FastAPI" },
      { k: "clients", v: "React Native (Expo) · Tauri admin" },
      { k: "database", v: "PostgreSQL per service" },
      { k: "storage", v: "MinIO (S3-compatible)" },
      { k: "infra", v: "Hetzner · Docker · Traefik" },
      { k: "ci/cd", v: "GitHub Actions → main" },
      { k: "observ.", v: "Prometheus · Grafana" },
    ],
    graph: {
      title: "services.graph",
      nodes: [
        { id: "gateway", label: "Gateway", x: 12, y: 50 },
        { id: "posts", label: "Posts", x: 45, y: 18 },
        { id: "users", label: "Users", x: 66, y: 34 },
        { id: "catalog", label: "Catalog", x: 66, y: 70 },
        { id: "moderator", label: "Moderator", x: 40, y: 88 },
      ],
      edges: [
        { from: "gateway", to: "posts" },
        { from: "gateway", to: "users" },
        { from: "gateway", to: "catalog" },
        { from: "gateway", to: "moderator" },
      ],
    },
    link: "https://github.com/Marco-Pagnanini/CigarClubApp",
    accent: "from-amber-500/20 to-orange-500/5",
    color: "#f59e0b",
    gradient: "from-amber-200 via-amber-400 to-orange-500",
  },
  {
    slug: "repay",
    index: "02",
    name: "Repay",
    year: "2025",
    status: "active",
    categories: ["mobile", "CQRS", "offline-first"],
    tagline: "Subscription tracker — architettura CQRS, offline-first",
    description:
      "App mobile per il tracking di abbonamenti ricorrenti, progettata come esercizio applicato di architettura CQRS con persistenza locale offline-first.",
    highlights: [
      "React Native + Expo Router",
      "Persistenza offline-first con Expo SQLite e Drizzle ORM",
      "Architettura CQRS: write model (log eventi) separato dal read model (proiezioni)",
      "Rinnovo automatico abbonamenti con calcolo retroattivo delle transazioni",
      "UI dark custom ispirata a Revolut/Notion, animazioni native",
    ],
    tags: ["React Native", "Expo", "SQLite", "Drizzle", "CQRS"],
    specs: [
      { k: "platform", v: "React Native · Expo Router" },
      { k: "storage", v: "Expo SQLite · Drizzle ORM" },
      { k: "pattern", v: "CQRS · event log + projections" },
      { k: "offline", v: "offline-first, sync locale" },
      { k: "ui", v: "dark theme custom, animazioni native" },
    ],
    graph: {
      title: "cqrs.flow",
      nodes: [
        { id: "ui", label: "UI", x: 10, y: 50 },
        { id: "command", label: "Command", x: 36, y: 18 },
        { id: "events", label: "Event Log", x: 62, y: 18 },
        { id: "proj", label: "Projection", x: 62, y: 82 },
        { id: "read", label: "Read Model", x: 88, y: 50 },
      ],
      edges: [
        { from: "ui", to: "command" },
        { from: "command", to: "events" },
        { from: "events", to: "proj" },
        { from: "proj", to: "read" },
        { from: "read", to: "ui" },
      ],
    },
    link: "https://github.com/Marco-Pagnanini/Repay",
    accent: "from-sky-500/20 to-indigo-500/5",
    color: "#38bdf8",
    gradient: "from-sky-200 via-sky-400 to-indigo-500",
  },
  {
    slug: "urban-ramp-detection",
    index: "03",
    name: "Urban Ramp Detection",
    year: "2025",
    status: "research",
    categories: ["computer vision", "deep learning", "lakehouse"],
    tagline: "Computer vision per rilevare rampe e barriere architettoniche",
    description:
      "Tesi di laurea: sistema di computer vision che identifica automaticamente rampe e barriere architettoniche da immagini stradali, con pipeline dati strutturata come Data Lakehouse.",
    highlights: [
      "Training e confronto di ResNet-50, EfficientNet-B4 e ConvNeXt-S con transfer learning",
      "Spiegabilità via GradCAM per validare le feature geometriche riconosciute",
      "Analisi del domain gap tra dataset USA e immagini italiane reali",
      "Data Lakehouse Bronze/Silver/Gold su MinIO, orchestrato con Airflow",
      "Query analitiche con Trino, dashboard con Superset, feedback loop per il retraining",
    ],
    tags: [
      "PyTorch",
      "ConvNeXt",
      "ResNet-50",
      "EfficientNet",
      "GradCAM",
      "Airflow",
      "Trino",
      "MinIO",
      "Superset",
    ],
    specs: [
      { k: "models", v: "ResNet-50 · EfficientNet-B4 · ConvNeXt-S" },
      { k: "explain", v: "GradCAM" },
      { k: "lakehouse", v: "Bronze / Silver / Gold su MinIO" },
      { k: "orchestr.", v: "Apache Airflow" },
      { k: "analytics", v: "Trino · Superset" },
      { k: "loop", v: "validazione Silver → retraining" },
    ],
    graph: {
      title: "lakehouse.pipeline",
      nodes: [
        { id: "imgs", label: "Street Imgs", x: 10, y: 50 },
        { id: "bronze", label: "Bronze", x: 34, y: 22 },
        { id: "silver", label: "Silver", x: 56, y: 55 },
        { id: "gold", label: "Gold", x: 80, y: 24 },
        { id: "model", label: "CNN Model", x: 84, y: 80 },
      ],
      edges: [
        { from: "imgs", to: "bronze" },
        { from: "bronze", to: "silver" },
        { from: "silver", to: "gold" },
        { from: "gold", to: "model" },
        { from: "model", to: "silver" },
      ],
    },
    accent: "from-fuchsia-500/20 to-purple-500/5",
    color: "#d946ef",
    gradient: "from-fuchsia-200 via-fuchsia-400 to-purple-500",
  },
];

export type ArchitectureGroup = {
  title: string;
  items: string;
};

export const architecture: ArchitectureGroup[] = [
  {
    title: "Pattern architetturali",
    items:
      "CQRS, Event Sourcing, Saga (Choreography & Orchestration), Outbox, Circuit Breaker, Domain-Driven Design, Hexagonal Architecture, Clean Architecture, Layered Architecture",
  },
  {
    title: "Sistemi distribuiti",
    items:
      "CAP Theorem e trade-off di consistenza, replication sincrona/asincrona, sharding (range, hash, directory), consistent hashing, message queue ed event streaming",
  },
  {
    title: "Database internals",
    items:
      "MVCC, B-tree vs LSM-tree, Write-Ahead Log, query planning e ottimizzazione, scelta del database in base al pattern di accesso",
  },
  {
    title: "API design",
    items:
      "REST, gRPC (Protocol Buffers, streaming), GraphQL, API Gateway, Backend for Frontend (BFF)",
  },
  {
    title: "Caching",
    items:
      "Cache-aside, write-through, write-behind, read-through, gestione di cache stampede, cache penetration e invalidation strategy",
  },
];

export const growth = [
  "Lettura sistematica di Designing Data-Intensive Applications (Kleppmann)",
  "System design interview: URL shortener, rate limiter, social feed, payment system",
  "Algoritmi e strutture dati per colloqui tecnici",
  "AI Engineering: RAG, vector databases, agent architectures",
  "Platform engineering & SRE: Kubernetes avanzato, observability con OpenTelemetry",
];
