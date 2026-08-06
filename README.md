\# 🚀 DevSecOps CI/CD Pipeline



A production-grade DevSecOps pipeline built with GitHub Actions, Docker, and Prometheus/Grafana monitoring.



\## 🏗️ Architecture



Code Push → GitHub Actions Pipeline → Docker → Live Monitoring



| Stage | Tool | Purpose |

|-------|------|---------|

| Code Quality | ESLint | Enforce code standards |

| Run Tests | Jest + Supertest | Unit \& integration tests (100% coverage) |

| Build | Docker (multi-stage) | Build minimal, non-root production image |

| Security Scan | Trivy + npm audit | Vulnerability scanning |

| Deploy | Docker | Container deployment |

| Monitoring | Prometheus + Grafana | Live metrics dashboard |



\## 🛠️ Tech Stack

Node.js 18 · Express.js · Jest · Supertest · Docker · Docker Compose · GitHub Actions · Trivy · Prometheus · Grafana · ESLint



\##  Live Dashboard

!\[Dashboard](./dashboard-screenshot.png)



Tracks total requests, error rate, uptime, and heap memory usage in real time.



\##  Run Locally

\\`\\`\\`bash

git clone https://github.com/Amanchauhan12/devsecops-pipeline

cd devsecops-pipeline

docker-compose up -d

\\`\\`\\`



\- App: http://localhost:3000

\- Metrics: http://localhost:3000/metrics

\- Prometheus: http://localhost:9090

\- Grafana: http://localhost:3001 (admin / admin123)



\##  Author

\*\*Aman Chauhan\*\* — Software Engineer

