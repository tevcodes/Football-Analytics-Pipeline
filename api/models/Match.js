import mongoose from 'mongoose';
import { LEAGUES, THRESHOLDS } from '../utils/constants.js'


const matchSchema = new mongoose.Schema({
    matchId: { type: String, required: true, unique: true },
    league: { type: String, default: 'Dstv Premiership' }, 
    homeTeam: { type: String, required: true },
    awayTeam: { type: String, required: true },
    venue: { type: String }, 
    homeXG: { type: Number },
    awayXG: { type: Number },
    status: { type: String, enum: ['scheduled', 'live', 'finished'], default: 'scheduled' },
    createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // Automatically deletes the document after 24 hours (86400 seconds)
  }
});

matchSchema.statics.findValuePicks = function() {
    return this.find({
        homeXG: { $gt: THRESHOLDS.HIGH_VALUE_XG },
        league: LEAGUES.PSL
    });
};

export const Match = mongoose.model('Match', matchSchema);