import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import AppError from './utils/appError.js';
import globalErrorHandler from './middleware/errorMiddleware.js';
import matchRoutes from './routes/matchRoutes.js';
import { mongoSanitize } from './middleware/sanitizeMiddleware.js';
import { xssClean } from './middleware/xssMiddleware.js';

const app = express();


app.use(helmet());

app.use(cors({
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : 'http://localhost:5173',
  credentials: true
}));

const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);


app.use(express.json({ limit: '10kb' }));

app.use(mongoSanitize); 
app.use(xssClean);


app.use('/api/matches', matchRoutes);


app.all(/(.*)/, (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;