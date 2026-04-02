import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import matchRoutes from './routes/matchRoutes.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env')});

console.log("Database URI check:", process.env.MONGODB_URI ? "Connected!" : "Missing!");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/matches', matchRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to MongoDB Atlas'))
.catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
