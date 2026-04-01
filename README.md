This is a personal project I'm building to track Expected Goals (xG) in the South African PSL. Currently, it's a backend system that simulates live match data to find "Value Picks" (matches where a team is performing better than the score suggests).

What’s inside?
/api: A Node.js/Express server that connects to MongoDB Atlas.

/workers: A "Robot" (ingestor.js) that creates fake match data every 10 seconds to test the system.

Data Logic: It automatically flags any match where the home or away xG goes over 2.0.

How to run it
Clone the repo.

Run npm install.

Create a .env file in the root with your MONGODB_URI.

Open two terminals:

Terminal 1: node api/server.js (The Server)

Terminal 2: node workers/ingestor.js (The Robot)

My Goal
I’m building this to eventually connect to a real sports API and build a Vue.js dashboard. Right now, I'm focusing on making the backend stable and the data flow correctly between the "Robot" and the Database.