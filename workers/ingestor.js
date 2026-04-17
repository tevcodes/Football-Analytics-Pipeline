import axios from 'axios';
import 'dotenv/config';
import crypto from 'crypto';

   const CONFIG = {
    apiUrl: process.env.API_URL || 'http://localhost:3000/api/matches',
    teams: [
        'Mamelodi Sundowns', 'Orlando Pirates', 'Kaizer Chiefs', 
        'Cape Town City', 'SuperSport United', 'Stellenbosch FC'
    ],
    delay: Number(process.env.INGESTOR_DELAY) || 3000
    };

    const startSmartIngestor = (teams, targetUrl, baseDelay) => {
    let retryCount = 0;
    const MAX_DELAY = 60000;

    const scoutMatch = async () => {
    const home = teams[Math.floor(Math.random() * teams.length)];
    const availableAwayTeams = teams.filter(t => t !== home);
    const away = availableAwayTeams[Math.floor(Math.random() * availableAwayTeams.length)]

    const matchData = {
        matchId: `PSL-${crypto.randomUUID().split('-')[0].toUpperCase()}`,
        league: "Dstv Premiership",
        homeTeam: home,
        awayTeam: away,
        homeXG: Number((Math.random() * 3.5).toFixed(2)), 
        awayXG: Number((Math.random() * 2.0).toFixed(2)),
        status: "live",
        timestamp: new Date().toISOString()
        };

        try {
        await axios.post(targetUrl, matchData) 
        console.log(`[INGESTOR] Success! ID: ${matchData.matchId}`);

        retryCount = 0;
        
         const jitter = (Math.random() * 400) - 200;
         setTimeout(scoutMatch, baseDelay + jitter);

        } catch (error) {
            retryCount++;
            const backoffDelay = Math.min(Math.pow(2, retryCount) * 1000, MAX_DELAY);
            console.error(`[INGESTOR] Error. Retrying in ${backoffDelay / 1000}s...`);

            setTimeout(scoutMatch, backoffDelay);
        }
    };

    scoutMatch();
};

console.log("Scoutech Ingestor is online... Scanning for PSL value...");
startSmartIngestor(CONFIG.teams, CONFIG.apiUrl, CONFIG.delay);