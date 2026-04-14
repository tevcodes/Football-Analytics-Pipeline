import axios from 'axios';
import 'dotenv/config';

   const CONFIG = {
    apiUrl: process.env.API_URL || 'http://localhost:3000/api/matches',
    teams: [
        'Mamelodi Sundowns', 'Orlando Pirates', 'Kaizer Chiefs', 
        'Cape Town City', 'SuperSport United', 'Stellenbosch FC'
    ],
    interval: 1000
    };

    async function scoutMatch(teams, targetUrl) {
    const home = teams[Math.floor(Math.random() * teams.length)];
    const away = teams.filter(t => t !== home)[0];

    const matchData = {
        matchId: `PSL-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
        league: "Dstv Premiership",
        homeTeam: home,
        awayTeam: away,
        homeXG: Number((Math.random() * 3.5).toFixed(2)), 
        awayXG: Number((Math.random() * 2.0).toFixed(2)),
        status: "live"
    };

    try {
      await axios.post(targetUrl, matchData);
      console.log(`[INGESTOR] ${home} vs ${away} | xG: ${matchData.homeXG}`);
    } catch (error) {
        console.error('Scout connection error:', error.message)
    }
}

console.log("Scoutech Ingestor is online... Scanning for PSL value...");

setInterval(() => {
    scoutMatch(CONFIG.teams, CONFIG.apiUrl);
}, CONFIG.interval);