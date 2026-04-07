import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import AppError from './utils/appError.js';
import globalErrorHandler from './middleware/errorMiddleware.js';
import matchRoutes from './routes/matchRoutes.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { mongoSanitize } from './middleware/sanitizeMiddleware.js';
import { xssClean } from './middleware/xssMiddleware.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env')});

const app = express();

// app.use((req, res, next) => {
 //    console.log(`Incoming: ${req.method} ${req.url}`);
 //   next();
// });

app.use(helmet());

app.use(cors({
  origin: 'http://localhost:5173'
}));

const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

app.use(express.json({limit: '10kb'}));

app.use(mongoSanitize); 
app.use(xssClean);

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
