import axios from 'axios';

const pslTeams = [
    'Mamelodi Sundowns', 'Orlando Pirates', 'Kaizer Chiefs', 
    'Cape Town City', 'SuperSport United', 'Stellenbosch FC'
];

async function scoutMatch() {
    const home = pslTeams[Math.floor(Math.random() * pslTeams.length)];
    const away = pslTeams.filter(t => t !== home)[0];

    const matchData = {
        matchId: `PSL-${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
        league: "Dstv Premiership",
        homeTeam: home,
        awayTeam: away,
        homeXG: Number((Math.random() * 3.5).toFixed(2)), 
        awayXG: Number((Math.random() * 2.0).toFixed(2)),
        status: "live"
    };

    try {
        const response = await axios.post('http://localhost:3000/api/matches', matchData);
        console.log(`Scouted: ${home} vs ${away} | xG: ${matchData.homeXG}` );

        if (matchData.homeXG > 2.0) {
            console.log(`VALUE ALERT: High xG detected for ${home}`);
        }
    } catch (error) {
        console.error('Scout connection error:', error.message);
    }
}

console.log("Scoutech Ingestor is online... Scanning for PSL value...");
setInterval(scoutMatch, 1000);