Scoutech: PSL xG Analytics Engine ⚽🇿🇦
This is a professional-grade personal project I’m building to track Expected Goals (xG) in the South African PSL. It’s an end-to-end system designed to find "Value Picks"—matches where a team is performing better than the score suggests, but the odds haven't caught up yet.

💻 The Frontend (Vue 3 + Tailwind v4)
I wanted a high-end, "Executive Dashboard" feel, so I went with a dark-mode, high-contrast theme inspired by the Vite and Material UI 3 aesthetics.

Vue 3 (Composition API): Using modern reactive states for the dashboard.

Tailwind v4: Implementing a custom "Glassmorphism" navbar and animated "Underline Reveal" navigation.

Responsive Design: Fully mobile-responsive with a hidden-to-flex sidebar/navbar for desktop users.

🛡️ The Backend (API & Security)
I’m focusing on industry-standard architecture to make this "Production-Ready."

Express.js (ESM): The whole backend uses ES Modules (import/export) for modern JS consistency.

Centralized Error Handling: I’ve implemented a global error-handling middleware with a custom AppError class. No more scattered try/catch blocks—everything is streamlined through a single "Safety Net."

Standardized Responses: Every API response follows a strict JSON envelope (status, results, data) so the frontend always knows what to expect.

The "Robot" (Data Ingestion Engine)
To simulate a high-traffic sports environment, I built a standalone Node.js worker (ingestor.js) that acts as a mock data provider.

Automated Ingestion: Streams randomized PSL match data into MongoDB every 10 seconds to mimic a live API integration.

Real-time Analytics: Validates the "Value Pick" logic by flagging high xG differentials (e.g., xG > 2.0) as data flows through the pipeline.

🛡️ Industry-Standard Security
I’ve "hardened" the Express backend to ensure it's production-ready and protected against common web vulnerabilities:

DDoS & Rate Limiting: Implemented express-rate-limit to prevent API abuse and brute-force attacks.

NoSQL Injection Defense: Integrated express-mongo-sanitize to strip malicious operators from user-supplied queries.

XSS Protection: Used xss-clean to sanitize user input and prevent Cross-Site Scripting.

Secure HTTP Headers: Configured helmet to hide sensitive server info and add a layer of specialized security headers.

🚀 How to Run (The "Unified" Workflow)
Clone & Install: npm install in the root folder.

Environment: Create a .env in the root with your MONGODB_URI.

Launch: Run npm run dev.

Note: This uses concurrently to launch the API, the Robot, and the Frontend simultaneously.