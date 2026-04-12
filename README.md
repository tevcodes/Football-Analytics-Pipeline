Scoutech: PSL xG Analytics Engine ⚽🇿🇦


This is a professional-grade personal project designed to track Expected Goals (xG) in the South African PSL. It is an end-to-end system built to identify "Value Picks"—matches where team performance metrics suggest a scoring potential that the market hasn't yet fully recognized.

🛠️ Tech Stack
Frontend: Vue 3 (Composition API), Vite, Tailwind CSS v4, Axios

Backend: Node.js (ESM), Express, Mongoose

Database: MongoDB Atlas (with TTL automated data rotation)

DevOps: Concurrently, Wait-on, Dotenv

💻 The Frontend (Vue 3 + Tailwind v4)
I designed a high-end "Executive Dashboard" using a dark-mode, high-contrast theme.

Vue 3 (Composition API): Leveraging modern reactive states and decoupled components for a clean, maintainable architecture.

Defensive Rendering: The UI is "hardened" against inconsistent API data. I implemented optional chaining and nullish coalescing to ensure the dashboard remains functional (defaulting to 0.00) even if specific metrics are missing from the data stream.

Tailwind v4: Using utility-first styling for a "Glassmorphism" effect and responsive grid layouts that adapt from mobile to desktop.

🛡️ The Backend (API & Architecture)
Built with industry-standard patterns to ensure the system is "Production-Ready."

Centralized Error Handling: Implemented a global error-handling middleware with a custom AppError class, ensuring consistent API responses and a reliable "safety net" for the application.

Standardized Responses: Every endpoint follows a strict JSON envelope structure (status, results, data) for seamless frontend integration.

Data Lifecycle Management (TTL): To keep the system performant and cost-effective, I implemented MongoDB TTL (Time-To-Live) indexes. Match data is automatically purged after 24 hours, preventing database bloat.

🤖 The "Robot" (Data Ingestion Engine)
To simulate a live sports environment, I built a standalone Node.js worker (ingestor.js).

Automated Scouting: Streams randomized PSL match data into the pipeline to mimic a live third-party API provider.

Threshold Logic: Validates "Value Pick" logic by flagging high xG differentials (e.g., homeXG > 2.0) in real-time.

🔒 Security Hardening
Rate Limiting: Prevents API abuse using express-rate-limit.

Injection Defense: Uses mongo-sanitize and xss-clean to protect against NoSQL injection and Cross-Site Scripting.

HTTP Headers: Secured with Helmet to hide sensitive server signatures and enforce secure browser policies.

🚀 How to Run
Clone & Install: Run npm install in the root folder.

Environment: Create a .env in the root with your MONGODB_URI.

Launch: Run npm run dev.

Note: This utilizes concurrently to launch the API, the Ingestor (Robot), and the Vite Frontend simultaneously.

Current Status: TypeScript Migration
This project is currently undergoing a strategic migration from JavaScript to TypeScript to improve maintainability, reduce runtime errors, and provide a better developer experience.
