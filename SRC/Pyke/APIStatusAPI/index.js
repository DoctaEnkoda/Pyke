const got = require('got');

const endpoints = {
  documentation: 'https://querijn.codes/api_status/',
  api: 'https://querijn.codes/api_status/1.1/'
};

function downapi(apistatus) {
  return new Promise((resolve, reject) =>{
    try {
      var array = []; // Array
      for (const api in apistatus ) {
        array.push({name: api, value: apistatus[api]})
      };
      var down = array.filter(valeur => valeur.value['state'] == 'down');
      resolve(down);
    } catch (e) {
      reject({erreur: e});
    }
  });
}

function troubledapi(apistatus) {
  return new Promise((resolve, reject) =>{
    try {
      var array = []; // Array
      for (const api in apistatus ) {
        array.push({name: api, value: apistatus[api]})
      };
      var down = array.filter(valeur => valeur.value['state'] == 'troubled');
      resolve(down);
    } catch (e) {
      reject({erreur: e});
    }
  });
}

function upapi(apistatus) {
  return new Promise((resolve, reject) =>{
    try {
      var array = []; // Array
      for (const api in apistatus ) {
        array.push({name: api, value: apistatus[api]})
      };
      var down = array.filter(valeur => valeur.value['state'] == 'up');
      resolve(down);
    } catch (e) {
      reject({erreur: e});
    }
  });
}

module.exports = 
class APIStatusAPI {
  constructor() {
    this.documentation = endpoints.documentation;
    this.api = endpoints.api;
    //League
    this.league_up = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['league-v3'];
          var updown = await upapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.league_troubled = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['league-v3'];
          var updown = await troubledapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.league_down = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['league-v3'];
          var updown = await downapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    
        //Champion Mastry V3
    this.champion_mastery_up = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['champion-mastery-v3'];
          var updown = await upapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.champion_mastery_troubled = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['champion-mastery-v3'];
          var updown = await troubledapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.champion_mastery_down = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['champion-mastery-v3'];
          var updown = await downapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    
    //Champion V3
    this.champion_up = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['champion-v3'];
          var updown = await upapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.champion_troubled = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['champion-v3'];
          var updown = await troubledapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.champion_down = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['champion-v3'];
          var updown = await downapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    
    //Summoner V3
    this.summoner_up = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['summoner-v3'];
          var updown = await upapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.summoner_troubled = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['summoner-v3'];
          var updown = await troubledapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.summoner_down = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['summoner-v3'];
          var updown = await downapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    
        //Match V3
    this.match_up = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['match-v3'];
          var updown = await upapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.match_troubled = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['match-v3'];
          var updown = await troubledapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.match_down = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['match-v3'];
          var updown = await downapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    
     //Spectator V3
    this.spectator_up = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['spectator-v3'];
          var updown = await upapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.spectator_troubled = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['spectator-v3'];
          var updown = await troubledapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    this.spectator_down = function () {
      return new Promise((resolve, reject) =>{
        got.get(endpoints.api).then(async ok => {
          var json = JSON.parse(ok.body);
          var league = json['spectator-v3'];
          var updown = await downapi(league);
          resolve(updown)
        }).catch(reject);
      }) 
    };
    
  }
  
}
