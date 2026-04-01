import { Match } from '../models/Match.js';

export const createMatch = async (req, res) => {
    try {
        const newMatch = new Match(req.body);
        const savedMatch = await newMatch.save();
        res.status(201).json(savedMatch);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

export const getMatches = async (req, res) => {
    try {
        const matches = await Match.find();
        res.status(200).json(matches)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getPslValuePicks = async (req, res) => {
    try {
        // Find matches where homeXG is high but they aren't winning
        const valueMatches = await Match.find({
            homeXG: { $gt: 2.0 },
            league: "DStv Premiership"
        });
        res.status(200).json(valueMatches);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}