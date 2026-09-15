export type ProjectCategory =
  | "Full-Stack"
  | "Backend"
  | "Desktop"
  | "Machine Learning"
  | "Embedded & Systems";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  highlight: string;
  tech: string[];
  github: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "customsx",
    title: "CustomsX",
    category: "Full-Stack",
    description:
      "Cross-platform Flutter app backed by a Node.js/Express/MongoDB API for customs clearance: declarations, duty/fee calculator, IMEI checks, document management, and shipment tracking.",
    highlight: "35+ screens, live exchange-rate integration, localized UI",
    tech: ["Flutter", "Dart", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ahmed171102/customsx",
  },
  {
    slug: "games-food-api",
    title: "GamesFoodApi",
    category: "Backend",
    description:
      "ASP.NET Core Web API managing Games and Food resources with a clean interface → service → controller architecture and interactive Swagger UI.",
    highlight: "Layered DI architecture, full OpenAPI docs",
    tech: ["C#", "ASP.NET Core", "Swagger"],
    github: "https://github.com/ahmed171102/aspnet-games-food-api",
  },
  {
    slug: "flyrank-task-api",
    title: "FlyRank Task API",
    category: "Backend",
    description:
      "In-memory REST CRUD API for managing tasks, with input validation, proper HTTP status codes, and an automated Node.js test suite.",
    highlight: "Full test coverage with node:test, Swagger docs at /docs",
    tech: ["Node.js", "Express", "Swagger"],
    github: "https://github.com/ahmed171102/flyrank-task-api",
  },
  {
    slug: "mkdocs-rag-api",
    title: "MkDocs RAG API",
    category: "Backend",
    description:
      "Retrieval-Augmented Generation service that answers natural-language questions about a documentation corpus using ChromaDB for retrieval and Google Gemini for generation.",
    highlight: "Chunk → embed → retrieve → answer pipeline over FastAPI",
    tech: ["Python", "FastAPI", "ChromaDB", "Gemini"],
    github: "https://github.com/ahmed171102/mkdocs-rag-api",
  },
  {
    slug: "disaster-relief-management",
    title: "Disaster Relief Management System",
    category: "Desktop",
    description:
      "WinForms + SQL Server desktop app for coordinating disaster-relief operations: shelters, resources, volunteers, disaster events, and relief requests.",
    highlight: "Found & fixed a SQL injection vulnerability during cleanup",
    tech: ["C#", "WinForms", "SQL Server", "ADO.NET"],
    github: "https://github.com/ahmed171102/disaster-relief-management",
  },
  {
    slug: "tcp-file-transfer",
    title: "TCP File Transfer",
    category: "Desktop",
    description:
      "Peer-to-peer file transfer tool built on raw TCP sockets — no cloud, no third-party service, just two machines and a direct connection.",
    highlight: "Real-time transfer progress and network interface selection",
    tech: ["C#", "WinForms", "Sockets"],
    github: "https://github.com/ahmed171102/tcp-file-transfer",
  },
  {
    slug: "course-management-cli",
    title: "Course Management CLI",
    category: "Desktop",
    description:
      "Console app demonstrating OOP fundamentals: role-based Admin/Instructor/Student menus, inheritance/polymorphism, and JSON-backed persistence.",
    highlight: "Student marks persist across runs via System.Text.Json",
    tech: ["C#", ".NET Framework"],
    github: "https://github.com/ahmed171102/course-management-cli",
  },
  {
    slug: "brain-tumor-brats2020",
    title: "Brain Tumor Segmentation (BraTS2020)",
    category: "Machine Learning",
    description:
      "3D U-Net segmentation on multi-modal MRI volumes (FLAIR/T1/T1ce/T2) with tumor volume estimation, severity classification, and generated PDF patient reports.",
    highlight: "Team capstone project with automated report generation",
    tech: ["Python", "TensorFlow", "3D U-Net", "nibabel"],
    github: "https://github.com/ahmed171102/brain-tumor-brats2020",
  },
  {
    slug: "cifar10-vgg16-attention",
    title: "CIFAR-10: VGG16 vs. Self-Attention",
    category: "Machine Learning",
    description:
      "Compares a baseline VGG16 transfer-learning classifier against the same backbone augmented with a custom self-attention block on CIFAR-10.",
    highlight: "Self-attention layer implemented from scratch",
    tech: ["Python", "TensorFlow", "Keras"],
    github: "https://github.com/ahmed171102/cifar10-vgg16-attention",
  },
  {
    slug: "seq2seq-spell-checker",
    title: "Seq2Seq Spell Checker",
    category: "Machine Learning",
    description:
      "Character-level encoder-decoder with attention and beam search decoding for context-aware spelling correction, served through a Flask web UI.",
    highlight: "Corrects misspellings never seen during training",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com/ahmed171102/seq2seq-spell-checker",
  },
  {
    slug: "pic-traffic-light",
    title: "PIC Traffic Light with Emergency Interrupt",
    category: "Embedded & Systems",
    description:
      "PIC16F877A firmware driving a traffic light sequence on LEDs and an LCD, with a hardware external interrupt for an emergency stop.",
    highlight: "Interrupt-driven design demoed on real hardware",
    tech: ["C", "mikroC", "PIC16F877A"],
    github: "https://github.com/ahmed171102/pic-traffic-light",
  },
  {
    slug: "xv6-riscv",
    title: "xv6-riscv",
    category: "Embedded & Systems",
    description:
      "Operating systems coursework built on MIT's xv6 — a small teaching Unix-like OS for RISC-V covering processes, virtual memory, and the file system.",
    highlight: "Studied kernel internals: syscalls, scheduling, paging",
    tech: ["C", "RISC-V", "QEMU"],
    github: "https://github.com/ahmed171102/xv6-riscv",
  },
];

export const eshara = {
  title: "Eshara — Bilingual Sign Language Recognition System",
  subtitle: "B.Sc. Graduation Project · AASTMT, Computer Engineering · July 2026",
  description:
    "A real-time, bilingual (American Sign Language + Arabic Sign Language) web platform that recognizes letters and words from a standard webcam and turns them into text and chat messages. Built as a three-tier system — React frontend, Node.js/Express application layer, FastAPI inference layer — powering four independently-trained deep learning models.",
  github: "https://github.com/ahmed171102/Eshara",
  models: [
    { name: "ASL Letters", arch: "MLP on hand landmarks", accuracy: "99.06%" },
    { name: "ArSL Letters", arch: "MLP on hand landmarks", accuracy: "99.63%" },
    { name: "ASL Words", arch: "Inception I3D (100 WLASL glosses)", accuracy: "65.89% Top-1" },
    { name: "ArSL Words", arch: "Stacked BiLSTM (100 KArSL classes)", accuracy: "99.62%" },
  ],
  features: [
    "Real-time recognition across 4 modes: ASL/ArSL × Letters/Words",
    "JWT-authenticated live chat where predictions become messages",
    "Education Module: sign viewer, sentence builder, guided practice with feedback",
    "Privacy-preserving inference — only compact landmark vectors leave the browser, not raw video",
  ],
};

export const categories: ProjectCategory[] = [
  "Full-Stack",
  "Backend",
  "Desktop",
  "Machine Learning",
  "Embedded & Systems",
];

export const categoryAccent: Record<ProjectCategory, string> = {
  "Full-Stack": "from-blue-500 to-cyan-400",
  Backend: "from-emerald-500 to-teal-400",
  Desktop: "from-orange-500 to-amber-400",
  "Machine Learning": "from-purple-500 to-pink-400",
  "Embedded & Systems": "from-slate-500 to-slate-400",
};
