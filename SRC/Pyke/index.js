const championmasteriesv4 = require('./lib/CHAMPION-MASTERY/Champion');
const championv4 = require('./lib/CHAMPION/champion');
const summonerv4 = require('./lib/SUMMONER/Summoner');
const leaguev4 = require('./lib/LEAGUE/league');
const matchv4 = require('./lib/MATCH/match');
const spectatorv4 = require('./lib/SPECTATOR/spectator');
const apistatusv3 = require('./APIStatusAPI/index.js');
var mypackage = require("../../package.json");
const lib_ddragon = require('./lib_ddragon/lol-static-data');
var got = require('got');

//Riot API
class Pyke {
    constructor(api_key) {
        this.api_key = api_key; // Your API_KEY https://developer.riotgames.com/
        this.lastversion = (() => {
             got.get("https://raw.githubusercontent.com/systeme-cardinal/Pyke/master/SRC/Pyke/version.json", { json: true })
                .then(resp =>{
                  if (!resp.body) return console.log("Error to listen reposit github");
                  if (mypackage.version === resp.body.latest) return console.log("Pyke has last version");
                  if (mypackage.version === resp.body.beta) return console.log("Warning : You used of beta version");
                  return console.log(`Your version ${mypackage.version} is out dated, latest version is ${resp.body.latest} and beta github is ${resp.body.beta}`);
                })
                .catch(err => console.log("Impossible of verified if Pyke is up to date"))
                           })();
        this.summoner = new summonerv4(this.api_key); // Summoner V3
        this.masteries = new championmasteriesv4(this.api_key); // Masteries v3
        this.champion = new championv4(this.api_key); // champion
        this.league = new leaguev4(this.api_key); // League
        this.match = new matchv4(this.api_key); // Match
        this.spectator = new spectatorv4(this.api_key); // Ingame      
        //this.lol_static_data = console.log('The lol-static-data-v3 API is now deprecated and will be removed on Monday, August 27th, 2018. Please use Data Dragon as a replacement.');
        this.discord = {
             "RiotAPI":'`https://discord.gg/riotapi',
            "support_lib": "https://discord.gg/QgUnuk8"
        }
        this.status = new apistatusv3(); //API Status V3
    }; 
}

//DDragon tools
class DDragon{
    constructor(version){
        this.version = version;
        this.DDragon = new lib_ddragon();
        
    }
}

//CommunityDragon
class CommunityDragon {
    constructor() {
        this.discord = `https://discord.gg/C8xd8ag`;
        this.cdn = new (require('./CommunityDragon/index'))();
        this.link = `https://communitydragon.org/`;
    }
}


// Exportation
module.exports = {
    Pyke: Pyke,
    DDragon: DDragon,
    Regions: require('./regions.js'),
    statusCode: require('./statusCode.js'),
    game_constants: require('./GAMECONSTANTS.js'),
    CommunityDragon: CommunityDragon,
    MasteryPoints: new (require('./MasteryPoints/index'))
}
