import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "carbontrace-ai",
    title: "CarbonTrace AI — Scope 3 Emission Analytics",
    summary:
      "Open-source ML app that estimates embodied carbon for building portfolios with ~95% accuracy. Includes a 'what-if' retrofit simulator for carbon reduction scenarios.",
    year: "2025",
    role: "AI PM & developer",
    tags: ["Python", "scikit-learn", "Gradio", "Hugging Face", "Scope 3"],
    kind: "ai-pm",
    liveUrl: "https://huggingface.co/spaces/lugasraka/Scope3BuildingAnalytics",
    githubUrl: "https://github.com/lugasraka/SideProject-Scope3Analytics",
    body: "",
  },
  {
    slug: "sentinel-ai",
    title: "Sentinel AI — Predictive Maintenance",
    summary:
      "Anomaly-detection app for industrial equipment using One-Class SVM, Isolation Forest, and LOF. Full PRD, personas, FRs/NFRs, and risk register.",
    year: "2025",
    role: "AI PM & developer",
    tags: ["scikit-learn", "One-Class SVM", "Streamlit", "PRD"],
    kind: "ai-pm",
    liveUrl: "https://ai-predictive-maintenance-dashboard.streamlit.app/",
    githubUrl: "https://github.com/lugasraka/AI_PredictiveMaintenance_dashboard",
    body: "",
  },
  {
    slug: "comfortroom",
    title: "ComfortRoom — HVAC + Energy Optimization",
    summary:
      "AI layer over static HVAC setpoints. Digital-twin simulator, 'Smart Win-Win' optimization engine, and full carbon-footprint accounting for the AI itself.",
    year: "2025",
    role: "AI PM & developer",
    tags: ["TensorFlow", "PyTorch", "Plotly Dash", "Digital Twin"],
    kind: "ai-pm",
    liveUrl: "https://7a2b294d-8130-4503-8e04-d2e73333da12.plotly.app",
    githubUrl: "https://github.com/lugasraka/ComfortRoom-Dashboard",
    body: "",
  },
  {
    slug: "ecoprophet",
    title: "EcoProphet — Building Energy Prediction",
    summary:
      "Internal PRD and ML prototype for predicting building heating/cooling loads from geometric parameters. Linear Regression in TF/Keras, R² = 0.92 on the UCI Energy Efficiency dataset.",
    year: "2024",
    role: "AI PM & developer",
    tags: ["Python", "TensorFlow", "Keras", "Regression", "PRD"],
    kind: "ai-pm",
    liveUrl: "https://colab.research.google.com/drive/11vo-a-HKA-iGxGpu7WVnGBOGNfzwvEoD",
    body: "",
  },
  {
    slug: "sustainabit-navigator",
    title: "SustainaBit Navigator — IT Sustainability Checklist",
    summary:
      "Phase-based interactive checklist for IT project managers and sustainability leads. Built during the ClimateAction.tech hackathon at Google Zürich.",
    year: "2025",
    role: "Product lead",
    tags: ["Hackathon", "MVP", "Sustainability"],
    kind: "ai-pm",
    liveUrl: "https://lugasraka.github.io/ITsustainabilityChecklist/",
    githubUrl: "https://github.com/lugasraka/ITsustainabilityChecklist",
    body: "",
  },
  {
    slug: "eth-phd-mine-waste",
    title: "ETH PhD — Environmental Sustainability of Mine Waste Value Recovery",
    summary:
      "Four-year PhD on life-cycle assessment of mine tailings valorization. Led a 15-person cross-disciplinary team (ETN-SULTAN) building environmental impact models for novel materials from mining residue.",
    year: "2019 — 2022",
    role: "PhD researcher & project manager",
    tags: ["LCA", "Industrial Ecology", "Circular Materials"],
    kind: "research",
    body: "",
  },
  {
    slug: "world-bank-ccus",
    title: "Carbon Capture & Storage — Techno-Economic Analysis (Indonesia)",
    summary:
      "Process simulation and TEA for CCS retrofits at Bojonegara and Sumsel-6 coal-fired power plants, varying capture rates against energy and economic impact.",
    year: "2014 — 2015",
    role: "Research engineer",
    tags: ["CCUS", "TEA", "Process Simulation"],
    kind: "research",
    liveUrl:
      "https://documents.worldbank.org/pt/publication/documents-reports/documentdetail/563781468284373788",
    body: "",
  },
  {
    slug: "kth-waste-heat",
    title: "Waste Heat Recovery from Supermarkets for District Heating",
    summary:
      "KTH Master's project designing HVAC and refrigeration heat recovery to feed district heating networks, in collaboration with Danfoss and Coop.",
    year: "2017 — 2018",
    role: "Project researcher",
    tags: ["HVAC", "District Heating", "Energy Efficiency"],
    kind: "research",
    liveUrl:
      "https://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1256154&dswid=-7520",
    body: "",
  },
  {
    slug: "empa-ict-lca",
    title: "ICT, Cloud & Data Center Sustainability",
    summary:
      "Built LCA datasets for the ICT sector, including novel data center and cloud datasets, published in the Swiss Federal LCA database (BAFU:2025).",
    year: "2023",
    role: "Postdoctoral researcher",
    tags: ["LCA", "ICT", "Data Centers"],
    kind: "research",
    body: "",
  },
];
