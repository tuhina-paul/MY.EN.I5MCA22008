### Campus Hiring Evaluation 2026 - Priority Inbox
This repository contains the full-stack implementation of a Priority Notification System developed as part of the 2026 Campus Hiring Evaluation. The system fetches notifications from a central API and organizes them based on professional priority levels and recency.

Features
Priority-Based Sorting: Notifications are categorized and sorted by weight:

Placement (Weight: 3)

Result (Weight: 2)

Event (Weight: 1)

Tech Stack
Frontend: React, TypeScript, Material UI (MUI)

Backend Logic: Node.js (v23) with Type Stripping

API Integration: RESTful API with Bearer Token Authorization

##Project Structure
├── docs/
│   └── src/stage6/index.ts      # Backend sorting logic
├── frontend/
│   └── src/App.tsx              # React UI & API Integration
├── notification_system_design.md # System architecture documentation
└── screenshots/                 # Execution & UI proofs

##Setup and Execution
Here is a concise README.md file tailored for your repository. It highlights the full-stack nature of the project and the specific technical constraints met during the Afford Medical Technologies evaluation.

Campus Hiring Evaluation 2026 - Priority Inbox
This repository contains the full-stack implementation of a Priority Notification System developed as part of the 2026 Campus Hiring Evaluation. The system fetches notifications from a central API and organizes them based on professional priority levels and recency.

## Features
Priority-Based Sorting: Notifications are categorized and sorted by weight:

Placement (Weight: 3)

Result (Weight: 2)

Event (Weight: 1)

Recency Logic: Secondary sorting ensures that the most recent notifications within each priority group appear first.

Production-Ready UI: A responsive frontend built with Material UI, featuring intuitive icons and color-coded chips for high-priority items.

Robust Error Handling: Implements graceful fallback to mock data in case of API authentication (401) or connection issues.

🛠️ Tech Stack
Frontend: React, TypeScript, Material UI (MUI)

Backend Logic: Node.js (v23) with Type Stripping

API Integration: RESTful API with Bearer Token Authorization

## Project Structure
Plaintext
├── docs/
│   └── src/stage6/index.ts      # Backend sorting logic
├── frontend/
│   └── src/App.tsx              # React UI & API Integration
├── notification_system_design.md # System architecture documentation
└── screenshots/                 # Execution & UI proofs
 
 ## Setup and Execution
Backend Logic (Stage 6)
To verify the sorting logic in the terminal:

node --experimental-strip-types docs/src/stage6/index.ts

Frontend UI (Stage 7)
To launch the Priority Inbox on http://localhost:3000:
cd frontend
npm install
npm start
