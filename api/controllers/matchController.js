import { Match } from '../models/matchModel.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

export const getMatches = catchAsync(async (req, res, next) => {
    const matches = await Match.find().sort({ date: -1});

    res.status(200).json({
        status: 'success',
        results: matches.length,
        data: matches
    });
});

export const createMatch = catchAsync(async (req, res, next) => {
    if (!req.body.homeTeam || !req.body.awayTeam) {
        return next(new AppError('Match must have a home and away team.', 400));
    }
    const newMatch = await Match.create(req.body);

    res.status(201).json({
        status: 'success',
        data: newMatch
    });
});

export const getPslValuePicks = catchAsync(async (req, res, next) => {
    const valueMatches = await Match.findValuePicks();

    if (!valueMatches || valueMatches.length === 0) {
        return next(new AppError('No high-value PSL picks found today.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: valueMatches.length,
        data: valueMatches
    });
});