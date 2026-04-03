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

🤖 The "Robot" (Workers)
Inside the /workers folder is ingestor.js. This is a standalone script that simulates a live data feed.

Real-time Simulation: It pushes new match data to MongoDB Atlas every 10 seconds.

Stress Testing: I use this to test how the database handles frequent updates and how the "Value Pick" logic flags high xG (over 2.0) in real-time.

How to run it
Clone the repo and run npm install.

Setup Environment: Create a .env file in the root with your MONGODB_URI.

Open three terminals:

Terminal 1 (Frontend): npm run dev (Vite dev server)

Terminal 2 (API): nodemon api/server.js (The Server)

Terminal 3 (Robot): node workers/ingestor.js (The Data Feed)