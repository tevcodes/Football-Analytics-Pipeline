import { jest } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import AppError from '../utils/appError.js';

jest.unstable_mockModule('../models/matchModel.js', () => ({
  Match: {
    find: jest.fn().mockReturnThis(),
    sort: jest.fn().mockResolvedValue([
      { homeTeam: 'Kaizer Chiefs', awayTeam: 'Orlando Pirates', homeXG: 2.1, league: 'DStv Premiership' }
    ])
  }
}));

const { default: matchRoutes } = await import('../routes/matchRoutes.js');
const { default: globalErrorHandler } = await import('../middleware/errorMiddleware.js');


const app = express();
app.use(express.json());
app.use('/api/matches', matchRoutes);

app.all(/(.*)/, (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);


describe('Match API Endpoints', () => {
  
  it('should return a 200 status and the match data', async () => {
    const res = await request(app).get('/api/matches');


    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('success');
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data[0].homeTeam).toBe('Kaizer Chiefs');
  });

  it('should return 404 for a route that does not exist', async () => {
    const res = await request(app).get('/api/matches/unknown-route');
    
    expect(res.statusCode).toEqual(404);
    expect(res.body.status).toBe('fail');
  });
});