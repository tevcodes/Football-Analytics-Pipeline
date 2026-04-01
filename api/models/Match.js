import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
    matchId: { type: String, required: true, unique: true },
    league: { type: String, default: "DStv Premiership" }, // Default to PSL
    homeTeam: { type: String, required: true },
    awayTeam: { type: String, required: true },
    venue: { type: String }, // e.g., "Athlone Stadium" or "Loftus Versfeld"
    homeXG: { type: Number },
    awayXG: { type: Number },
    status: { type: String, enum: ['scheduled', 'live', 'finished'], default: 'scheduled' }
});

export const Match = mongoose.model('Match', matchSchema);