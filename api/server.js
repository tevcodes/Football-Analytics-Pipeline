import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import AppError from './utils/appError.js';
import globalErrorHandler from './middleware/errorMiddleware.js';
import matchRoutes from './routes/matchRoutes.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env')});

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/matches', matchRoutes);

app.all(/(.*)/, (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to MongoDB Atlas'))
.catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
